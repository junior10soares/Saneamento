import React, { useState, useCallback, useEffect } from "react";
import { Header } from "../../../components/Header";
import {
  BannerPage,
  Center,
  Container,
  Row,
  TextSection,
  TitleSection,
} from "./styles";
import { DocumentsList } from "../../../components/DocumentsList";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import monitoramento from "../../../assets/public/imagens/monitoramento/monitoramento.jpeg";
import fluviometros from "../../../assets/public/imagens/monitoramento/sea.png";
import estacoes from "../../../assets/public/imagens/monitoramento/cloudy.png";
import reabilitacao from "../../../assets/public/imagens/monitoramento/wrench.png";
import reestruturacao from "../../../assets/public/imagens/monitoramento/wall.png";
import modelagem from "../../../assets/public/imagens/monitoramento/statistics.png";
import software_simulacao from "../../../assets/public/imagens/monitoramento/flood.png";
import compatibilizacao from "../../../assets/public/imagens/monitoramento/ico-2.png";
import treinamento from "../../../assets/public/imagens/monitoramento/customer.png";
import pluviometros from "../../../assets/public/imagens/monitoramento/rainy-day.png";
import boca_lobos from "../../../assets/public/imagens/monitoramento/ico11.png";
import servidores from "../../../assets/public/imagens/monitoramento/server.png";
import estudos from "../../../assets/public/imagens/monitoramento/file.png";
import software_gestao from "../../../assets/public/imagens/monitoramento/data-management.png";
import sistema_integrador from "../../../assets/public/imagens/monitoramento/deep-learning.png";
import integracao from "../../../assets/public/imagens/monitoramento/web-development.png";
import consultoria from "../../../assets/public/imagens/monitoramento/male-telemarketer.png";
import data_center from "../../../assets/public/imagens/monitoramento/data-center.png";
import security_cam from "../../../assets/public/imagens/monitoramento/security-cam.png";

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

const SistemaMonitoramento = ({ constructions }) => {
  const [isVisible, setVisible] = useState(false);
  const [construction, setConstruction] = useState([]);

  const categoriesResponse = useCallback(() => {
    api
      .get(
        "work?filters[][work_category.uuid@equal]=bb7f1850-35be-11eb-afab-b56d7c8b75a2"
      )
      .then(({ data }) => setConstruction(data.data));
  }, []);

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
              Santo André terá o seu{" "}
              <strong>
                sistema de monitoramento e alerta de chuva ampliado e
                modernizado
              </strong>
              , a fim de otimizar a velocidade e a qualidade dos alertas
              enviados à população, bem como possibilitar mais eficiência de
              medidas que devem ser tomadas em decorrência de adversidades
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

            <p style={{ fontWeight: "bold" }}>
              As intervenções no sistema de monitoramento de chuva preveem:
            </p>
          </TextSection>
          <Center>
            <DocumentsList>
              <div className="Grid">
                <div className="row">
                  <span
                    className="span-column"
                    style={{
                      marginLeft: 20,
                      marginRight: 12,
                      textAlign: "center",
                    }}
                  >
                    <img style={{ height: 50, width: 50 }} src={security_cam} />
                    <p style={{ margin: 0, flexWrap: "wrap" }}>
                      114 câmeras de monitoramento (já existiam 14)
                    </p>
                  </span>
                  <span
                    className="span-column"
                    style={{ marginRight: 12, textAlign: "center" }}
                  >
                    <img style={{ height: 50, width: 50 }} src={fluviometros} />
                    <p style={{ margin: 0 }}>78 fluviômetros (existem 9)</p>
                  </span>
                  <span className="span-column" style={{ marginRight: 12 }}>
                    <img style={{ height: 50, width: 50 }} src={estacoes} />
                    <p style={{ margin: 0, marginRight: 10 }}>
                      25 Estações meteorológicas (existia apenas 1 em operação)
                    </p>
                  </span>
                  <span
                    className="span-column"
                    style={{ marginRight: 12, textAlign: "center" }}
                  >
                    <img style={{ height: 50, width: 50 }} src={reabilitacao} />
                    <p style={{ margin: 0, flexWrap: "wrap" }}>
                      Reablitação e readequação dos equipamentos existentes
                    </p>
                  </span>
                  <span className="span-column" style={{ marginRight: 12 }}>
                    <img style={{ height: 50, width: 50 }} src={modelagem} />
                    <p style={{ margin: 0, flexWrap: "wrap" }}>
                      Modelagem hidrológica
                    </p>
                  </span>
                  <span className="span-column" style={{ marginRight: 12 }}>
                    <img
                      style={{ height: 50, width: 50 }}
                      src={compatibilizacao}
                    />
                    <p style={{ margin: 0, flexWrap: "wrap" }}>
                      Compatibilização com equipamentos existentes
                    </p>
                  </span>
                </div>

                <div className="row">
                  <span
                    className="span-column"
                    style={{
                      marginLeft: 50,
                      marginRight: 11,
                      textAlign: "center",
                    }}
                  >
                    <img style={{ height: 50, width: 50 }} src={treinamento} />
                    <p style={{ margin: 0, flexWrap: "wrap" }}>Treinamento</p>
                  </span>

                  <span
                    className="span-column"
                    style={{ marginLeft: 0, marginRight: 12 }}
                  >
                    <img style={{ height: 50, width: 50 }} src={pluviometros} />
                    <p style={{ margin: 0 }}>17 pluviômetros (já existem 2)</p>
                  </span>
                  <span className="span-column" style={{ marginRight: 0 }}>
                    <img style={{ height: 50, width: 50 }} src={boca_lobos} />
                    <p style={{ margin: 0 }}>561 Bocas de lobo inteligentes</p>
                  </span>
                  <span className="span-column" style={{ marginRight: 14 }}>
                    <img style={{ height: 50, width: 50 }} src={integracao} />
                    <p style={{ margin: 0 }}>
                      Integração e Compatibilização com bases/fontes externas
                    </p>
                  </span>
                  <span className="span-column" style={{ marginRight: 14 }}>
                    <img style={{ height: 60, width: 80 }} src={data_center} />
                    <p style={{ margin: 0 }}>Novo Data Center</p>
                  </span>
                  <span
                    className="span-column"
                    style={{ marginLeft: 12, marginRight: 12 }}
                  >
                    <img style={{ height: 50, width: 50 }} src={consultoria} />
                    <p style={{ margin: 0 }}>Consultoria Especializada</p>
                  </span>
                </div>
              </div>
            </DocumentsList>
          </Center>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              O novo sistema de monitoramento de chuva será operado e
              centralizado em uma nova sala da Defesa Civil, localizada no
              prédio da Prefeitura. As imagens e informações também serão
              passadas ao Cecoi (Centro de Controle Operacional Integrado) do
              Semasa para que seus técnicos façam a manutenção preventiva da
              rede de drenagem nos eventos pós-chuva.
            </p>
            <p style={{ textAlign: "justify" }}>
              As imagens e informações do novo sistema de monitoramento estão
              disponíveis na Defesa Civil de Santo André, no COI (Centro de
              Operações Integradas), localizado no prédio executivo da
              Prefeitura, e no Cecoi (Centro de Controle Operacional Integrado),
              espaço onde ficam as equipes que atuam no setor de drenagem.
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
};

export default SistemaMonitoramento;
