import { useMemo, useState, useCallback, useEffect } from "react";
import { Header } from "../../../components/Header";
import api from '../../../services/api';
import {
  Container,
  Center,
  TitleSection,
  TextSection,
  BannerPage,
  ImagemSobre,
  Rounded,  
  TimelineContainer,
  TimelineTitle,
  TimelineLine
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import MapComponent from "../../../components/MapComponent";
import sobre from '../../../assets/public/imagens/Sobre/sobre.jpg'
import prefeito from '../../../assets/public/imagens/Sobre/prefeito.jpg'

const Sobre = ({ workLocations }) =>  {
  const [location, setLocation] = useState([]);
  const workRequest = useCallback(() => {
    api.get('work-coordinate?order[id]=desc').then(({ data }) => setLocation(data.data));
   }, [])
/*   const worksCoordinates = useMemo(() =>
    workLocations.map((location) => ({
      lng: location.long,
      lat: location.lat,
      name: location.name,
    }))
  ); */

  useEffect(() => {
    workRequest();
  }, [workRequest]);

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
            O Sanear Santo André (Saneasa) é um dos <strong>maiores programas de saneamento, drenagem, combate às enchentes e infraestrutura</strong> urbana da história do município. As intervenções são executadas pelo Semasa (Serviço Municipal de Saneamento Ambiental de Santo André), com financiamento de US$ 50 milhões pela CAF – Banco de Desenvolvimento da América Latina. A Prefeitura e o Semasa investirão US$ 12,5 milhões como contrapartida. 
            </p>
            <p style={{ textAlign: "justify" }}>
            As primeiras intervenções começaram em junho de 2020 com a canalização do córrego Cassaquera, que também contempla a criação de um novo sistema viário na avenida Luiz Ignácio de Anhaia Melo. Estas obras ganharam o nome de <strong>Complexo Viário Cassaquera. </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
            O Programa Sanear Santo André ainda inclui a construção de mais <strong>20 Estações de Coleta</strong>, um <strong>piscinão </strong>na sub-bacia do córrego Guarará com diversas obras de drenagem e a modernização e <strong>ampliação do sistema de monitoramento de chuva</strong> da cidade. As obras serão realizadas até 2024. 
            </p>
            <p>
             Os investimentos têm como objetivo: 
            </p>
            <p style={{ textAlign: "justify" }}>• Reduzir a incidência de enchentes. </p>
            <p style={{ textAlign: "justify" }}>• Melhorar o sistema de mobilidade urbana. </p>
            <p style={{ textAlign: "justify" }}>• Aperfeiçoar a gestão de resíduos sólidos.</p>
            <p style={{ textAlign: "justify" }}>• Otimizar o sistema de monitoramento de chuva do município. </p>            <ImagemSobre>
          <div className="imageAbout">
            <img src={prefeito} alt="Semasa"/>
          </div>
          <div className="textAbout">
            <p style={{fontStyle: "italic"}}>
            O prefeito de Santo André, Paulo Serra, assinou no dia 30 de dezembro de 2019 o contrato de financiamento de US$ 50 milhões junto à CAF – Banco de Desenvolvimento da América Latina.            </p>
          </div>
        </ImagemSobre>
          </TextSection>
        </Center>
        <TimelineContainer>
          <TimelineTitle>
            <h2>Trajetória para viabilizar o<br/><strong>Programa Sanear Santo André</strong></h2>
          </TimelineTitle>

          <TimelineLine>
            <Rounded color="#D7A187" after="Mobilização para buscar recursos junto à CAF">
                2017
            </Rounded>
          </TimelineLine>
          <TimelineLine>
            <Rounded color="#0A5DAB" before="28 de Setembro - Envio de projeto de lei à câmara">
                2018
            </Rounded>
          </TimelineLine>
          <TimelineLine>
            <Rounded color="#62B948" after="24 e 26 de Junho - Visita de representantes da CAF">
                2019
            </Rounded>
          </TimelineLine>
          <TimelineLine>
            <Rounded color="#F14E1D" before="17 de Dezembro - Aval do Senado para financiamento do banco">
                2019
            </Rounded>
          </TimelineLine>
          <TimelineLine>
            <Rounded color="#0A5DAB" after="30 de Dezembro - Assinatura do contrato com a CAF">
                2019
            </Rounded>
          </TimelineLine>
          <TimelineLine>
            <Rounded color="#F14E1D" before="12 de Junho - Início das obras do Complexo Viário Cassaquera">
                2020
            </Rounded>
          </TimelineLine>
        </TimelineContainer>
      </Container>
      <Container>
      </Container>
      <Footer />
    </>
  );
}

export default Sobre;