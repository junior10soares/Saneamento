import { useCallback, useState } from "react";
import {Link} from "react-router-dom";
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
import capa from '../../../assets/public/imagens/Macrodrenagem/capa.jpg';


const Macrodrenagem = () => {
  return (
    <>
      <Header />
      <BannerPage image={capa} />
      <Container>
        <Center>
          <TitleSection center>
           <strong>Obras de Macrodrenagem</strong>
          </TitleSection>
          <TitleSection center style={{fontSize: 16}}>
          O que são <strong>drenagem</strong> e <strong>macrodrenagem?</strong> 
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
            A drenagem urbana é uma rede de infraestrutura de equipamentos urbanos feita para coletar, escoar, direcionar e dispor as águas pluviais em corpos d’agua. O sistema de drenagem urbana engloba dois subsistemas principais característicos: a microdrenagem e a macrodrenagem.
A macrodrenagem corresponde à drenagem natural, constituída por rios e córregos, que pode receber obras que a modificam e a complementam, tais como canalizações, barragens, piscinões, diques e outras. A falta de uma boa infraestrutura em macrodrenagem pode ocasionar enchentes e alagamentos na cidade; proliferação de mosquitos, insetos e outros animais; ocorrência de deslizamentos e movimentação de terra; e causar danos às residências, ao patrimônio público e às pessoas.
            </p>         
          </TextSection>

          <TitleSection center>
            <strong>Complexo Viário Cassaquera</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
            O <strong>Complexo Viário Cassaquera</strong> é a primeira intervenção de macrodrenagem realizada pelo
             Semasa, por meio do Programa Sanear Santo André. Desde junho de 2020, ocorrem as obras de <strong>canalização 
             de 1,7 quilômetro do córrego Cassaquera.</strong>
              A canalização do curso d’água tem como objetivos:            
              <p style={{ textAlign: "justify" }}>
                • Melhorar o escoamento da água, diminuindo a incidência de enchentes.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Atenuar transtornos decorrentes de fortes chuvas.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Reduzir a ocorrência de descarte irregular de resíduos.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Proteger as margens do córrego.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Diminuir o assoreamento, que é quando ocorre deslizamento de terra e outros resíduos das margens para o leito.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Acabar com o assoreamento, que é quando ocorre deslizamento de
                terra e outros resíduos das margens para o leito.
              </p>
              <p style={{ textAlign: "justify" }}>
                • Regularizar a coleta e o tratamento de esgoto no trecho da canalização, ajudando na despoluição do curso d’água e preservando o meio ambiente. 
              </p>
            </p>
            <p style={{ textAlign: "justify" }}>
            A pedido do Semasa, a Sabesp implantou coletores-tronco e realizou serviços de interligação de 
            ramais e de redes. Com isso, no trecho onde o curso d’água está sendo canalizado, 100% dos efluentes 
            passaram a ser <strong>coletados e tratados</strong> devidamente. Isso corresponde a aproximadamente 80% de redução de
             esgoto despejado no curso d’água.
            O investimento para o Complexo Viário Cassaquera é de R$ 40 milhões. Além da canalização do córrego Cassaquera,
            o Semasa está construindo um <strong>novo sistema viário na avenida Luiz Ignácio de Anhaia Melo.</strong> A via receberá asfalto, 
            iluminação de LED, projeto paisagístico e novos semáforos. As melhorias tanto no córrego quanto na avenida serão
              realizadas até a rua Fernando Costa, no Parque Gerassi. A previsão é de que as obras acabem no final de 2021.
            Como <strong>medida de compensação ambiental</strong>, o Semasa plantará cerca de 600 árvores na região do córrego Cassaquera, 
            beneficiando os bairros Vila Homero Thon, Jardim Marek, Vila Guarani, Vila Progresso, Vila Guaraciaba, 
            Centreville e Parque Gerassi. Todas as intervenções em decorrência das obras do Complexo Viário Cassaquera
            vão beneficiar diretamente cerca de <strong>34 mil moradores.</strong> 
            </p>           
          </TextSection>

          <Title>
            <strong>Piscinão</strong>
          </Title>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
            Quando chove demais, os córregos podem encher rapidamente e transbordar, provocando inundações nas áreas vizinhas. É para evitar isso que os piscinões são construídos. A drenagem urbana direciona o escoamento das águas pluviais para os tanques de detenção, fazendo com que seja armazenado o excesso de água, o que evita enchentes.
Santo André ganhará um <strong>novo piscinão na região do córrego Guarará</strong>, na avenida Capitão Mário Toledo de Camargo, no Jardim Ipanema. O tanque de detenção será o maior equipamento municipal, com capacidade de armazenamento de água de 263 mil m². A obra visa:
            </p>
            <p style={{ textAlign: "justify" }}>
            Santo André ganhará um novo piscinão na  região do córrego Guarará, na avenida Capitão Mário Toledo de Camargo, no Jardim Ipanema. O tanque de detenção será o <strong>maior equipamento municipal</strong>, com capacidade de armazenamento de água de 263 mil m². A obra visa:
            </p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir a ocorrência de alagamentos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Diminuir perdas materiais e humanas em residências, indústrias e comércios, além de riscos à saúde pública com a transmissão de doenças pela água da chuva, como a leptospirose.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Economizar custos com manutenção, restauração e reabilitação de equipamentos públicos danificados após a ocorrência de chuvas.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir transtornos causados pela interdição de ruas e a paralisação de serviços públicos essenciais, como o transporte público. 
            </p>
          </TextSection>
        </Center>
      </Container>

      <Container>
        <Center>
          <TitleSection className="text-center">
            Obras em <strong>andamento</strong>
          </TitleSection>
           <Row>
            {/* <WorkCarouselMacro category="bb7f1800-35be-11eb-9d71-c1039530e0d5" /> */}
            <WorkCarouselMacro  />
          </Row>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export default Macrodrenagem;
