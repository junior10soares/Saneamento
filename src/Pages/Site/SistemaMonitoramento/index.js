import React, { useState, useCallback, useEffect } from "react";
import { Header } from "../../../components/Header";
import {
  BannerPage,
  Center,
  Container,
  ButtonLink,
  Row,
  TextSection,
  TitleSection,
  ButtomSection,
  ButtomContainer,
  EstacaoLink,
  BueirosLink,
  FluvioLink,
  HeaderPage,
  GridContainer,
  IconTextContainer,
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
import ai from "../../../assets/public/imagens/monitoramento/AI.png";
import security_cam from "../../../assets/public/imagens/monitoramento/security-cam.png";
import estacao from "../../../assets/public/imagens/monitoramento/estacao.png";
import bueiro from "../../../assets/public/imagens/monitoramento/manhole.png";
import fluviometer from "../../../assets/public/imagens/monitoramento/fluviometer.png";
import EstacaoMeteorologicas from "../EstacaoMeteorologicas";

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
        <div className="desktopStepBar" style={{ width: "100%" }}>
          <div className="groupButtons">
            <div className="buttonAlign">
              <div style={{ marginRight: 4 }}>
                <EstacaoLink theme="primary" href="/estacao-meteorologicas">
                  <img
                    className="icon-estacao"
                    style={{ height: 40, width: 40 }}
                    src={estacao}
                  />
                  Estações meteorológicas
                </EstacaoLink>
              </div>
              <div style={{ marginRight: 4 }}>
                <BueirosLink theme="primary" href="/bueiros-inteligentes">
                  <img
                    className="icon-estacao"
                    style={{ height: 40, width: 40 }}
                    src={bueiro}
                  />
                  Boca de Lobo Inteligente
                </BueirosLink>
              </div>
              <div>
                <FluvioLink theme="primary" href="/fluviometros">
                  <img
                    className="icon-estacao"
                    style={{ height: 50, width: 40 }}
                    src={fluviometer}
                  />
                  Fluviômetros
                </FluvioLink>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
        <Center>
          <HeaderPage style={{ marginBottom: 110, marginTop: -20 }}>
            <TitleSection center>
              <strong>Sistemas de Monitoramento</strong>
            </TitleSection>{" "}
          </HeaderPage>{" "}
          <div className="responsiveStepBar">
            <div className="groupButtonsResponsive">
              <div className="buttonAlignResponsive">
                <div>
                  <EstacaoLink theme="primary" href="/estacao-meteorologicas">
                    <img
                      className="icon-estacao"
                      style={{ height: 40, width: 40 }}
                      src={estacao}
                    />
                    Estações meteorológicas
                  </EstacaoLink>
                </div>
                <div>
                  <BueirosLink theme="primary" href="/bueiros-inteligentes">
                    <img
                      className="icon-estacao"
                      style={{ height: 40, width: 40 }}
                      src={bueiro}
                    />
                    Bueiros Inteligentes
                  </BueirosLink>
                </div>
              </div>{" "}
            </div>{" "}
          </div>{" "}
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
            <GridContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={security_cam} />
                <p>114 câmeras de monitoramento (já existiam 14)</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={fluviometros} />
                <p>78 fluviômetros (existem 9)</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={estacoes} />
                <p>25 Estações meteorológicas (existia apenas 1 em operação)</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={reabilitacao} />
                <p>Reabilitação e readequação dos equipamentos existentes</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={modelagem} />
                <p>Modelagem hidrológica</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={compatibilizacao} />
                <p>Compatibilização com equipamentos existentes</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={treinamento} />
                <p>Treinamento</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={ai} />
                <p>
                  Predição de chuvas utilizando Inteligência Artificial com base
                  de dados históricos do município
                </p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={boca_lobos} />
                <p>561 Bocas de lobo inteligentes</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={integracao} />
                <p>Integração e Compatibilização com bases/fontes externas</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 60, width: 80 }} src={data_center} />
                <p>Novo Data Center</p>
              </IconTextContainer>
              <IconTextContainer>
                <img style={{ height: 50, width: 50 }} src={consultoria} />
                <p>Consultoria</p>
              </IconTextContainer>
            </GridContainer>
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
          </TextSection>
        </Center>
      </Container>
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
