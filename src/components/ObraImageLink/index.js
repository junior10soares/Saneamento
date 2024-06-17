import React, { Fragment } from "react";
import {
  Card,
  Image,
  Center,
  Content,
  Container,
  Row,
  Link,
  TitleObras,
  Title,
} from "./styles";
import obras from "../../assets/public/imagens/Home/obras.jpg";
import maquete from "../../assets/public/imagens/Home/maquete.jpeg";

export function ObraImageLink() {
  return (
    <Content>
      <TitleObras>
        Obras em <strong>execução</strong>
      </TitleObras>
      <Container>
        {/* <div className="slide-obra">
          <Link href="/residuos">
            <Image src={obras} alt="Banner Sanear" title="Resíduos"></Image>
            <Title>12 Estações de Coleta</Title>
          </Link>
        </div> */}
        <Link href="/complexo-mauricio">
          <Image
            src={maquete}
            alt="Banner Sanear"
            title="Complexo Maurício de Medeiros"
          ></Image>
          <Title>Complexo Maurício de Medeiros</Title>
        </Link>
      </Container>
    </Content>
  );
}
