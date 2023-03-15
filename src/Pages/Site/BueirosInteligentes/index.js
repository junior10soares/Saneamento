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
  TextSection,
  ImagemBueiros,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import monitoramento from "../../../assets/public/imagens/monitoramento/monitoramento.jpeg";
import Table from "../../../components/Table";
import bueiros from "../../../assets/public/imagens/Bueiros/bairros.png";

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
          <TextSection columns="2">
            <p style={{ textAlign: "justify" }}>
              Para reforçar ações preventivas e o combate a enchentes e
              alagamentos, Santo André iniciou a instalação de bocas de lobo
              inteligentes, popularmente conhecidas como bueiros.
            </p>
            <p style={{ textAlign: "justify" }}>
              Os novos equipamentos de drenagem, inéditos não só no município
              mas no ABC Paulista, possuem cesto com sensor, que emite um sinal
              de alerta quando os dispositivos estão cheios de resíduos. As
              bocas de lobo inteligentes têm como objetivos:
            </p>
            <p style={{ textAlign: "justify" }}>
              • Informar em tempo real às equipes que atuam no setor de drenagem
              quando os bueiros atingem determinado nível de enchimento.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Fortalecer ações preventivas e corretivas para que os resíduos
              não obstruam o escoamento da água, minimizando a ocorrência de
              enchentes e alagamentos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Impedir que os resíduos tenham como destino córregos e rios,
              contribuindo para a despoluição e preservação do meio ambiente.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Otimizar o processo de limpeza de bueiros, direcionando os
              profissionais para locais onde realmente há necessidade de
              atuação, o que agrega vantagens em relação à eficiência
              operacional, racionalidade e economicidade na execução dos
              serviços.
            </p>{" "}
            <p style={{ textAlign: "justify" }}>
              A primeira instalação foi feita em fevereiro de 2023, no bairro
              Vila Vitória. Ao todo, vão ser implantados 561 equipamentos do
              tipo, com investimento de R$ 840 mil.
            </p>
            <p style={{ textAlign: "justify" }}>
              Na imagem abaixo estão os bairros beneficiados, bem como o número
              de equipamentos que serão instalados.
            </p>
            <ImagemBueiros>
              <div className="imageAbout">
                <img src={bueiros} alt="Semasa" />
              </div>
              <div className="textAbout">
                <p style={{ fontStyle: "italic" }}>
                
                </p>
              </div>
            </ImagemBueiros>
          </TextSection>
        </Center>
      </Container>{" "}
      <Footer />
    </>
  );
};

export default BueirosInteligentes;
