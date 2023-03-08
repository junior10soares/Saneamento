// import { useCallback, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import React from "react";
import _ from "lodash";
import {
  Container,
  Center,
  Row,
  TitleSection,
  BannerPage,
  HeaderPage,
  TableSection,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import monitoramento from "../../../assets/public/imagens/monitoramento/monitoramento.jpeg";
import Table from "../../../components/Table";

const data = [
  {
    qtd: "62",
    obs: "Ribeirão Oratório",
  },
  {
    qtd: "104",
    obs: "Rio Tamanduateí",
  },
  {
    qtd: "6",
    obs: "Rio Tamanduateí - Córrego Havana",
  },
  {
    qtd: "16",
    obs: "Rio Tamanduateí - Córrego Jundiai",
  },
  {
    qtd: "18",
    obs: "Rio Tamanduateí - Córrego Comprido",
  },
  {
    qtd: "60",
    obs: "Rio Tamanduateí - Córrego Cemitério",
  },
  {
    qtd: "22",
    obs: "Rio Tamanduateí - Córrego Apiaí",
  },
  {
    qtd: "125",
    obs: "Rio Tamanduateí - Córrego Guaraná",
  },
  {
    qtd: "64",
    obs: "Rio Tamanduateí - Córrego Cassaquera",
  },
  {
    qtd: "66",
    obs: "Ribeirão dos Meninos",
  },
  {
    qtd: "5",
    obs: "Córrego Cassaquera",
  },
  {
    qtd: "11",
    obs: "Córrego Cemitério",
  },
];

const BueirosInteligentes = () => {
  const columns = React.useMemo(() => [
    {
      Header: "LOCALIDADE",
      accessor: "obs",
    },
    {
      Header: "QUANTIDADE",
      accessor: "qtd",
      Footer: (
        <span>
          {" "}
          <stron>TOTAL: </stron>
          {data
            .map((value) => value.qtd)
            .reduce((a, b) => parseInt(a) + parseInt(b))}
        </span>
      ),
    },
  ]);

  return (
    <>
      <Header />
      <BannerPage image={monitoramento} />{" "}
      <Container>
        <Center>
          <HeaderPage style={{ marginBottom: 10 }}>
            <TitleSection center>
              <strong>Bueiros Inteligentes</strong>
            </TitleSection>{" "}
          </HeaderPage>{" "}
        </Center>{" "}
        <Center>
          <TableSection>
            <Table columns={columns} data={data} />
          </TableSection>
        </Center>
      </Container>{" "}
      <Footer />
    </>
  );
};

export default BueirosInteligentes;
