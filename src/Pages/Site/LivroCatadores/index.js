import React, { useState } from "react";
import { Header } from "../../../components/Header";

import {
  Container,
  Center,
  ImagePage,
  TextSection,
  TitleSection,
} from "./styles";

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { Footer } from "../../../components/Footer";
import Catadores from "../../../assets/public/imagens/LivroCatadores/livrocatadores.jpg";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const LivroCatadores = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <Container>
        <Center>
          <TitleSection center>
            <strong>
              Um olhar integrado sobre os catadores de materiais recicláveis de
              Santo André
            </strong>
          </TitleSection>
        </Center>
      </Container>
      <Container style={{ paddingTop: 0, marginTop: "-30px" }}>
        <Center>
          <TextSection columns="1">
            <p>
              A Prefeitura de Santo André e o Semasa lançaram, no dia 30 de
              agosto de 2022, uma *obra inédita para retratar a vida e as
              condições de trabalho de catadores de resíduos recicláveis que
              atuam no município
            </p>
            <p>
              Trata-se do livro{" "}
              <strong>
                Um olhar integrado sobre catadores de materiais recicláveis de
                Santo André
              </strong>
              , fruto de uma pesquisa realizada com esses profissionais entre o
              fim de 2021 e o começo de 2022.
            </p>
            <p>
              Santo André pôde levantar a renda, faixa etária, etnia, sexo,
              escolaridade, fluxo de comercialização de resíduos recicláveis,
              além de questões relacionadas à saúde, educação, moradia, acesso a
              programas sociais, dentre outros.
            </p>
            <p>
              A pesquisa ocorreu em um momento em que houve aumento
              significativo de pessoas que passaram a recolher resíduos secos,
              devido ao agravamento da crise econômica e do desemprego na
              pandemia da Covid-19. Estima-se que haja mais de{" "}
              <strong>
                1.800 catadores que recolhem materiais pelas ruas da cidade
              </strong>
              .
            </p>
            <p>
              O estudo, portanto, é fundamental para compreender a realidade
              social, as condições de trabalho, dificuldades e necessidades dos
              trabalhadores, sendo um importante instrumento para desenvolver
              políticas públicas e buscar a inserção dos catadores no mercado
              formal de triagem e venda de recicláveis, por meio de
              cooperativas, associações ou da regularização do trabalho como
              Microempreendedor Individual.
            </p>
          </TextSection>
        </Center>
      </Container>
      <Container style={{ paddingTop: 0, marginTop: "-40px" }}>
        <Center>
          <TextSection columns="1">
            <p>Clique na imagem e baixe o livro:</p>
          </TextSection>
          <a href="http://www.semasa.sp.gov.br/wp-content/uploads/2022/08/Livro_Estudo_Catadores.pdf">
            <ImagePage
              style={{ width: "60%" }}
              src={Catadores}
              alt="Banner Sanear"
              title="Resíduos"
            ></ImagePage>
          </a>
          <TextSection>
            <p>
              A publicação também traz o contexto histórico relacionado ao tema
              reciclagem, informações sobre a gestão de resíduos sólidos do
              município e histórias de vida de cinco personagens
            </p>
          </TextSection>
        </Center>
      </Container>
      <Footer />
    </div>
  );
};

export default LivroCatadores;
