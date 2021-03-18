import React, {useState} from 'react'
import { Header } from "../../../components/Header";
import {Container,Center, Row, BannerPage, TextSection, TitleSection} from './styles';
import { DocumentsList } from '../../../components/DocumentsList';
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import { Footer } from "../../../components/Footer";
import banner from '../../../assets/public/imagens/Projeto/projeto_banner.jpeg';

const ProjetoSocioambiental = () => {
    return (
        <div>
            <Header />
            <BannerPage style={{ backgroundPositionY: "25%"}} image={banner} />
            <Container>
                <Center>
                    <TitleSection center>
                        <strong>Projeto de Trabalho Técnico Socioambiental</strong>
                    </TitleSection>
                    <TextSection columns="1">
                        <p>
                        O Projeto de Trabalho Técnico Socioambiental (PTTSA) 
                        compreende um conjunto de ações educativas e de mobilização social 
                        que são realizadas junto aos moradores impactados diretamente pelas 
                        obras do Programa Sanear Santo André. 
                        O PTTSA fundamenta-se nos princípios da participação comunitária, 
                        promovendo o diálogo social, a sensibilização para questões 
                        ambientais, a conservação do meio ambiente e a sustentabilidade do 
                        empreendimento.
                        </p>
                    </TextSection>
                </Center>
            </Container>
            <Container style={{ paddingTop: 20}}>
                <Center>
                    <TitleSection center>
                        <strong>Complexo Viário Cassaquera</strong>
                    </TitleSection>
                    <TextSection columns="1">
                        <p>
                        O Semasa iniciou em agosto de 2020 as atividades
                        práticas do PTTSA relacionadas às obras do Complexo
                        Viário Cassaquera.
                        </p>
                        <p>
                        O trabalho socioambiental é fundamental para informar e 
                        orientar a população do entorno sobre as intervenções e os 
                        seus benefícios para o saneamento ambiental, a saúde e a 
                        qualidade de vida, possibilitando maior transparência sobre 
                        as obras e um contato direto entre o poder público e os 
                        munícipes.  
                        </p>
                        <p>
                        A iniciativa objetiva ainda mobilizar lideranças comunitárias, 
                        instituir grupos de discussão e realizar trabalhos educativos sobre 
                        as temáticas ambiental e de saúde pública com os moradores da região,
                        escolas, agentes de saúde e outros grupos estratégicos.  
                        </p>
                        <p>
                        Estão previstas oficinas e outras atividades de educação 
                        ambiental junto à população, conforme princípios e diretrizes 
                        da Política Municipal de Educação Ambiental de Santo André. 
                        A previsão é de que o PTTSA envolva cerca de 30 mil andreenses
                        dos bairros Vila Homero Thon, Vila Guarani, Jardim Marek, 
                        Centreville, Vila Progresso, Parque Gerassi e Vila Guaraciaba 
                        até dezembro de 2021, quando as obras devem ser finalizadas. 
                        </p>
                        <p>
                        O projeto socioambiental está estruturado em dois eixos. 
                        O primeiro é de mobilização e comunicação, que traz ações 
                        informativas, reuniões com lideranças comunitárias, propaganda
                        volante e divulgação de cartazes, 
                        banners e faixas nos bairros.  
                        </p>
                        <p>
                        Já a segunda é de sensibilização e educação. Essa etapa 
                        compreende ações diversas, como elaboração de materiais 
                        pedagógicos (cartilhas, maquetes e folders), esquetes teatrais, 
                        oficinas educativas e de sensibilização sobre saneamento, 
                        reaproveitamento de materiais recicláveis, compostagem, arte com a 
                        temática ambiental, arborização e agricultura urbana, além de visitas 
                        e eventos em escolas e comunidades. Por causa da pandemia do 
                        coronavírus, as atividades de educação ambiental serão programadas 
                        quando houver autorização dos órgãos de saúde para a retomada do 
                        convívio social.  
                        </p>
                    </TextSection>
                </Center>  
            </Container>
            <Container style={{ paddingTop: 20}}>
                <Center>
                    <TitleSection center>
                        <strong>Materiais Educativos</strong>
                    </TitleSection>
                    <DocumentsList>
                        <div className="Grid">
                            <div className="row">
                                <span className="span-column">
                                    <Document
                                        file="/documentos/projeto_socioambiental/Banner_água.pdf"
                                        onLoadError={console.error}
                                    >
                                        <Page pageNumber={1} height={200} width={200} />
                                    </Document>
                                    <a href="/documentos/projeto_socioambiental/Banner_água.pdf" target="_blank">Economia de Água</a>
                                </span>
                                <span className="span-column">
                                    <Document
                                        file="/documentos/projeto_socioambiental/Banner_arborização.pdf"
                                        onLoadError={console.error}
                                    >
                                        <Page pageNumber={1} height={200} width={200} />
                                    </Document>
                                    <a href="/documentos/projeto_socioambiental/Banner_arborização.pdf" target="_blank">Benefícios da Arborização Urbana</a>
                                </span>
                                <span className="span-column">
                                    <Document
                                        file="/documentos/projeto_socioambiental/Banner_hortas_urbanas.pdf"
                                        onLoadError={console.error}
                                    >
                                        <Page pageNumber={1} height={200} width={200} />
                                    </Document>
                                    <a href="/documentos/projeto_socioambiental/Banner_hortas_urbanas.pdf" target="_blank">Hortas Urbanas</a>
                                </span>
                                <span className="span-column">
                                    <Document
                                        file="/documentos/projeto_socioambiental/Banner_resíduos.pdf"
                                        onLoadError={console.error}
                                    >
                                        <Page pageNumber={1} height={200} width={200} />
                                    </Document>
                                    <a href="/documentos/projeto_socioambiental/Banner_resíduos.pdf" target="_blank" className="break-tag">Resíduos Sólidos - Descarte com Responsabilidade</a>
                                </span>
                                <span className="span-column">
                                    <Document
                                        file="/documentos/projeto_socioambiental/Banner_saúde_saneamento.pdf"
                                        onLoadError={console.error}
                                    >
                                        <Page pageNumber={1} height={200} width={200} />
                                    </Document>
                                    <a href="/documentos/projeto_socioambiental/Banner_saúde_saneamento.pdf" target="_blank">Saúde e saneamento ambiental</a>
                                </span>
                            </div>
                            <div className="row">
                                <span className="span-column" style={{ marginRight: 15}}>
                                    <Document
                                        file="/documentos/projeto_socioambiental/Folder_arborização_urbana.pdf"
                                        onLoadError={console.error}
                                    >
                                        <Page pageNumber={1} height={250} width={250} />
                                    </Document>
                                    <a href="/documentos/projeto_socioambiental/Folder_arborização_urbana.pdf" target="_blank">Arborização Urbana</a>
                                </span>
                                <span className="span-column">
                                    <Document
                                        file="/documentos/projeto_socioambiental/Folder_orientação_aos_moradores.pdf"
                                        onLoadError={console.error}
                                    >
                                        <Page pageNumber={1} height={250} width={250} />
                                    </Document>
                                    <a href="/documentos/projeto_socioambiental/Folder_orientação_aos_moradores.pdf" target="_blank">Orientação aos moradores</a>
                                </span>
                            </div>
                        </div>
                    </DocumentsList>
                </Center> 
            </Container>
            <Footer />
        </div>
    );
}

export default ProjetoSocioambiental;