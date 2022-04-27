import React, { Fragment } from "react";
import { Card, Image, Center, Content, Container, Row, Link, TitleObras } from "./styles";
import obras from "../../assets/public/imagens/Home/obras.jpg";

export function ObraImageLink() {
  return (
    <Content>
          <TitleObras>
          Obras em <strong>execução</strong>
        </TitleObras>
      <Container>
        <Link href="/residuos">
          <Image src={obras} alt="Banner Sanear"></Image>
        </Link>
      </Container>
    </Content>
  );
}
