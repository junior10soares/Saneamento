import React, { useState } from 'react'
import { Header } from "../../../components/Header";
import { Container,Center, BannerPage, TextSection, TitleSection } from './styles';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { Footer } from "../../../components/Footer";

import banner from '../../../assets/public/imagens/EstudoCatadores/banner.jpg';
import Estudo01 from '../../../assets/public/imagens/EstudoCatadores/estudo01.jpg';
import Estudo02 from '../../../assets/public/imagens/EstudoCatadores/estudo02.jpg';
import Estudo03 from '../../../assets/public/imagens/EstudoCatadores/estudo03.jpg';
import Estudo04 from '../../../assets/public/imagens/EstudoCatadores/estudo04.jpg';
import Estudo05 from '../../../assets/public/imagens/EstudoCatadores/estudo05.jpg';
import Estudo06 from '../../../assets/public/imagens/EstudoCatadores/estudo06.jpg';
import Estudo07 from '../../../assets/public/imagens/EstudoCatadores/estudo07.jpg';

import { makeStyles } from '@material-ui/core/styles';
import {
    Stack,
    Grid,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const EstudoCatadores = () => {
    const classes = useStyles();

    return (
        <div>
            <Header />
            <BannerPage style={{ backgroundPositionY: "25%"}} image={banner} />
            <Container>
                <Center>
                    <TitleSection center>
                        <strong>Estudo de catadores de recicláveis</strong>
                    </TitleSection>
                    <Grid container spacing={3} style={{ marginTop: 24 }}>
                        <Grid item md={6} xs={12}>
                            <img src={Estudo01} alt="EstudoCatadores" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextSection columns="1">
                                <p>
                                    O Semasa realiza, desde novembro de 2021, uma pesquisa em campo para mapear o 
                                    contingente de pessoas que recolhem resíduos recicláveis pelas ruas de Santo André 
                                    e trabalham com a compra e venda desses materiais, a exemplo de profissionais que 
                                    atuam em depósitos e ferro velho. É uma iniciativa para que a cidade possa criar 
                                    políticas públicas e compreender o cenário e o fluxo de comercialização de resíduos 
                                    secos.
                                </p>
                            </TextSection>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ marginTop: 32 }}>
                        <Grid item md={6} xs={12}>
                            <TextSection columns="1">
                                <p>
                                    O estudo de catadores informais possibilitará a atuação integrada de vários setores 
                                    da Prefeitura de Santo André, permitindo que o município crie ações e projetos de 
                                    assistência social, saúde pública, cuidado e bem-estar animal, economia solidária, 
                                    qualificação profissional e empreendedorismo. A pesquisa também é uma importante 
                                    ferramenta para que o Semasa possa inserir os profissionais no mercado formal, por 
                                    meio do trabalho de triagem e venda de recicláveis nas cooperativas da cidade. 
                                    Atualmente, existem a CoopCicla e a CidadeLimpa, mas o Semasa estuda criar a 
                                    terceira cooperativa de reciclagem.  
                                </p>
                            </TextSection>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src={Estudo02} alt="EstudoCatadores" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ marginTop: 24 }}>
                        <Grid item md={6} xs={12}>
                            <img src={Estudo03} alt="EstudoCatadores" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextSection columns="1">
                                <p>
                                    Com o advento da Lei Federal nº 12.305/2010, que institui a Política Nacional de 
                                    Resíduos Sólidos, um grande desafio foi colocado à gestão pública: a inserção das 
                                    cooperativas e associações de catadores como peças fundamentais dentro da cadeia de 
                                    reciclagem.
                                </p>
                                <p>
                                    Santo André possui centenas de catadores que realizam a coleta de resíduos sólidos 
                                    informalmente. Mas não há um diagnóstico atual dessa realidade que permita a tomada 
                                    de decisões quanto a melhor forma de inserir esta categoria no sistema de coleta e 
                                    beneficiar os trabalhadores com políticas públicas.
                                </p>
                            </TextSection>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ marginTop: 32 }}>
                        <Grid item md={6} xs={12}>
                            <TextSection columns="1">
                                <p>
                                    O Plano Municipal de Gerenciamento de Resíduos – decreto 17.179/2019 – prevê a 
                                    atualização do estudo de catadores, a fim de aproximar e compreender de maneira mais 
                                    efetiva a dinâmica dos catadores informais, além de entender de que forma os impactos 
                                    econômicos atingem o setor.
                                </p>
                                <p>
                                    Com investimento de R$ 169 mil, o mapeamento será realizado em todos os bairros de 
                                    Santo André, no prazo de até seis meses. O estudo obterá informações de perfil 
                                    socioeconômico, renda, faixa-etária, etnia, sexo, sistema de coleta de setores do 
                                    município, sistema de vendas e outras variáveis do trabalho, quantidade de materiais 
                                    coletados, além de questões relacionadas <strong> à saúde, saneamento básico </strong> e etc.
                                </p>
                                <p>
                                    A pesquisa ainda permitirá o fortalecimento de políticas públicas para a causa 
                                    animal, já que o levantamento inclui informações como quantidade de bichos de 
                                    estimação, cobertura vacinal, alimentação e etc. Ao todo, são 81 perguntas.
                                </p>
                            </TextSection>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src={Estudo04} alt="EstudoCatadores" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Center>
            </Container>
            <Container style={{ paddingTop: 0 }}>
                <Center>
                    <TitleSection center>
                        <strong>Sobrevivência e precarização do trabalho</strong>
                    </TitleSection>
                    <Grid container spacing={3} style={{ marginTop: 24 }}>
                        <Grid item md={6} xs={12}>
                            <img src={Estudo05} alt="EstudoCatadores" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextSection columns="1">
                                <p>
                                    O contingente de pessoas inseridas em atividades informais, dentre as quais a de 
                                    coleta de materiais recicláveis, representa expressivo percentual das atividades 
                                    econômicas do Brasil, principalmente nos centros urbanos. Em tempos de 
                                    vulnerabilidade econômica, a coleta de recicláveis é uma estratégia de fonte de 
                                    renda e de sobrevivência para pessoas recém-desempregadas, migrantes, moradores de 
                                    rua, pessoas com passagem pelo sistema prisional, idosos que não conseguem atuar no 
                                    mercado formal, pessoas com baixa escolaridade ou não alfabetizadas, dentre outros.
                                </p>
                            </TextSection>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style={{ marginTop: 24 }}>
                        <Grid item md={6} xs={12}>
                            <TextSection columns="1">
                                <p>
                                    É comum observar que os profissionais atuam em péssimas condições de trabalho, sendo 
                                    que muitos vivem em situação de extrema pobreza, à medida que se encontram desprovidos 
                                    de capital e instrumentos de trabalho. Também chama atenção a exposição à violência 
                                    e a contaminação por doenças, devido à falta de infraestrutura e saneamento em locais 
                                    onde são realizados a recolha de materiais secos.
                                </p>
                                <p>
                                    Com a inserção dos profissionais no mercado formal do sistema de coleta e reciclagem, 
                                    portanto, é possível proporcionar melhores condições para o exercício da profissão.
                                </p>
                            </TextSection>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img src={Estudo06} alt="EstudoCatadores" style={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                </Center>  
            </Container>
            <Container style={{ paddingTop: 0 }}>
                <Center>
                    <TitleSection center>
                        <strong>Reciclagem como uma importante atividade econômica</strong>
                    </TitleSection>
                    <Grid container spacing={3} style={{ marginTop: 24 }}>
                        <Grid item md={6} xs={12}>
                            <img src={Estudo07} alt="EstudoCatadores" style={{ width: '100%' }} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <TextSection columns="1">
                                <p>
                                    Dados da Abrelpe (Associação Brasileira de Empresas de Limpeza Pública e Resíduos 
                                    Especiais) mostram que o Brasil perde R$ 14 bilhões por ano com a falta de reciclagem 
                                    adequada. São cerca de 12 milhões de toneladas que, em vez de gerarem emprego e renda, 
                                    acabam sento descartadas irregularmente.
                                </p>
                                <p>
                                    Além disso, o primeiro Anuário da Reciclagem, realizado pela Ancat (Associação Nacional 
                                    dos Catadores e Catadoras de Materiais Recicláveis), apontou que a reciclagem gerou 
                                    para esse segmento R$ 70 milhões, entre 2017 e 2018.
                                </p>
                            </TextSection>
                        </Grid>
                    </Grid>
                </Center>  
            </Container>
            <Footer />
        </div>
    );
}

export default EstudoCatadores;
