import React, { useState } from "react";
import { Header } from "../../../components/Header";

import {
  Container,
  Center,
  BannerPage,
  TextSection,
  TitleSection,
} from "./styles";

import { DocumentsList } from "../../../components/DocumentsList";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { Footer } from "../../../components/Footer";
import banner from "../../../assets/public/imagens/Projeto/projeto_banner.jpeg";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

function createData(bairro, identificacao, rua, mudas) {
  return { bairro, identificacao, rua, mudas };
}

const rows = [
  createData(
    "Marek",
    "Creche Adalgisa Boccacino",
    "R. Natalino Lamberti, 116",
    25
  ),
  createData(
    "Marek",
    "Creche Adalgisa Boccacino",
    "R. Luís Gomes Pain, 256",
    25
  ),
  createData(
    "Marek",
    "Creche Adalgisa Boccacino",
    "R. Natalino Lamberti, 74",
    25
  ),
  createData(
    "Marek",
    "EMEIEF Arquiteto Estevão",
    "R. Eng. Alfred Heitzman Júnior, 262",
    21
  ),
  createData("Marek", "CEU Marek", "R. Eng. Alfred Heitzman Júnior, 546", 21),
  createData(
    "Progresso",
    "E.E. Carlos Vicnete Cerchiari",
    "Av. Queiróz Filho, 1640",
    19
  ),
  createData(
    "Centerville",
    "E.E. 16 de Julho",
    "R. Gel Olímpio Mourão Filho",
    12
  ),
  createData("Centerville", "UBS Centerville", "R. Bezerra de Menezes, 35", 12),
  createData("Guarani", "E.E. Homero Thon", "Av. Pedro Américo, 1705", 26),
  createData("Guarani", "EMEIEF Elizabete Leonardi", "R. Dom Aquino, 1", 26),
  createData("Guarani", "EMEIEF Elizabete Leonardi", "R. Caraíbas, 30", 26),
  createData("Homero Thon", "EMEIEF Homero Thon", "Av. Tibiriçá, 555", 13),
  createData("Homero Thon", "Fábrica Pirelli", "Av. Capuava, 913", 13),
  createData(
    "Guaraciaba",
    "E.E. Valdomiro Silveira",
    "R. Agostinho de Campos, 80",
    14
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ProjetoSocioambiental = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <BannerPage style={{ backgroundPositionY: "25%" }} image={banner} />
      <Container>
        <Center>
          <TitleSection center>
            <strong>Projeto de Trabalho Técnico Socioambiental</strong>
          </TitleSection>
          <TextSection columns="1">
            <p>
              O Projeto de Trabalho Técnico Socioambiental (PTTSA) compreende um
              conjunto de ações educativas e de mobilização social que são
              realizadas junto aos moradores impactados diretamente pelas obras
              do Programa Sanear Santo André. O PTTSA fundamenta-se nos
              princípios da participação comunitária, promovendo o diálogo
              social, a sensibilização para questões ambientais, a conservação
              do meio ambiente e a sustentabilidade do empreendimento.
            </p>
          </TextSection>
        </Center>
      </Container>
      <Container style={{ paddingTop: 20 }}>
        <Center>
          <TitleSection center>
            <strong>Complexo Viário Cassaquera</strong>
          </TitleSection>
          <TextSection columns="1">
            <p>
              O Semasa iniciou em agosto de 2020 as atividades práticas do PTTSA
              relacionadas às obras do Complexo Viário Cassaquera.
            </p>
            <p>
              O trabalho socioambiental é fundamental para informar e orientar a
              população do entorno sobre as intervenções e os seus benefícios
              para o saneamento ambiental, a saúde e a qualidade de vida,
              possibilitando maior transparência sobre as obras e um contato
              direto entre o poder público e os munícipes.
            </p>
            <p>
              A iniciativa objetiva ainda mobilizar lideranças comunitárias,
              instituir grupos de discussão e realizar trabalhos educativos
              sobre as temáticas ambiental e de saúde pública com os moradores
              da região, escolas, agentes de saúde e outros grupos estratégicos.
            </p>
            <p>
              Estão previstas oficinas e outras atividades de educação ambiental
              junto à população, conforme princípios e diretrizes da Política
              Municipal de Educação Ambiental de Santo André. A previsão é de
              que o PTTSA envolva cerca de 30 mil andreenses dos bairros Vila
              Homero Thon, Vila Guarani, Jardim Marek, Centreville, Vila
              Progresso, Parque Gerassi e Vila Guaraciaba até dezembro de 2021,
              quando as obras devem ser finalizadas.
            </p>
            <p>
              O projeto socioambiental está estruturado em dois eixos. O
              primeiro é de mobilização e comunicação, que traz ações
              informativas, reuniões com lideranças comunitárias, propaganda
              volante e divulgação de cartazes, banners e faixas nos bairros.
            </p>
            <p>
              Já a segunda é de sensibilização e educação. Essa etapa compreende
              ações diversas, como elaboração de materiais pedagógicos
              (cartilhas, maquetes e folders), esquetes teatrais, oficinas
              educativas e de sensibilização sobre saneamento, reaproveitamento
              de materiais recicláveis, compostagem, arte com a temática
              ambiental, arborização e agricultura urbana, além de visitas e
              eventos em escolas e comunidades. Por causa da pandemia do
              coronavírus, as atividades de educação ambiental serão programadas
              quando houver autorização dos órgãos de saúde para a retomada do
              convívio social.
            </p>
          </TextSection>
        </Center>
      </Container>
      <Container style={{ paddingTop: 20 }}>
        <Center>
          <TitleSection center>
            <strong>Plantio de 130 mudas nativas da Mata Atlântica</strong>
          </TitleSection>
          <TextSection columns="1">
            <p>
              Entre agosto e o começo de setembro de 2021, o Semasa, por meio do
              Trabalho Técnico Socioambiental, realizou as ações de
              sensibilização ambiental e arborização urbana junto aos moradores
              dos bairros beneficiados pelas obras do Complexo Viário
              Cassaquera.
            </p>
            <p>
              Crianças, jovens, professores e profissionais de creches e escolas
              estaduais e municipais, além de agentes de saúde da US (Unidade da
              Saúde) Centreville, participaram do plantio de 130 mudas nativas
              da Mata Atlântica. Antes de colocarem a mão na terra e dar uma
              nova vida às árvores, os participantes aprenderam sobre os
              benefícios das árvores para o meio ambiente e a saúde, como é
              realizado um plantio responsável e quais cuidados devem ser
              adotados para que as mudas se desenvolvam de forma saudável.
            </p>
            <p>
              As espécies que ganharam novos lares são: ipê-amarelo, pêssego-do
              mato, uvaia, cereja do rio grande, araçá, tarumã,
              jacarandá-mimoso, guaçatonga, cabeludinha e chupa-ferro. Para que
              as árvores se desenvolvam e cresçam saudáveis, o Semasa irá
              realizar o acompanhamento e monitoramento das mudas durante o
              período de seis meses, em parceria com os moradores que fizeram
              parte das atividades.
            </p>
            <p>
              As ações contaram com apoio das secretarias de Meio Ambiente,
              Educação, Saúde e Mobilidade Urbana. Confira os locais que ficaram
              mais verdes e arborizados.
            </p>
          </TextSection>
        </Center>
      </Container>
      <Container>
        <Center>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Bairros</StyledTableCell>
                  <StyledTableCell align="center">
                    Locais beneficiados
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Plantio das mudas
                  </StyledTableCell>
                  <StyledTableCell align="center">Quantidade</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell align="center" rowSpan={5}>
                    Marek
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={3}>
                    Creche Adalgisa Boccacino
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    R. Natalino Lamberti, 116
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={3}>
                    25
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    R. Luís Gomes Pain, 256
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    R. Natalino Lamberti, 74
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    EMEIEF Arquiteto Estevão
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    R. Eng. Alfred Heitzman Júnior
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={2}>
                    21
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">CEU Marek</StyledTableCell>
                  <StyledTableCell align="center">
                    R. Eng. Alfred Heitzman Júnior
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">Progresso</StyledTableCell>
                  <StyledTableCell align="center">
                    E.E. Carlos Vicnete Cerchiari
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    Av. Queiróz Filho, 1640
                  </StyledTableCell>
                  <StyledTableCell align="center">19</StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center" rowSpan={2}>
                    Centreville
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    E.E. 16 de Julho
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    R. Gel Olímpio Mourão Filho
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={2}>
                    12
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    UBS Centreville
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    R. Bezerra de Menezes, 35
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center" rowSpan={3}>
                    Guarani
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    E.E. Homero Thon
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    Av. Pedro Américo, 1705
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={3}>
                    26
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center" rowSpan={2}>
                    EMEIEF Elizabete Leonardi
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    R. Dom Aquino, 1
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell align="center">
                    R. Caraíbas, 30
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell align="center" rowSpan={2}>
                    Homero Thon
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    EMEIEF Homero Thon
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    Av. Tibiriçá, 555
                  </StyledTableCell>
                  <StyledTableCell align="center" rowSpan={2}>
                    13
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell align="center">
                    Fábrica Pirelli
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    Av. Capuava, 913
                  </StyledTableCell>
                </StyledTableRow>

                <StyledTableRow>
                  <StyledTableCell align="center">Guaraciaba</StyledTableCell>
                  <StyledTableCell align="center">
                    E.E. Valdomiro Silveira
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    R. Agostinho de Campos, 80
                  </StyledTableCell>
                  <StyledTableCell align="center">14</StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Center>
      </Container>
      <Container style={{ paddingTop: 20 }}>
        <Center>
          <TitleSection center>
            <strong>Materiais Educativos</strong>
          </TitleSection>
          <DocumentsList>
            <div className="Grid">
              <div className="row">
                <span className="span-column" style={{ marginLeft: 5 }}>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_agua.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Banner_agua.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={200} width={200} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_agua.pdf"
                    target="_blank"
                  >
                    Economia de Água
                  </a>
                </span>
                <span className="span-column">
                  <a
                    href="/documentos/projeto_socioambiental/Banner_arborizacao.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Banner_arborizacao.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={200} width={200} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_arborizacao.pdf"
                    target="_blank"
                  >
                    Benefícios da Arborização Urbana
                  </a>
                </span>
                <span className="span-column">
                  <a
                    href="/documentos/projeto_socioambiental/Banner_hortas_urbanas.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Banner_hortas_urbanas.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={200} width={200} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_hortas_urbanas.pdf"
                    target="_blank"
                  >
                    Hortas Urbanas
                  </a>
                </span>
                <span className="span-column">
                  <a
                    href="/documentos/projeto_socioambiental/Banner_residuos.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Banner_residuos.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={200} width={200} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_residuos.pdf"
                    target="_blank"
                    className="break-tag"
                  >
                    Resíduos Sólidos - Descarte com Responsabilidade
                  </a>
                </span>
                <span className="span-column">
                  <a
                    href="/documentos/projeto_socioambiental/Banner_saude_saneamento.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Banner_saude_saneamento.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={200} width={200} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_saude_saneamento.pdf"
                    target="_blank"
                  >
                    Saúde e Saneamento Ambiental
                  </a>
                </span>
              </div>
              <div className="row">
                <span className="span-column" style={{ marginRight: 40 }}>
                  <a
                    href="/documentos/projeto_socioambiental/Folder_arborizacao_urbana.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Folder_arborizacao_urbana.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={250} width={250} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Folder_arborizacao_urbana.pdf"
                    target="_blank"
                  >
                    Arborização Urbana
                  </a>
                </span>
                <span className="span-column" style={{ marginRight: 40 }}>
                  <a
                    href="/documentos/projeto_socioambiental/Folder_orientacao_aos_moradores.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Folder_orientacao_aos_moradores.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={250} width={250} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Folder_orientacao_aos_moradores.pdf"
                    target="_blank"
                  >
                    Orientação aos Moradores
                  </a>
                </span>
                <span className="span-column" style={{ marginRight: 30 }}>
                  <a
                    href="/documentos/projeto_socioambiental/Como_fazer_uma_horta.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Como_fazer_uma_horta.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={250} width={250} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Como_fazer_uma_horta.pdf"
                    target="_blank"
                  >
                    Como Fazer Uma Horta
                  </a>
                </span>
                <span className="span-column">
                  <a
                    href="/documentos/projeto_socioambiental/Folder_lixo_nosso_cada_dia.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Folder_lixo_nosso_cada_dia.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={250} width={250} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Folder_lixo_nosso_cada_dia.pdf"
                    target="_blank"
                    style={{ marginRight: 20 }}
                  >
                    O Lixo Nosso De Cada Dia
                  </a>
                </span>
              </div>
              <div className="row">
                <span className="span-column" style={{ marginLeft: 5 }}>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_compostagem.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Banner_compostagem.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={250} width={250} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Banner_compostagem.pdf"
                    target="_blank"
                  >
                    Compostagem Doméstica
                  </a>
                </span>
                <span className="span-column">
                  <a
                    href="/documentos/projeto_socioambiental/Cartilha_infantil_saneamento_ambiental.pdf"
                    target="_blank"
                  >
                    <Document
                      file="/documentos/projeto_socioambiental/Cartilha_infantil_saneamento_ambiental.pdf"
                      onLoadError={console.error}
                    >
                      <Page pageNumber={1} height={250} width={250} />
                    </Document>
                  </a>
                  <a
                    href="/documentos/projeto_socioambiental/Cartilha_infantil_saneamento_ambiental.pdf"
                    target="_blank"
                  >
                    Saneamento Ambiental
                  </a>
                </span>
              </div>
            </div>
          </DocumentsList>
        </Center>
      </Container>
      <Footer />
    </div>
  );
};

export default ProjetoSocioambiental;
