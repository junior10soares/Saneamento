import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { FiDownload, FiLoader } from 'react-icons/fi';
import DashboardLayout from '../../../components/DashboardLayout';
import { notify } from '../../../Notification';
import { InputBox } from '../../../styles/styles';
import { ChartsContent, FlexContent, LoadingContent } from './styles';
import { LineBarChart } from '../../../components/LineBarChart';
import { PieChart } from '../../../components/PieChart';
import { StackedBarChart } from '../../../components/StackedBarChart';
import { VerticalBarChart } from '../../../components/VerticalBarChart';
import api from '../../../services/api';
import DashboardButton from '../../../components/DashboardButton';
import { format, parse } from 'date-fns';

const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_PREFIX}/${process.env.REACT_APP_API_VERSION}`;

const PowerBi = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(false);
  const [responseDataCharts, setResponseDataCharts] = useState({});
  const [userMe, setUserMe] = useState({});

  const getUserMe = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('me');
      setUserMe(response?.data?.data);
    } catch (error) {
      notify('error', `Erro ao buscar permissões de usuário: ${error.message}`);
    }
    setLoading(false);
  }, []);

  const getDataCharts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get('dashboard-data');
      setResponseDataCharts(response?.data?.original);
    } catch (error) {
      notify('error', `Erro ao buscar os dados dos gráficos: ${error.message}`);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    getUserMe();
  }, [getUserMe]);

  useEffect(() => {
    getDataCharts();
  }, [getDataCharts]);

  const searchDataCharts = async () => {
    try {
      setLoading(true);
      const response = await api.get(
        `dashboard-data?filters[periodo@less_than_or_equal_to]=${formData?.mes_ano_inicial}-01&filters[periodo@greater_than_or_equal_to]=${formData?.mes_ano_final}-01`,
      );
      setResponseDataCharts(response?.data?.original);
    } catch (error) {
      notify('error', `Erro ao filtrar dados: ${error.message}`);
    }
    setLoading(false);
  };

  const convertBase64 = (arquivo) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(arquivo);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleUploadFile = async (e) => {
    if (e.target.files?.length <= 0) {
      return;
    }

    const file = e.target.files[0];

    if (
      file.type !==
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      notify('error', 'Apenas arquivos (.xlsx) serão aceitos!');
      return;
    }

    if (!window.confirm('Se estiver certo de sua decisão, clique em OK.')) {
      return;
    }

    setLoading(true);

    try {
      const base64 = await convertBase64(file);
      const formatedBase64 = base64.split(';')[1].replace('base64,', '');

      const response = await api.post('dashboard-data', {
        file: formatedBase64,
      });

      setResponseDataCharts(response?.data?.original);

      notify('success', 'Importação efetuada com sucesso!');
    } catch (error) {
      notify('error', error.message);
    }

    setLoading(false);
  };

  const handleChangeFilters = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(formData).length <= 0) {
      notify('error', 'Informe o período corretamente!');
      return;
    }

    await searchDataCharts();
  };

  const renderInput = () => {
    if (!userMe?.role?.name === 'admin') return <></>;

    if (loading)
      return (
        <LoadingContent>
          <h5>Processando informações...</h5>
          <FiLoader size={20} className="icon-spin" />
        </LoadingContent>
      );
    return (
      <>
        <h3>Importar arquivo (.xlsx)</h3>
        <FlexContent>
          <InputBox
            type="file"
            name="stats-data-file"
            accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            onChange={handleUploadFile}
          />
          <DashboardButton
            onClick={() => {
              window.open(`${apiUrl}/dashboard-data/export`);
            }}
            style={{ width: '25%' }}
          >
            <FiDownload size={20} style={{ marginRight: 10 }} />
            Arquivo atual
          </DashboardButton>
        </FlexContent>
      </>
    );
  };

  const renderFilters = () => {
    return (
      <div style={{ marginBottom: 50 }}>
        <h4 style={{ fontWeight: 'normal' }}>Período</h4>
        <FlexContent>
          <InputBox
            type="month"
            name="mes_ano_inicial"
            onChange={(e) => handleChangeFilters(e.target.name, e.target.value)}
          />
          <InputBox
            type="month"
            name="mes_ano_final"
            onChange={(e) => handleChangeFilters(e.target.name, e.target.value)}
          />
          <DashboardButton
            type="button"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? 'Buscando...' : 'Buscar'}
          </DashboardButton>
        </FlexContent>
      </div>
    );
  };

  const renderCharts = () => {
    if (Object.values(responseDataCharts || {}).length <= 0) return <></>;

    return (
      <>
        {renderFilters()}

        {responseDataCharts?.createdAt && (
          <h3 style={{ opacity: 0.5, textAlign: 'center' }}>
            Atualizado em:{' '}
            {format(
              parse(responseDataCharts.createdAt, 'yyyy-MM', new Date()),
              'MM/yyyy',
            )}
          </h3>
        )}

        <ChartsContent>
          <StackedBarChart data={responseDataCharts.gastosAnuais} />
          <PieChart
            data={responseDataCharts.proporcaoContrapartida}
            width={400}
            height={300}
          />
          <VerticalBarChart
            data={responseDataCharts.gastosTotaisComponente}
            width={800}
            height={400}
          />

          <LineBarChart data={responseDataCharts.totalAcumuladoYear} />
        </ChartsContent>
      </>
    );
  };

  return (
    <DashboardLayout title="Dashboard Power BI">
      {renderInput()}
      {renderCharts()}
    </DashboardLayout>
  );
};

export default PowerBi;
