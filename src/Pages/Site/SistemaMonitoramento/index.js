import React, { useState, useCallback, useEffect } from "react";
import { Header } from "../../../components/Header";
import {
BannerPage,
Center,
Container,
Row,
TextSection,
TitleSection
} from "./styles";
import { DocumentsList } from '../../../components/DocumentsList';
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import monitoramento from '../../../assets/public/imagens/monitoramento/monitoramento.jpeg';
import fluviometros from '../../../assets/public/imagens/monitoramento/sea.png';
import estacoes from '../../../assets/public/imagens/monitoramento/cloudy.png';
import reabilitacao from '../../../assets/public/imagens/monitoramento/wrench.png';
import reestruturacao from '../../../assets/public/imagens/monitoramento/wall.png';
import modelagem from '../../../assets/public/imagens/monitoramento/statistics.png';
import software_simulacao from '../../../assets/public/imagens/monitoramento/flood.png';
import compatibilizacao from '../../../assets/public/imagens/monitoramento/ico-2.png';
import treinamento from '../../../assets/public/imagens/monitoramento/customer.png';
import pluviometros from '../../../assets/public/imagens/monitoramento/rainy-day.png';
import boca_lobos from '../../../assets/public/imagens/monitoramento/ico11.png';
import servidores from '../../../assets/public/imagens/monitoramento/server.png';
import estudos from '../../../assets/public/imagens/monitoramento/file.png';
import software_gestao from '../../../assets/public/imagens/monitoramento/data-management.png';
import sistema_integrador from '../../../assets/public/imagens/monitoramento/deep-learning.png';
import integracao from '../../../assets/public/imagens/monitoramento/web-development.png';
import consultoria from '../../../assets/public/imagens/monitoramento/male-telemarketer.png';

/* export async function getServerSideProps() {
  const response = await api({
    url: `work?filters[][work_category.uuid@equal]=bb7f1850-35be-11eb-afab-b56d7c8b75a2`,
  });
  const constructions = response.data.data || [];

  return {
    props: {
      constructions,
    },
  };
} */

const SistemaMonitoramento = ({ constructions }) =>  {
  const [isVisible, setVisible] = useState(false);
  const [construction, setConstruction] = useState([]);


  const categoriesResponse = useCallback(() => {
    api.get('work?filters[][work_category.uuid@equal]=bb7f1850-35be-11eb-afab-b56d7c8b75a2').then(({ data }) => setConstruction(data.data));
   }, [])

   useEffect(() => {
    categoriesResponse();
   }, [categoriesResponse]);

  return (
    <>
      <Header />
      <BannerPage image={monitoramento} />
      <Container>
        <Center>
          <TitleSection center>
            <strong>Sistema de monitoramento</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
            Santo André terá o seu <strong>sistema de monitoramento e alerta de chuva ampliado e modernizado</strong>, 
            a fim de otimizar a velocidade e a qualidade dos alertas enviados à população, bem como 
            possibilitar mais eficiência de medidas que devem ser tomadas em decorrência de adversidades 
            pluviométricas. Os principais benefícios são: 
              <p>
              • Minimizar prejuízos materiais, de saúde e demais problemas à
                população.
              </p>
              <p>
              • Registrar o histórico do comportamento das inundações para
                melhoria do processo de gestão.
              </p>
              <p>
              • Ter indicadores estatísticos, de ocorrências, desempenho de
                produtividade e atendimento.
              </p>
              <p>• Apoiar planejamento e decisões estratégicas.</p>
              <p>
              • Identificar causas e problemas, bem como responsabilidades.
              </p>
              <p>
              • Obter maior eficiência ao detectar e comunicar ocorrências
                críticas e desastres.
              </p>
              <p>
              • Melhorar a qualidade do atendimento de solicitações feitas
                pela população.
              </p>
              <p>• Agilizar a limpeza e/ ou os reparos após ocorrências.</p>
              <p>
              • Reduzir o número de chamados e solicitações por meio de outros
                canais atendimento.
              </p>
              <p>
              • Estreitar o relacionamento com a população, incentivando a
                participação colaborativa na gestão.
              </p>
              <p>• Realizar análise de previsão meteorológica.</p>
              <p>• Alertar previamente a população em situação de risco.</p>
            </p>

          <p style={{fontWeight: "bold"}}>As intervenções no sistema de monitoramento de chuva preveem:</p>
          </TextSection>
            <Center>
              <DocumentsList>
                <div className="Grid">
                  <div className="row">
                    <span className="span-column" style={{marginLeft: 5, marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={fluviometros} />
                      <p style={{margin: 0}}>23 fluviômetros (existem 9)</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={estacoes} />
                      <p style={{margin: 0, marginRight: 10}}>7 Estações meteorológicas (existem 5, mas 3 estão fora do ar)</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={reabilitacao} />
                      <p style={{margin: 0, flexWrap: 'wrap'}}>Reablitação e readequação dos equipamentos existentes</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={reestruturacao} />
                      <p style={{margin: 0, flexWrap: 'wrap'}}>Reestruturação do CECOI e COI</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={modelagem} />
                      <p style={{margin: 0, flexWrap: 'wrap'}}>Modelagem hidrológica</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={software_simulacao} />
                      <p style={{margin: 0, flexWrap: 'wrap'}}>Software de simulação de inudação</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={compatibilizacao} />
                      <p style={{margin: 0, flexWrap: 'wrap'}}>Compatibilização com equipamentos existentes</p>
                    </span>
                    <span className="span-column" style={{marginRight: 5}}>
                      <img style={{ height: 50, width: 50}} src={treinamento} />
                      <p style={{margin: 0 , flexWrap: 'wrap'}}>Treinamento</p>
                    </span>
                  </div>

                  <div className="row">
                    <span className="span-column" style={{marginLeft: 5, marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={pluviometros} />
                      <p style={{margin: 0}}>9 pluviômetros (existem 2)</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={boca_lobos} />
                      <p style={{margin: 0}}>560 Bocas de lobo inteligentes</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={servidores} />
                      <p style={{margin: 0}}>Servidores no COI e CECOI</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={estudos} />
                      <p style={{margin: 0}}>Estudos necessários</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={software_gestao} />
                      <p style={{margin: 0}}>Software de gestão de riscos e alertas</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={sistema_integrador} />
                      <p style={{margin: 0}}>Sistema Integrador</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={integracao} />
                      <p style={{margin: 0}}>Integração e Compatibilização com bases/fontes externas</p>
                    </span>
                    <span className="span-column" style={{marginRight: 6}}>
                      <img style={{ height: 50, width: 50}} src={consultoria} />
                      <p style={{margin: 0}}>Consultoria Especializada</p>
                    </span>
                  </div>
                </div>
              </DocumentsList>
            </Center>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
            O novo sistema de monitoramento de chuva será operado e centralizado em uma nova sala da Defesa Civil, localizada no prédio da Prefeitura. As imagens e informações também serão passadas ao Cecoi (Centro de Controle Operacional Integrado) do Semasa para que seus técnicos façam a manutenção preventiva da rede de drenagem nos eventos pós-chuva.        
                   </p>
          </TextSection>
        </Center>
      </Container>

{/*       {hasPictures && hasVideos && (
        <Container>
          <Center>
            <AlbumPhotos midiaArray={midiaArray} />
          </Center>
        </Container>
      )} */}

      <Container>
        <Center>
          {isVisible && (
            <TitleSection className="text-center">
              Obras em <strong>Andamento</strong>
            </TitleSection>
          )}
          <Row>
            <WorkCarousel category="bb7f1850-35be-11eb-afab-b56d7c8b75a2" />
          </Row>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export default SistemaMonitoramento;
