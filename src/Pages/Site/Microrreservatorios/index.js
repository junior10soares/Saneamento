import { useState } from "react";

import { Container, Center, TitleSection, TextSection } from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";

import { Header } from "../../../components/Header";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "500px",
};

// const locations = [
//   { lat: -23.647825, lng: -46.539901, name: "Rua Alida" },
//   { lat: -23.648689, lng: -46.536243, name: "Rua Armida" },
//   { lat: -23.647872, lng: -46.538737, name: "Rua Caiapós" },
//   { lat: -23.647343, lng: -46.538033, name: "Rua Cajuru" },
//   { lat: -23.648937, lng: -46.537505, name: "Rua Tucuruí" },
//   { lat: -23.648115, lng: -46.539785, name: "Rua Santa Joana d'arc" },
//   { lat: -23.648563, lng: -46.538681, name: "Rua Icaraí" },
// ];

const mapaUrl =
  "https://www.google.com/maps/d/embed?mid=1fmHDJkMK2hFhme2rmYKR4CCZhtD_wEY&ehbc=2E312F";

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
              Conhecidos popularmente como <strong>piscininhas</strong>, os
              microrreservatórios subterrâneos são equipamentos de drenagem que
              ajudam a armazenar a água da chuva antes de enviá-la a córregos ou
              rios.
            </p>
            <p style={{ textAlign: "justify" }}>
              Prefeitura irá construir, no ano de 2024,{" "}
              <strong>7 piscininhas às margens do córrego Guarará</strong>, na
              avenida Capitão Mário Toledo de Camargo, com capacidade de
              armazenamento de mais de 4.700 m³ de água. Serão investidos mais
              de R$ 26 milhões para implantar os novos equipamentos.
            </p>
            <p style={{ textAlign: "justify" }}>
              Com isso, a região terá 14 dispositivos do tipo – atualmente, já
              existem 7 microrreservatórios na Vila Pires. Eles armazenam até
              4.500 m³ de água.
            </p>
            <p>
              <strong>As obras têm como objetivos:</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              • Reter a água pluvial para minimizar a possibilidade de
              transbordamento de córregos e rios.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Diminuir prejuízos ocasionados por fortes chuvas.{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              • Proporcionar mais segurança a moradores que residem em áreas
              vulneráveis.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong>Endereço dos microrreservatórios:</strong>
            </p>
            <iframe
              style={containerStyle}
              title="Mapa Google"
              src={mapaUrl}
              width="1150"
              height="500"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </TextSection>
        </Center>
      </Container>
      <Footer />
    </>
  );
};

export default Microrreservatorios;
