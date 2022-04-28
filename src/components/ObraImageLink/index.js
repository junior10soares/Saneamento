import React, { Fragment } from "react";
import { Card, Image, Center, Content, Container, Row, Link, TitleObras, Title } from "./styles";
import obras from "../../assets/public/imagens/Home/obras.jpg";

export function ObraImageLink() {
  return (
    <Content>
          <TitleObras>
          Obras em <strong>execução</strong>
        </TitleObras>
      <Container>
        <Link href="/residuos">
          <Image src={obras} alt="Banner Sanear" title="Resíduos"></Image>
          <Title>10 estações de coleta</Title>
        </Link>
      </Container>
    </Content>
  );
}
