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
// imagens
import bangu from "../../../assets/public/imagens/ResiduosSolidos/EC-Bangu.jpg";
import palmeiras from "../../../assets/public/imagens/ResiduosSolidos/EC-Palmeiras.jpg";
import centro from "../../../assets/public/imagens/ResiduosSolidos/EC-Centro.jpg";
import jardimAlvorada from "../../../assets/public/imagens/ResiduosSolidos/EC-Jardim-Alvorada.jpg";
import jardimCristiane from "../../../assets/public/imagens/ResiduosSolidos/EC-Jardim-Cristiane.jpg";
import miami from "../../../assets/public/imagens/ResiduosSolidos/EC-Parque-Miami.jpg";
import santoAndre from "../../../assets/public/imagens/ResiduosSolidos/EC-Jardim-Santo-Andre.jpg";
import guiomar from "../../../assets/public/imagens/ResiduosSolidos/EC-Vila-Guiomar.jpg";
import vilaLinda from "../../../assets/public/imagens/ResiduosSolidos/EC-Vila-Linda.jpg";
import avCandido from "../../../assets/public/imagens/ResiduosSolidos/av-candido-camargo.jpg";

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
  {
    name: "Av. Ford, 37 - Vila de Paranapiacaba",
    lat: "-23.776181459073563",
    lng: "-46.298477476392144",
  },
  {
    name: "Rua Edgard Vieira de Lima, 51, Parque Marajoara",
    lat: "-23.66477457264354",
    lng: "-46.488364045710256",
  },
];

const gallery2 = [
  { url: "https://via.placeholder.com/300", caption: "Imagem 1" },
  { url: "https://via.placeholder.com/300", caption: "Imagem 2" },
];
const images = [
  {
    url: bangu,
    caption: "EC Bangu",
  },
  {
    url: palmeiras,
    caption: "EC Palmeiras",
  },
  {
    url: centro,
    caption: "EC Centro",
  },
  {
    url: jardimAlvorada,
    caption: "EC Jardim Alvorada",
  },
  {
    url: jardimCristiane,
    caption: "EC Jardim Cristiane",
  },
  {
    url: miami,
    caption: "EC Parque Miami",
  },
  {
    url: santoAndre,
    caption: "EC Jardim Santo André ",
  },
  {
    url: guiomar,
    caption: "EC Vila Guiomar",
  },
  {
    url: vilaLinda,
    caption: "EC Vila Linda",
  },
];

const columnStyle = {
  flex: "1",
  padding: "10px",
};

const imgStyle = {
  width: "612px",
  height: "415px",
  marginTop: "10px",
};
const imgStyle2 = {
  width: "100%",
  height: "auto",
  marginTop: "10px",
};

const captionStyle = {
  textAlign: "center",
  fontSize: "14px",
  color: "#555",
  fontStyle: "italic",
};
const centerImageStyle = {
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "30px",
};

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
                <img
                  className="icon-projeto"
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
                <img
                  className="icon-estudo"
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
                <img
                  className="icon-livro"
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
                  style={{ marginRight: "0px", marginLeft: "5px" }}
                >
                  <img
                    className="icon-projeto"
                    style={{ height: 30, width: 30 }}
                    src={ProjetoSocioAmbiental2}
                  />
                  Projeto Socioambiental{" "}
                </ProjetoTecnico>{" "}
                <EstudoCatadores
                  href="/estudo-de-catadores"
                  target="_blank"
                  style={{ marginRight: "0px", marginLeft: "2px" }}
                >
                  <img
                    className="icon-estudo"
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
                  <img
                    className="icon-livro"
                    style={{ height: 30, width: 30 }}
                    src={LivrosobreCatadores}
                  />
                  Livro sobre catadores{" "}
                </LivroCatadores>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <TextSection
            style={{ marginTop: 110 }}
            columns="2"
            id="firstParagraph"
          >
            <p style={{ textAlign: "justify" }}>
              Com o programa Sanear Santo André, a Prefeitura e o Semasa
              construíram <strong>10 Estações de Coleta</strong> e{" "}
              <strong>reformaram 2 ecopontos</strong>, beneficiando mais de 170
              mil pessoas. Esses equipamentos públicos visam:
            </p>
            <p style={{ textAlign: "justify" }}>• Aumentar a reciclagem.</p>
            <p style={{ textAlign: "justify" }}>
              • Reduzir o volume de materiais que é destinado ao Aterro
              Sanitário Municipal, ampliando o tempo de operação do equipamento.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Diminuir pontos de descarte irregular de resíduos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Minimizar a emissão de gases do efeito estufa, como metano e
              dióxido de carbono, que são responsáveis pelas mudanças
              climáticas.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Proporcionar economia de recursos públicos gastos com serviços
              de limpeza.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Deixar os bairros mais limpos.
            </p>
            <p style={{ textAlign: "justify" }}>• Preservar o meio ambiente.</p>
            <p style={{ textAlign: "justify" }}>
              • Ampliar postos de trabalho nas cooperativas de reciclagem de
              Santo André – Coopcicla e Cidade Limpa.
            </p>
            <p style={{ textAlign: "justify" }}>
              As obras iniciaram em abril de 2022, com a construção das Estações
              de Coleta Ana Maria e Bangu, além da reforma da EC Palmeiras. Só
              na avenida Cândido Camargo, no Jardim Ana Maria, onde está
              localizado um dos ecopontos, o Semasa economiza mais de R$ 140 mil
              por ano. Esse foi o valor gasto pela autarquia, em 2021, para
              retirar 680 toneladas de materiais que foram descartadas
              irregularmente no terreno desse equipamento.
            </p>
            {/* <div style={{ display: "flex" }}>
              <div style={columnStyle}>
                {gallery2.slice(0, 1).map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={image.caption} style={imgStyle} />
                    <p style={captionStyle}>{image.caption}</p>
                  </div>
                ))}
              </div>
              <div style={columnStyle}>
                {gallery2.slice(1, 2).map((image, index) => (
                  <div key={index + 1}>
                    <img src={image.url} alt={image.caption} style={imgStyle} />
                    <p style={captionStyle}>{image.caption}</p>
                  </div>
                ))}
              </div>
            </div> */}
            <div style={centerImageStyle}>
              <img
                src={avCandido}
                alt="Imagem Centralizada"
                style={imgStyle2}
              />
              <p style={captionStyle}>
                Antes x depois da avenida Cândigo Camargo, no Jardim Ana Maria
              </p>
            </div>
            <p style={{ textAlign: "justify" }}>
              O segundo bloco de obras contemplou a construção das Estações de
              Coleta Centro, Jardim Alvorada e Jardim Cristiane. Já o terceiro
              envolveu as unidades Parque Miami, Jardim Santo André, Vila
              Guiomar e Vila Linda.
            </p>
            <p style={{ textAlign: "justify" }}>
              O quarto e último bloco de obras teve a construção da EC Parque
              Marajoara e a reforma da EC Paranapiacaba.
            </p>
            <div style={{ display: "flex" }}>
              <div style={columnStyle}>
                {images.slice(0, 3).map((image, index) => (
                  <div key={index}>
                    <img src={image.url} alt={image.caption} style={imgStyle} />
                    <p style={captionStyle}>{image.caption}</p>
                  </div>
                ))}
              </div>
              <div style={columnStyle}>
                {images.slice(3, 6).map((image, index) => (
                  <div key={index + 3}>
                    <img src={image.url} alt={image.caption} style={imgStyle} />
                    <p style={captionStyle}>{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ textAlign: "justify" }}>
              <strong> Modernização dos equipamentos </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              As novas Estações de Coleta têm{" "}
              <strong>estruturas mais modernas</strong> para melhorar o serviço
              e atendimento aos usuários. Elas possuem caçambas compactadoras, o
              que possibilita armazenar mais do que o dobro de resíduos que
              caberiam em uma caçamba estacionária. Todos os ecopontos também
              têm jardins e 2 câmeras de monitoramento para coibir furtos,
              invasões e descarte irregular de resíduos.
            </p>
            <p style={{ textAlign: "justify" }}>
              <strong> Descarte correto nas Estações de Coleta </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              Santo André possui <strong>30 Estações de Coleta</strong> para que
              os munícipes possam dar a destinação ambientalmente correta a
              diversos tipos de resíduos volumosos.
            </p>
            <p style={{ textAlign: "justify" }}>
              Os locais aceitam entulho, móveis, colchões e estofados, pneus (4
              por mês), eletroeletrônicos, óleo de cozinha usado (a cada 1
              litro, troque por 1 barra de sabão ecológico), recicláveis,
              isopor, dentre outros. Em algumas unidades a população ainda pode
              levar poda de vegetação, gesso e telha e fibra de amianto.
            </p>
            <p style={{ textAlign: "justify" }}>
              Também é possível doar roupas, calçados, acessórios e objetos –
              inclusive para pessoas com deficiência. Esses itens são
              distribuídos em projetos sociais do Semasa e doados a instituições
              sociais e ao Fundo Social de Solidariedade, da Prefeitura de Santo
              André.
            </p>
            <p style={{ textAlign: "justify" }}>
              Cada morador pode fazer, por mês, a disposição de até 1 m³ de
              resíduos, que é o equivalente a 10 sacos de lixo de 100 litros. O
              endereço de todas as Estações de Coleta, bem como os dias e
              horários de funcionamento, pode ser consultado em{" "}
              <a href="http://www.semasa.sp.gov.br">www.semasa.sp.gov.br</a>.
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
            Veja abaixo a <strong> localização dos novos 12 ecopontos. </strong>{" "}
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
