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

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "500px",
};
const Microrreservatorios = () => {
  const [works, setWorks] = useState([]);
  return (
    <>
      <Header />
      <Container>
        <Center>
          <TitleSection center>
            <strong>Microrreservatórios</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              Conhecidos popularmente como piscininhas, os microrreservatórios
              de água pluvial são equipamentos subterrâneos que{" "}
              <strong>ajudam a armazenar a água da chuva</strong> antes de
              enviá-la a córregos ou rios, minimizando a ocorrência de
              enchentes. Esses equipamentos de drenagem também são fundamentais
              para reduzir a incidência de pontos de alagamento nos bairros.
            </p>
            <p style={{ textAlign: "justify" }}>
              A Prefeitura de Santo André vai construir mais 7 piscininhas às
              margens do córrego Guarará, na avenida Capitão Mário Toledo de
              Camargo, região do bairro Vila Pires. Ao todo, os equipamentos
              terão capacidade útil para armazenar 4.711 m³ de água. Os 7
              microrreservatórios têm investimento previsto de R$ 26.391.860,23.
            </p>
            <p style={{ textAlign: "justify" }}>
              Com as obras, a região chegará a 14 equipamentos do tipo –
              atualmente, já existem microrreservatórios localizados sob as ruas
              Caquito, Caravelas, Buri, Miguel Ângelo, Nossa Senhora de Lourdes,
              Imirim e Jericó. Juntas, as piscininhas têm capacidade para
              armazenar mais de 4.500 m³ de água.
            </p>
            <p style={{ textAlign: "justify" }}>
              Veja abaixo a{" "}
              <strong>localização dos novos microrreservatórios.</strong>
            </p>
          </TextSection>
          <iframe
            style={containerStyle}
            src="https://www.google.com/maps/d/u/0/embed?mid=1OPTQBphWju9C6TwXmnDtp74SzFuBSQ8&ehbc=2E312F&noprof=1"
            width="640"
            height="480"
          ></iframe>
        </Center>
      </Container>
      <Footer />
    </>
  );
};

export default Microrreservatorios;
