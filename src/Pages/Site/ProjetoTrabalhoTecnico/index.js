import React, {useState} from 'react'
import { Header } from "../../../components/Header";

import {
    Container,
    Center,
    BannerPage,
    ImagePage,
    TextSection,
    TitleSection
} from './styles';

import { DocumentsList } from '../../../components/DocumentsList';
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { Footer } from "../../../components/Footer";
import banner from '../../../assets/public/imagens/Projeto/projeto_banner.jpeg';
import funcionaria from '../../../assets/public/imagens/Projeto/funcionaria.jpg';
import funcionaria2 from '../../../assets/public/imagens/Projeto/funcionaria2.jpg';
import diagrama from '../../../assets/public/imagens/Projeto/diagrama.png';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Grid
} from '@material-ui/core';

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
    '&:nth-of-type(odd)': {
      backgroundColor: 'white',
    },
  },
}))(TableRow);

function createData(bairro, identificacao, rua, mudas) {
  return { bairro, identificacao, rua, mudas };
}

const rows = [
  createData('Marek', 'Creche Adalgisa Boccacino', 'R. Natalino Lamberti, 116', 25),
  createData('Marek', 'Creche Adalgisa Boccacino', 'R. Luís Gomes Pain, 256', 25),
  createData('Marek', 'Creche Adalgisa Boccacino', 'R. Natalino Lamberti, 74', 25),
  createData('Marek', 'EMEIEF Arquiteto Estevão', 'R. Eng. Alfred Heitzman Júnior, 262', 21),
  createData('Marek', 'CEU Marek', 'R. Eng. Alfred Heitzman Júnior, 546', 21),
  createData('Progresso', 'E.E. Carlos Vicnete Cerchiari', 'Av. Queiróz Filho, 1640', 19),
  createData('Centerville', 'E.E. 16 de Julho', 'R. Gel Olímpio Mourão Filho', 12),
  createData('Centerville', 'UBS Centerville', 'R. Bezerra de Menezes, 35', 12),
  createData('Guarani', 'E.E. Homero Thon', 'Av. Pedro Américo, 1705', 26),
  createData('Guarani', 'EMEIEF Elizabete Leonardi', 'R. Dom Aquino, 1', 26),  
  createData('Guarani', 'EMEIEF Elizabete Leonardi', 'R. Caraíbas, 30', 26),  
  createData('Homero Thon', 'EMEIEF Homero Thon', 'Av. Tibiriçá, 555', 13),
  createData('Homero Thon', 'Fábrica Pirelli', 'Av. Capuava, 913', 13),
  createData('Guaraciaba', 'E.E. Valdomiro Silveira', 'R. Agostinho de Campos, 80', 14),  

]

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ProjetoTrabalhoTecnico = () => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            {/* <BannerPage style={{ backgroundPositionY: "25%"}} image={banner} /> */}
            <Container>
                <Center>
                    <TitleSection center>
                        <strong>Projeto de Trabalho Técnico Socioambiental</strong>
                    </TitleSection>
                    <TextSection columns="1">
                        <p>
                        Em  março  de  2022,  
                        o  Semasa  começou  o  Projeto  de Trabalho  Técnico  Socioambiental  das  obras  das  Estações de Coleta. 
                        A iniciativa visa:
                        </p>
                    </TextSection>
                        <ImagePage src={diagrama}  style={{ width: '30%' }} />
                        {/* <Grid container spacing={12} style={{ marginTop: 24 }} alignItems="center" justifyContent="center">
                        <Grid item md={12} xs={12}>
                            <TextSection columns="1">
                            <p>
                                Em  março  de  2022,  
                                o  Semasa  começou  o  Projeto  de Trabalho  Técnico  Socioambiental  das  obras  das  Estações de Coleta. 
                                A iniciativa visa:
                            </p>
                            </TextSection>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src={diagrama} alt="EstudoCatadores" style={{ width: '80%' }} />
                        </Grid>
                    </Grid> */}
                </Center>
            </Container>
            <Container style={{ paddingTop: '0px', marginTop: '-50px' }}>
                <Center>
                    <TextSection columns="1">
                        <p>
                        O projeto iniciou no Jardim Ana Maria com uma mobilização porta a porta para compreender percepções e comportamentos da população sobre a gestão de resíduos sólidos e o descarte correto no município.</p>
                        <p>
                        Agentes devidamente identificados passam de casa em casa para efetuar uma pesquisa e entregar materiais educativos e com informações sobre as obras e os serviços da área de resíduos, executados pelo Semasa.
                        </p>
                    </TextSection>
                    <ImagePage style={{width:"40%"}} src={funcionaria} />
                </Center>  
            </Container>
            <Container style={{ paddingTop: 0, marginTop: "-40px" }}>
                <Center>
                    <TextSection columns="1">
                        <p>
                        O questionário possui perguntas sobre problemas que o munícipe identifica no seu bairro, quais tipos de resíduos ele gera em maior quantidade, como é feito o descarte dos materiais – inclusive de resíduos volumosos e perigosos (como lâmpadas, pilhas e baterias), dentre outros.
                        </p>
                        <p>
                        Com o resultado da pesquisa, o Semasa poderá compreender as necessidades, carências e dificuldade da população, o que é um importante instrumento para planejar e implementar atividades de sensibilização e educação ambiental, além de promover melhorias, o que corrobora com as diretrizes e os objetivos da Política Municipal de Educação Ambiental.
                        </p>
                    </TextSection>
                    <ImagePage style={{width:"40%"}} src={funcionaria2} />
                </Center>  
            </Container>
            <Container style={{ paddingTop: 0, marginTop: "-40px"}}>
                <Center>
                    <TextSection columns="1">
                        <p>
                        Além do Jardim Ana Maria, os bairros Jardim, Bangu, Vila Guiomar, Jardim Cristiane, Jardim Santo André, Jardim Santa Cristina, Jardim Alvorada e Vila Floresta também vão ser beneficiados com uma Estação de Coleta para a população descartar corretamente resíduos volumosos, como recicláveis, entulho, pneus, resíduos eletrônicos (fogão, geladeira, monitor), colchões, estofados, poda de árvore, dentre outros.
                        </p>
                        <p>
                        Com o trabalho técnico socioambiental, o Semasa realizará diversas atividades e visitas ao Aterro Sanitário Municipal e às cooperativas de reciclagem do município para informar e sensibilizar a população sobre as obras e os seus benefícios. Para otimizar ainda mais a gestão de resíduos sólidos, as pessoas que trabalham nas cooperativas, catadores informais e zeladores dos ecopontos também participarão de cursos e capacitações.
                        O Projeto de Trabalho Técnico Socioambiental terá duração de 7 meses, com investimento de R$ 605.512,20.
                        </p>
                    </TextSection>
                </Center>  
            </Container>
            
            <Footer />
        </div>
    );
}

export default ProjetoTrabalhoTecnico;