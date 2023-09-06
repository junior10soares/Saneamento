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
//img timeline
import img2017 from "../../../assets/public/imagens/Sobre/2017.png";
import img2018 from "../../../assets/public/imagens/Sobre/2018.png";
import img2019 from "../../../assets/public/imagens/Sobre/2019.png";
import img2020 from "../../../assets/public/imagens/Sobre/2020.png";
import img2021 from "../../../assets/public/imagens/Sobre/2021.png";
import img2022 from "../../../assets/public/imagens/Sobre/2022.png";
import img2023 from "../../../assets/public/imagens/Sobre/2023.png";

import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import sobre from "../../../assets/public/imagens/Sobre/sobre.jpg";
import prefeito from "../../../assets/public/imagens/Sobre/prefeito.jpg";
import { Chrono } from "react-chrono";

const data = [
  {
    cardDetailedText: (
      <div>
        <p className="cardDetailedText">
          {"\u25cf"} Mobilização para buscar recursos junto à CAF
        </p>
      </div>
    ),
  },
  {
    cardDetailedText: (
      <div>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>28 de setembro</strong> - Envio de projeto de lei à
          câmara
        </p>
      </div>
    ),
  },
  {
    cardDetailedText: (
      <div>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>24 e 26 de junho</strong> - Visita de
          representantes da CAF
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>17 de dezembro</strong> - Aval do Senado para
          financiamento do banco
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>30 de dezembro</strong> - Assinatura do contrato
          com a CAF
        </p>
      </div>
    ),
  },
  {
    cardDetailedText: (
      <div>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>12 de junho</strong> - Início das obras do Complexo
          Viário Cassaquera
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>Agosto</strong> - Trabalho Técnico Socioambiental
          do Complexo Viário Cassaquera
        </p>
      </div>
    ),
  },
  {
    cardDetailedText: (
      <div>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>11 de novembro</strong> - Começo do estudo de
          catadores de recicláveis
        </p>
      </div>
    ),
  },
  {
    cardDetailedText: (
      <div>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>4 e 12 de abril</strong> - Construção das Estações
          de Coleta Ana Maria, Bangu e Palmeiras
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>Maio</strong> - Trabalho Técnico Socioambiental dos
          novos ecopontos
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>13 de junho</strong> - Construção da Estação de
          Coleta Centro
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>11 de julho</strong> - Construção da Estação de
          Coleta Jardim Cristiane
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>11 de julho</strong> - Exposição sobre catadores
          autônomos de recicláveis
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>15 de agosto</strong> - Construção da Estação de
          Coleta Jardim Cristiane
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>12 de setembro</strong> - Abertura das Estações de
          Coleta Ana Maria, Bangu e Palmeiras
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>10 de outubro</strong> - Construção da Estação de
          Coleta Vila Guiomar
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>22 de novembro</strong> - Construção da Estação de
          Coleta Jardim Santo André
        </p>
      </div>
    ),
  },
  {
    cardDetailedText: (
      <div>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>20 de janeiro</strong> - Construção da Estação de
          Coleta Vila Linda
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>23 de janeiro</strong> - Construção da Estação de
          Coleta Parque Miami
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>25 de agosto</strong> - Abertura da Estação de
          Coleta Jardim Cristiane
        </p>
        <p className="cardDetailedText">
          {"\u25cf"} <strong>31 de agosto</strong> - Fim do Trabalho Técnico
          Socioambiental das obras dos ecopontos
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
              O Programa Sanear Santo André ainda inclui a construção de mais 12
              Estações de Coleta e a instalação de estações meteorológicas,
              bocas de lobo (bueiros) inteligentes, fluviômetros e pluviômetros.
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
                <img className="imageSobre" src={prefeito} alt="Semasa" />
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
      </Container>
      <TimelineContainer className="timelineContainer">
        <TimelineContent className="timelineContent">
          <div className="desktopStepBar">
            <div className="groupButtons">
              <div className="buttonAlign">
                <div
                  className="chronoDiv"
                  style={{ width: "100%", height: "95vh" }}
                >
                  <Chrono
                    items={data}
                    mode="VERTICAL_ALTERNATING"
                    focusActiveItemOnLoad
                    activeItemIndex={1}
                    contentDetailsHeight={380}
                    readMore={true}
                    theme={{
                      primary: "black",
                      secondary: "none",
                      titleColor: "black",
                      titleColorActive: "black",
                    }}
                    buttonTexts={{
                      first: "Primeiro",
                      last: "Último",
                      next: "Próximo",
                      previous: "Anterior",
                    }}
                  >
                    <div className="chrono-icons">
                      <img className="imgTimeLine" src={img2017} alt="2017" />
                      <img className="imgTimeLine" src={img2018} alt="2018" />
                      <img className="imgTimeLine" src={img2019} alt="2019" />
                      <img className="imgTimeLine" src={img2020} alt="2020" />
                      <img className="imgTimeLine" src={img2021} alt="2021" />
                      <img className="imgTimeLine" src={img2022} alt="2022" />
                      <img className="imgTimeLine" src={img2023} alt="2023" />
                    </div>
                  </Chrono>
                </div>
              </div>
            </div>
          </div>
          <div className="responsiveStepBar">
            <div className="groupButtonsResponsive">
              <div className="buttonAlignResponsive">
                <div
                  className="chronoDivResponsive"
                  style={{ width: "100%", height: "95vh" }}
                >
                  <Chrono
                    items={data}
                    mode="VERTICAL"
                    focusActiveItemOnLoad
                    activeItemIndex={1}
                    theme={{
                      primary: "black",
                      secondary: "none",
                      titleColor: "black",
                      titleColorActive: "black",
                    }}
                  >
                    <div className="chrono-icons">
                      <img className="imgTimeLine" src={img2017} alt="2017" />
                      <img className="imgTimeLine" src={img2018} alt="2018" />
                      <img className="imgTimeLine" src={img2019} alt="2019" />
                      <img className="imgTimeLine" src={img2020} alt="2020" />
                      <img className="imgTimeLine" src={img2021} alt="2021" />
                      <img className="imgTimeLine" src={img2022} alt="2022" />
                      <img className="imgTimeLine" src={img2023} alt="2023" />
                    </div>
                  </Chrono>
                </div>
              </div>
            </div>
          </div>
        </TimelineContent>
      </TimelineContainer>
      <Footer />
    </>
  );
};

export default Sobre;
