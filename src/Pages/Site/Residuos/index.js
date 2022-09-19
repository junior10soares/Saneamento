import { useCallback, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import {
  Container,
  Center,
  Row,
  TitleSection,
  BannerPage,
  HeaderPage,
  TextSection,
  EstudoCatadores,
  ProjetoTecnico,
  LivroCatadores,
} from "./styles";
import { DocumentsList } from "../../../components/DocumentsList";
import MapComponent from "../../../components/MapComponent";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import capa from "../../../assets/public/imagens/ResiduosSolidos/capa.png";

import monitoramento from "../../../assets/public/imagens/ResiduosSolidos/security.png";
import tablets from "../../../assets/public/imagens/ResiduosSolidos/tablets.png";
import seguranca from "../../../assets/public/imagens/ResiduosSolidos/security-system.png";
import compactadora from "../../../assets/public/imagens/ResiduosSolidos/garbage.png";
import cabeamento from "../../../assets/public/imagens/ResiduosSolidos/cable.png";
import comunicacao from "../../../assets/public/imagens/ResiduosSolidos/communication.png";
import ProjetoSocioAmbiental from "../../../assets/public/imagens/ResiduosSolidos/socioambiental.png";
import ProjetoSocioAmbiental2 from "../../../assets/public/imagens/ResiduosSolidos/socioambiental2.png";
import LivrosobreCatadores from "../../../assets/public/imagens/ResiduosSolidos/livrocatadores.png";
import EstudosobreCatadores from "../../../assets/public/imagens/ResiduosSolidos/estudocatadores.png";

import { FiClipboard } from "react-icons/fi";

const locations = [
  {
    name: "Av. Dom Jorge Marcos de Oliveira",
    lat: "-23.660236991157788",
    lng: "-46.54713773086169",
  },

  {
    name: "Rua da Visão",
    lat: "-23.706545114521383",
    lng: "-46.49638566381487",
  },
  {
    name: "Rua Cametá",
    lat: "-23.686423967743004",
    lng: "-46.52124355352028",
  },
  {
    name: "R. Rolândia",
    lat: "-23.69434398188793",
    lng: "-46.52216404677351",
  },
  {
    name: "R. Pintassilva",
    lat: "-23.730238645892868",
    lng: "-46.494521753520246",
  },
  {
    name: "Tv. São Bento",
    lat: " -23.652158874526105",
    lng: "-46.53155805990961",
  },
  {
    name: "Av Preste Maia",
    lat: "-23.644084780360906",
    lng: "-46.54065794198922",
  },
  {
    name: "Rua Antonio Cardoso",
    lat: "-23.64149331843551",
    lng: "-46.52233967268445",
  },
  {
    name: " Av. Cândido Camargo",
    lat: "-23.62676680729257",
    lng: "-46.48654480202437",
  },
  {
    name: "R. José Fernando de Medina Braga",
    lat: "-23.690163337206005",
    lng: "-46.532107500118336",
  },
];

const Residuos = () => {
  const [isVisible, setVisible] = useState(false);
  const [constructions, setConstrutions] = useState([]);
  const construction = useCallback(() => {
    api
      .get(
        "work?filters[][work_category.uuid@equal]=bb7f1740-35be-11eb-8cc1-1540c95fed24"
      )
      .then(({ data }) => setConstrutions(data.data));
  }, []);

  useEffect(() => {
    construction();
  }, [construction]);

  const hasPictures = constructions.find(
    (construction) => construction.work_pictures.length > 0
  );

  if (constructions.length > 0) {
    setVisible(true);
  }

  const hasVideos = constructions.find(
    (construction) => construction.work_videos.length > 0
  );
  return (
    <>
      <Header />
      <BannerPage image={capa} />{" "}
      <Container>
        <div className="desktopStepBar" style={{ width: "100%" }}>
          <div className="groupButtons">
            <div className="buttonAlign">
              <ProjetoTecnico
                href="/projeto-trabalho-tecnico"
                target="_blank"
                style={{ marginRight: "2px", marginLeft: "25px" }}
              >
                <img className="icon-projeto"
                  style={{ height: 30, width: 30 }}
                  src={ProjetoSocioAmbiental2}
                />
                Projeto Socioambiental{" "}
              </ProjetoTecnico>{" "}
              <EstudoCatadores
                href="/estudo-de-catadores"
                target="_blank"
                style={{ marginLeft: "2px" }}
              >
                <img className="icon-estudo"
                  style={{ height: 30, width: 30 }}
                  src={EstudosobreCatadores}
                />
                Estudo de catadores{" "}
              </EstudoCatadores>{" "}
              <LivroCatadores
                href="/livro-sobre-catadores"
                target="_blank"
                style={{ marginLeft: "2px" }}
              >
                <img className="icon-livro"
                  style={{ height: 30, width: 30 }}
                  src={LivrosobreCatadores}
                />
                Livro sobre catadores{" "}
              </LivroCatadores>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <Center>
          <HeaderPage style={{ marginBottom: 60 }}>
            <TitleSection center>
              Gestão de <strong> Resíduos Sólidos </strong>{" "}
            </TitleSection>{" "}
          </HeaderPage>{" "}
          <div className="responsiveStepBar">
            <div className="groupButtonsResponsive">
              <div className="buttonAlignResponsive">
                <ProjetoTecnico
                  href="/projeto-trabalho-tecnico"
                  target="_blank"
                  style={{ minWidth: "200px" }}
                >
                  <FiClipboard />
                  Projeto Socioambiental{" "}
                </ProjetoTecnico>{" "}
                <EstudoCatadores
                  style={{ minWidth: 200 }}
                  href="/estudo-de-catadores"
                  target="_blank"
                >
                  <FiClipboard />
                  Estudo de catadores{" "}
                </EstudoCatadores>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <TextSection
            style={{ marginTop: 110 }}
            columns="2"
            id="firstParagraph"
          >
            <p style={{ textAlign: "justify" }}>
              Com o Programa Sanear Santo André, a Prefeitura e o Semasa vão
              construir mais 10 Estações de Coleta e implantar novos PEVS
              (Pontos de Entrega Voluntária) para receber resíduos recicláveis,
              eletroeletrônicos e outros materiais, o que vai beneficiar
              diretamente mais de 170 mil pessoas.
              <strong> As intervenções têm como objetivos </strong>:
            </p>
            <p style={{ textAlign: "justify" }}>• Aumentar a reciclagem.</p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir o volume de materiais secos que é aterrado e ampliar a
              vida útil do Aterro Sanitário Municipal. A previsão é de que o
              equipamento tenha apenas mais 5 anos de operação.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Diminuir pontos de descarte irregular de resíduos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Proporcionar economia de recursos públicos que são utilizados
              com serviços de limpeza.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Deixar os bairros mais limpos e proteger o meio ambiente.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Aumentar a criação de postos de trabalho nas duas cooperativas
              de reciclagem que existem– a Coopcicla e a Cidade Limpa.
            </p>
            <p style={{ textAlign: "justify" }}>
              Em abril de 2022, começou a construção das
              <strong> Estações de Coleta Ana Maria, Palmeiras e Bangu </strong>
              (confira abaixo a localização dos ecopontos).Só na região dessas
              três unidades, a equipe de varrição do Semasa gastou, em todo o
              ano de 2021, mais de R$ 141 mil para limpar pontos de descarte
              irregular de resíduos. Foram retiradas 680 toneladas de materiais.
            </p>
            <p style={{ textAlign: "justify" }}>
              O segundo bloco de obras contempla a construção das
              <strong> Estações de Coleta Centro, Jardim Alvorada </strong> e
              <strong> Jardim Cristiane </strong>. Já o terceiro e último bloco
              envolve as unidades
              <strong> Parque Miami, Jardim Santo André </strong> e
              <strong> Vila Guiomar </strong>e<strong> Vila Linda. </strong>
              Contando com as 10 Estações de Coleta que vão ser implantadas, o
              Semasa pode economizar mais de R$ 500 mil por ano, caso consiga
              combater pontos de descarte irregular. O investimento para
              construir as novas unidades é de mais de R$ 6 milhões.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong> Modernização dos equipamentos </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              As novas Estações de Coleta serão mais  modernas e vão receber
              caçambas compactadoras para melhorar a eficiência do sistema, além
              de reduzir o número de viagens de caminhões que levam os resíduos
              às cooperativas de reciclagem. Todos os equipamentos ainda terão
              um sistema de filmagem de qualidade para monitorar os locais e
              evitar a ocorrência de depredações, furtos e invasões.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong> Descarte correto nas Estações de Coleta </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              Atualmente, Santo André disponibiliza 20 ecopontos, que são
              equipamentos gratuitos e exclusivos para o uso dos moradores da
              cidade. A população pode descartar recicláveis volumosos, entulho,
              móveis, colchões e estofados, quatro pneus (por mês), óleo de
              cozinha e resíduos eletroeletrônicos, como computador, monitor,
              geladeira, fogão e etc. Cada pessoa pode fazer a disposição de até
              um metro cúbico de resíduos, que é o equivalente a dez sacos de
              lixo de 100 litros. Algumas unidades também aceitam podas de
              vegetação, telhas de amianto e gesso. O endereço de todas as
              Estações de Coleta, bem como os dias e horários de funcionamento,
              pode ser consultados no{" "}
              <a href="http://www.semasa.sp.gov.br/residuos/coleta-domiciliar-2/coleta-seletiva/estacoes-de-coleta/">
                site do Semasa
              </a>
              .
            </p>
            <p
              style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                marginTop: 30,
                marginBottom: 60,
              }}
            >
              Infraestrutura das novas estações de coleta:
            </p>{" "}
          </TextSection>{" "}
        </Center>{" "}
        <div className="iconsGrid">
          <DocumentsList>
            <div className="Grid">
              <div className="row">
                <span
                  className="span-column"
                  style={{ marginLeft: 0, marginRight: 30 }}
                >
                  <img style={{ height: 50, width: 50 }} src={monitoramento} />{" "}
                  <p style={{ margin: 0, flexWrap: "wrap" }}>
                    Câmeras de Monitoramento{" "}
                  </p>{" "}
                </span>{" "}
                <span
                  className="span-column"
                  style={{ marginLeft: 80, marginRight: 60 }}
                >
                  <img style={{ height: 50, width: 50 }} src={tablets} />{" "}
                  <p style={{ margin: 0, flexWrap: "wrap" }}> Tablets </p>{" "}
                </span>{" "}
                <span
                  className="span-column"
                  style={{ marginLeft: 35, marginRight: 5 }}
                >
                  <img style={{ height: 50, width: 50 }} src={seguranca} />{" "}
                  <p style={{ margin: 0, marginRight: 0, flexWrap: "wrap" }}>
                    Sistema de Segurança{" "}
                  </p>{" "}
                </span>{" "}
              </div>{" "}
              <div className="row">
                <span
                  className="span-column"
                  style={{ marginLeft: 25, marginRight: 5 }}
                >
                  <img style={{ height: 50, width: 50 }} src={cabeamento} />{" "}
                  <p style={{ margin: 0 }}> Cabeamento Estruturado </p>{" "}
                </span>{" "}
                <span
                  className="span-column"
                  style={{ marginLeft: 45, marginRight: 10 }}
                >
                  <img style={{ height: 50, width: 50 }} src={compactadora} />{" "}
                  <p style={{ margin: 0 }}> Caçambas Compactadoras </p>{" "}
                </span>{" "}
                <span
                  className="span-column"
                  style={{ marginLeft: 0, marginRight: 5 }}
                >
                  <img style={{ height: 50, width: 50 }} src={comunicacao} />{" "}
                  <p style={{ margin: 0 }}> Sistemas de Comunicação </p>{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
          </DocumentsList>{" "}
        </div>{" "}
      </Container>
      {hasPictures && hasVideos && (
        <Container>
          <Center>
            <AlbumPhotos />
          </Center>{" "}
        </Container>
      )}
      <Container>
        {" "}
        {isVisible && (
          <Center>
            <TitleSection className="text-center">
              Obras em <strong> andamento </strong>{" "}
            </TitleSection>
            <Row>
              <WorkCarousel category="bb7f1740-35be-11eb-8cc1-1540c95fed24" />
            </Row>{" "}
          </Center>
        )}{" "}
        <TextSection style={{ marginTop: -95 }} columns="2">
          <p style={{ textAlign: "justify" }}>
            Veja abaixo a <strong> localização dos novos 10 ecopontos. </strong>{" "}
          </p>{" "}
        </TextSection>{" "}
        <Center>
          <h2> Ecopontos </h2> <MapComponent markers={locations} />{" "}
        </Center>{" "}
      </Container>{" "}
      <Footer />
    </>
  );
};

export default Residuos;
