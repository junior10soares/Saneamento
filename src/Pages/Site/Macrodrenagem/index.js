import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import {
  Title,
  BannerPage,
  Container,
  Center,
  Row,
  TitleSection,
  TextSection,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import WorkCarouselMacro from "../../..//components/WorkCarouselMacro";
import { Header } from "../../../components/Header";
import request from "../../../services/api";
import capa from "../../../assets/public/imagens/Macrodrenagem/capa.jpg";




const Macrodrenagem = () => {
  const [works, setWorks] = useState([]);
  return (
    <>
      <Header />
      <BannerPage image={capa} />
      <Container>
        <Center>
          <TitleSection center>
            <strong>Obras de Macrodrenagem</strong>
          </TitleSection>
          <TitleSection center style={{ fontSize: 21 }}>
            O que são <strong>drenagem</strong> e{" "}
            <strong>macrodrenagem?</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              A drenagem urbana é uma rede de infraestrutura de equipamentos
              urbanos feita para coletar, escoar, direcionar e dispor as águas
              pluviais em corpos d’agua. O sistema de drenagem urbana engloba
              dois subsistemas principais característicos: a microdrenagem e a
              macrodrenagem.
            </p>
            <p>
              A macrodrenagem corresponde à drenagem natural, constituída por
              rios e córregos, que pode receber obras que a modificam e a
              complementam, tais como canalizações, barragens, piscinões, diques
              e outras. A falta de uma boa infraestrutura em macrodrenagem pode
              ocasionar enchentes e alagamentos na cidade; proliferação de
              mosquitos, insetos e outros animais; ocorrência de deslizamentos e
              movimentação de terra; e causar danos às residências, ao
              patrimônio público e às pessoas.
            </p>
          </TextSection>

          <TitleSection center>
            <strong>Complexo Viário Cassaquera</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              
              O <strong>Complexo Viário Cassaquera</strong> foi a primeira
              intervenção de macrodrenagem, infraestrutura e mobilidade urbana
              realizada pelo Semasa, por meio do Programa Sanear Santo André. Em
              junho de 2020 começaram os serviços para canalizar 1,7 quilômetro
              do córrego Cassaquera e construir um novo sistema viário na
              avenida Professor Luiz Ignácio de Anhaia Mello. Aguardadas há mais
              de 30 anos pela população, as obras foram entregues no dia 30 de
              janeiro de 2022 e objetivam:
              <p style={{ textAlign: "justify" }}>
                • Melhorar o escoamento da água, diminuindo a incidência de
                enchentes e pontos de alagamento
              </p>
              <p style={{ textAlign: "justify" }}>
                • Minimizar os transtornos decorrentes de fortes chuvas.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Reduzir a ocorrência de descarte irregular de resíduos.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Regularizar a coleta e o tratamento de esgoto no trecho de
                canalização do córrego, contribuindo para despoluir o curso
                d'água, o que beneficia o meio ambiente e proporciona mais
                qualidade de vida à população.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Melhorar a mobilidade urbana e a ligação entre as avenidas dos
                Estados, Giovanni Battista Pirelli e Luiz Ignácio de Anhaia
                Mello, além de facilitar o acesso ao Rodoanel.
              </p>
              <p style={{ textAlign: "justify" }}>
                <a href="https://sanear.vercel.app/obra/bb02fa20-5b46-11eb-b245-7f8b63d57198">Clique aqui</a> para saber mais sobre o Complexo Viário Cassaquera, que teve
                investimento de mais de R$ 45 milhões.
              </p>
            </p>
          </TextSection>

          <Title>
            <strong>Piscinão</strong>
          </Title>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              Quando chove demais, os córregos podem encher rapidamente e
              transbordar, provocando inundações nas áreas vizinhas. É para
              evitar isso que os piscinões são construídos. A drenagem urbana
              direciona o escoamento das águas pluviais para os tanques de
              detenção, fazendo com que seja armazenado o excesso de água, o que
              evita enchentes.
            </p>
            <p style={{ textAlign: "justify" }}>
              Santo André ganhará um{" "}
              <strong>novo piscinão na região do córrego Guarará</strong>, na
              avenida Capitão Mário Toledo de Camargo, no Jardim Ipanema. O
              tanque de detenção será o{" "}
              <strong>maior equipamento municipal</strong>.<br></br>A obra visa:
            </p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir a ocorrência de alagamentos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Diminuir perdas materiais e humanas em residências, indústrias e
              comércios, além de riscos à saúde pública com a transmissão de
              doenças pela água da chuva, como a leptospirose.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Economizar custos com manutenção, restauração e reabilitação de
              equipamentos públicos danificados após a ocorrência de chuvas.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir transtornos causados pela interdição de ruas e a
              paralisação de serviços públicos essenciais, como o transporte
              público.
            </p>
          </TextSection>
        </Center>
      </Container>

      {/* <Container>
        <Center>
          <TitleSection className="text-center">
            Obras em <strong>andamento</strong>
          </TitleSection>
          <Row>
             <WorkCarouselMacro category="bb7f1800-35be-11eb-9d71-c1039530e0d5" /> 
            <WorkCarouselMacro />
          </Row>
        </Center>
      </Container> */}
      <Footer />
    </>
  );
};

export default Macrodrenagem;
