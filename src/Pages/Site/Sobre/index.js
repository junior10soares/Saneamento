import { Header } from "../../../components/Header";
import {
  Container,
  Center,
  TitleSection,
  TextSection,
  BannerPage,
  ImagemSobre,
  Rounded,
  TimelineContainer,
  TimelineContent,
  TimelineTitle,
  TimelineText,
  TimelineLine,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import sobre from "../../../assets/public/imagens/Sobre/sobre.jpg";
import prefeito from "../../../assets/public/imagens/Sobre/prefeito.jpg";
import { Chrono } from "react-chrono";

const data = [
  {
    title: (
      <div>
        <p>{"\u25cf Mobilização para buscar recursos junto à CAF"}</p>
      </div>
    ),
  },
  {
    title: (
      <div>
        <p>{"\u25cf 28 de setembro - Envio de projeto de lei à câmara"}</p>
      </div>
    ),
  },
  {
    title: (
      <div>
        <p>{"\u25cf 24 e 26 de junho - Visita de representantes da CAF"}</p>
        <p>
          {"\u25cf 17 de dezembro - Aval do Senado para financiamento do banco"}
        </p>
        <p>{"\u25cf 30 de dezembro - Assinatura do contrato com a CAF"}</p>
      </div>
    ),
  },
  {
    title: (
      <div>
        <p>
          {
            "\u25cf 12 de junho - Início das obras do Complexo Viário Cassaquera"
          }
        </p>
        <p>
          {
            "\u25cf Agosto - Trabalho Técnico Socioambiental do Complexo Viário Cassaquera"
          }
        </p>
      </div>
    ),
  },
  {
    title: (
      <div>
        <p>
          {
            "\u25cf 11 de novembro - Começo do estudo de catadores de recicláveis"
          }
        </p>
      </div>
    ),
  },
  {
    title: (
      <div>
        <p>
          {
            "\u25cf 4 e 12 de abril - Construção das Estações de Coleta Ana Maria, Bangu e Palmeiras"
          }
        </p>
        <p>
          {"\u25cf Maio - Trabalho Técnico Socioambiental dos novos ecopontos"}
        </p>
        <p>{"\u25cf 13 de junho - Construção da Estação de Coleta Centro"}</p>
        <p>
          {
            "\u25cf 11 de julho - Construção da Estação de Coleta Jardim Cristiane"
          }
        </p>
        <p>
          {
            "\u25cf 11 de julho - Exposição sobre catadores autônomos de recicláveis"
          }
        </p>
        <p>
          {
            "\u25cf 15 de agosto - Construção da Estação de Coleta Jardim Cristiane"
          }
        </p>
        <p>
          {
            "\u25cf 12 de setembro - Abertura das Estações de Coleta Ana Maria, Bangu e Palmeiras"
          }
        </p>
        <p>
          {
            "\u25cf 10 de outubro - Construção da Estação de Coleta Vila Guiomar"
          }
        </p>
        <p>
          {
            "\u25cf 22 de novembro - Construção da Estação de Coleta Jardim Santo André"
          }
        </p>
      </div>
    ),
  },
  {
    title: (
      <div>
        <p>
          {"\u25cf 20 de janeiro - Construção da Estação de Coleta Vila Linda"}
        </p>
        <p>
          {
            "\u25cf 23 de janeiro - Construção da Estação de Coleta Parque Miami"
          }
        </p>
      </div>
    ),
  },
];

const Sobre = ({ workLocations }) => {
  return (
    <>
      <Header />
      <BannerPage image={sobre} />
      <Container>
        <Center>
          <TitleSection center>
            <strong>Sobre o programa</strong>
          </TitleSection>
          <TextSection columns="2">
            <p style={{ textAlign: "justify" }}>
              O Sanear Santo André (Saneasa) é um dos{" "}
              <strong>
                maiores programas de saneamento, drenagem, combate às enchentes
                e infraestrutura
              </strong>{" "}
              urbana da história do município. As intervenções são executadas
              pela Prefeitura de Santo André, por meio da Secretaria de
              Infraestrutura e Serviços Urbanos, e pelo Semasa (Serviço
              Municipal de Saneamento Ambiental de Santo André), com
              financiamento de US$ 50 milhões pela CAF – Banco de
              Desenvolvimento da América Latina. Como contrapartida, o município
              investirá US$ 12,5 milhões.
            </p>
            <p style={{ textAlign: "justify" }}>
              As primeiras intervenções começaram em junho de 2020 com a
              canalização do córrego Cassaquera, que também contempla a criação
              de um novo sistema viário na avenida Luiz Ignácio de Anhaia Melo.
              Essas obras ganharam o nome de{" "}
              <strong>Complexo Viário Cassaquera. </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              O Programa Sanear Santo André ainda inclui a construção de mais{" "}
              <strong>10 Estações de Coleta</strong>, um{" "}
              <strong>piscinão</strong> subterrâneo no Parque da Juventude.
            </p>
            <p>Os investimentos têm como objetivo:</p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir a incidência de enchentes.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              • Melhorar o sistema de mobilidade urbana.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              • Aperfeiçoar a gestão de resíduos sólidos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Modernizar e otimizar o sistema de monitoramento e alerta de
              chuva.{" "}
            </p>{" "}
            <ImagemSobre>
              <div className="imageAbout">
                <img src={prefeito} alt="Semasa" />
              </div>
              <div className="textAbout">
                <p style={{ fontStyle: "italic" }}>
                  O prefeito de Santo André, Paulo Serra, assinou no dia 30 de
                  dezembro de 2019 o contrato de financiamento de US$ 50 milhões
                  junto à CAF – Banco de Desenvolvimento da América Latina.{" "}
                </p>
              </div>
            </ImagemSobre>
          </TextSection>
        </Center>
        <TimelineTitle>
          <h2>
            Trajetória para viabilizar o<br />
            <strong>Programa Sanear Santo André</strong>
          </h2>
        </TimelineTitle>
        <TimelineContainer className="timelineContainer">
          <TimelineContent className="timelineContent">
            <div className="chronoDiv" style={{ width: "100%", height: "95vh" }}>
              <Chrono
                items={data}
                mode="VERTICAL_ALTERNATING"
                focusActiveItemOnLoad
                activeItemIndex={1}
                theme={{
                  primary: "black",
                  secondary: "none",
                  titleColor: "black",
                  cardBgColor: "none",
                  titleColorActive: "black",
                }}
                cardHeight={320}
              >
                <div className="chrono-icons">
                  <Rounded after={"\u2192"} color="#D7A187">
                    2017
                  </Rounded>
                  <Rounded before={"\u2190"} color="#0A5DAB">
                    2018
                  </Rounded>
                  <Rounded after={"\u2192"} color="#62B948">
                    2019
                  </Rounded>
                  <Rounded before={"\u2190"} color="#F14E1D">
                    2020
                  </Rounded>
                  <Rounded after={"\u2192"} color="#D7A187">
                    2021
                  </Rounded>
                  <Rounded before={"\u2190"} color="#0A5DAB">
                    2022
                  </Rounded>
                  <Rounded after={"\u2192"} color="#F14E1D">
                    2023
                  </Rounded>
                </div>
              </Chrono>
            </div>
          </TimelineContent>
        </TimelineContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Sobre;
