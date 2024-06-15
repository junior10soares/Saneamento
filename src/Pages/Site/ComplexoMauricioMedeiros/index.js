import React from "react";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import maquete from "../../../assets/public/imagens/ComplexoMauricio/maquete.jpeg";
import Charts from "../../../components/Charts";
import {
  Container,
  Center,
  TextSection,
  TitleSection,
  ImagemComplexo,
  VideoContainer,
} from "./styles";

const ComplexoMauricioMedeiros = () => {
  return (
    <div>
      <Header />
      <Container style={{ paddingTop: 20 }}>
        <Center>
          <TitleSection center>
            <strong>Complexo Maurício de Medeiros</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              As obras do Complexo Maurício de Medeiros começaram em 7 de março
              de 2024 e contemplam investimentos nas áreas de{" "}
              <strong>saneamento, infraestrutura e mobilidade urbana.</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              As melhorias serão realizadas ao longo da avenida Maurício de
              Medeiros, no Jardim Irene. Fazem parte do pacote de obras a
              canalização de 1.040 metros do córrego Maurício de Medeiros e de
              200 metros do córrego André Magini, além da construção de um novo
              sistema viário que terá duas pistas com 2 faixas de rolamento em
              cada lado.
            </p>
            <p style={{ textAlign: "justify" }}>
              A nova via terá 2.000 metros de pavimentação entre a rua Aristídes
              Lôbo, avenida Maurício de Medeiros e a rua Ciprestes; 4 opções de
              retorno; proteção com barreiras de concreto (new Jersey); 69
              postes e 79 luminárias com tecnologia LED; e sinalizações
              horizontal (faixas de pedestres, faixa branca) e vertical (placas,
              avisos, semáforos).
            </p>
            <p style={{ textAlign: "justify" }}>
              Para melhorar a captação e o escoamento da água pluvial, serão
              implantados equipamentos de microdrenagem: 18 bocas de lobo
              (bueiros), 7 grelhas, 11 bocas de leão e mais de 200 metros de
              tubulação de ramais.
            </p>
            <ImagemComplexo>
              <div className="imageComplexo">
                <img className="imageComplexo" src={maquete} alt="Semasa" />
              </div>
              <div className="textAbout">
                <p className="LegendaComplexo" style={{ fontStyle: "italic" }}>
                  Projeção de como ficará a avenida Maurício de Medeiros.{" "}
                </p>
              </div>
            </ImagemComplexo>
            <p style={{ textAlign: "justify" }}>
              As intervenções do Complexo Maurício de Medeiros ainda envolvem
              projeto paisagístico, com plantio de espécies arbóreas, e
              implantação de coletor tronco para coletar e tratar o esgoto
              doméstico que é lançado irregularmente no córrego, causando
              poluição e proliferação de insetos e animais vetores de doença.
            </p>
            <p style={{ textAlign: "justify" }}>
              Outro benefício que será possível graças às obras envolve a
              ampliação de 12.800 m² da Escola Parque Cata Preta. Trata-se de um
              complexo que reúne equipamentos de educação, cultura, esporte e
              lazer, como as creches Cata Preta e Profº Hideki Koyama, a Emeief
              (Escola Municipal de Educação Infantil e Ensino Fundamental)
              Carolina Maria de Jesus e o Centro Comunitário, que formam o Cesa
              (Centro Educacional de Santo André) Cata Preta.
            </p>
            <p style={{ textAlign: "justify" }}>
              A previsão é de que as obras durem 18 meses, com investimento de
              cerca de R$ 105 milhões.
            </p>
            <p>
              <strong>Objetivos das obras:</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              • Melhorar o escoamento da água, minimizando a ocorrência de
              enchentes e pontos de alagamento.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir transtornos decorrentes de fortes chuvas.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              • Diminuir a ocorrência de pontos de descarte irregular de
              resíduos na avenida Maurício de Medeiros.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Regularizar a coleta e o tratamento de esgoto na região,
              contribuindo para preservar o meio ambiente e levar mais qualidade
              de vida à população.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              • Facilitar o acesso aos bairros Jardim Irene, Cata Preta e Vila
              João Ramalho.{" "}
            </p>{" "}
            <p style={{ textAlign: "justify" }}>
              • Aliviar o congestionamento do trânsito na Estrada Cata Preta e
              reduzir o tempo para trafegar nas avenidas Estrada do Pedroso e
              Capitão Mário Toledo de Camargo.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Potencializar o desenvolvimento econômico e a valorização dos
              imóveis.
            </p>
            <VideoContainer>
              <p>Confira o vídeo da maquete digital:</p>
              <div className="video-container">
                <iframe
                  title="Vídeo da maquete"
                  width="480"
                  height="260"
                  src="https://www.youtube.com/embed/VsRxzeqt4d0"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </VideoContainer>
          </TextSection>
          <div>
            <Charts />
          </div>
        </Center>
      </Container>
      <Footer />
    </div>
  );
};

export default ComplexoMauricioMedeiros;
