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
    name: "Rua da Constituição",
    lat: "-23.698315528762667", 
    lng: "-46.508629288264814",
  },
  {
    name: "R. Rolândia", 
    lat: "-23.69434398188793", 
    lng: "-46.52216404677351",
  },
  {
    name: "R. Albert Einstein",
    lat: "-23.66981155039881", 
    lng: "-46.5434407486703",
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
      <BannerPage image={capa} />
      <Container>
        <div className="desktopStepBar" style={{ width: "100%" }}>
          <div className="groupButtons">
            <div className="buttonAlign">
              <EstudoCatadores href="/projeto-trabalho-tecnico" target="_blank" style={{ marginRight: "10px" }}>
                <FiClipboard />
                Projeto Socioambiental
              </EstudoCatadores>
              <EstudoCatadores href="/estudo-de-catadores" target="_blank">
                <FiClipboard />
                Estudo de catadores
              </EstudoCatadores>
            </div>
          </div>
        </div>

        <Center>
          <HeaderPage style={{ marginBottom: 60 }}>
            <TitleSection center>
              Gestão de <strong>Resíduos Sólidos</strong>
            </TitleSection>
          </HeaderPage>
          <div className="responsiveStepBar">
            <div className="groupButtonsResponsive">
              <div className="buttonAlignResponsive">
                <EstudoCatadores
                  style={{ minWidth: 200 }}
                  href="/estudo-de-catadores"
                  target="_blank"
                >
                  <FiClipboard />
                  Estudo de catadores
                </EstudoCatadores>
              </div>
            </div>
          </div>
          <TextSection style={{ marginTop: 110 }} columns="2">
            <p style={{ textAlign: "justify" }}>
              Com o Programa Sanear Santo André, o Semasa pretende construir
              mais 15 Estações de Coleta e implantar novos PEVS (Pontos de
              Entrega Voluntária) para distribuir em diversos locais da cidade,
              o que pode dobrar a capacidade de o município receber resíduos
              recicláveis, entulho, móveis, restos de pequenas construções,
              pneus, óleo de cozinha e lixo eletrônico (computador, geladeira,
              fogão etc). Atualmente, o município possui 20 ecopontos.
            </p>
            <p style={{ textAlign: "justify" }}>
              Em 2022, começa a construção de 10 Estações de Coleta,
              beneficiando diretamente mais de 170 mil pessoas. Os novos
              equipamentos têm a missão de:
            </p>
            <p style={{ textAlign: "justify" }}>• Ampliar a reciclagem.</p>
            <p style={{ textAlign: "justify" }}>
              • Diminuir pontos de descarte irregular de resíduos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Aumentar a criação de postos de trabalho nas duas cooperativas
              de reciclagem que são parceiras da cidade – a CoopCicla e a
              CidadeLimpa.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Proporcionar economia de recursos que são utilizados para a
              limpeza de pontos de descarte irregular de resíduos
            </p>
            <p style={{ textAlign: "justify" }}>
              As novas Estações de Coleta serão mais <strong>modernas</strong>.
              As unidades vão receber caçambas compactadoras para melhorar a
              eficiência do sistema e reduzir o número de viagens de caminhões
              que levam os resíduos às cooperativas de reciclagem. Além disso,
              os funcionários que trabalham nos ecopontos vão ganhar tablets
              para fazer controle das pessoas que acessam as Estações de Coleta.
              Atualmente, o serviço é feito a mão.
            </p>
            <p style={{ textAlign: "justify" }}>
              Todos os equipamentos públicos também terão um sistema de filmagem
              de qualidade para que possam ser evitados furtos e invasões. Para
              isso, haverá monitoramento dos locais em um Centro de Controle
              Operacional, espaço que ainda será construído.
            </p>
            <p style={{textTransform:"uppercase", fontWeight: "bold", marginTop:30, marginBottom: 60}}>Infraestrutura das novas estações de coleta:</p>
          </TextSection>
        </Center>
        <div className="iconsGrid">
        <DocumentsList >
                <div className="Grid">
                  <div className="row">
                  <span className="span-column" style={{marginLeft: 0, marginRight:30}}>
                      <img style={{ height: 50, width: 50}} src={monitoramento} />
                      <p style={{margin: 0, flexWrap: 'wrap'}}>Câmeras de Monitoramento</p>
                    </span>
                    <span className="span-column" style={{marginLeft: 80, marginRight:60}}>
                      <img style={{ height: 50, width: 50}} src={tablets} />
                      <p style={{margin: 0, flexWrap: 'wrap'}}>Tablets</p>
                    </span>
                    <span className="span-column" style={{marginLeft: 35, marginRight:5}}>
                      <img style={{ height: 50, width: 50}} src={seguranca} />
                      <p style={{margin: 0, marginRight:0, flexWrap: 'wrap'}}>Sistema de Segurança</p>
                    </span>
                  </div>
                  <div className="row">
                    <span className="span-column" style={{marginLeft: 25 , marginRight:5 }}>
                      <img style={{ height: 50, width: 50}} src={cabeamento} />
                      <p style={{margin: 0}}>Cabeamento Estruturado</p>
                    </span>
                    <span className="span-column" style={{marginLeft:45 , marginRight:10 }}>
                      <img style={{ height: 50, width: 50}} src={compactadora} />
                      <p style={{margin: 0}}>Caçambas Compactadoras</p>
                    </span>
                    <span className="span-column" style={{marginLeft:0 , marginRight: 5}}>
                      <img style={{ height: 50, width: 50}} src={comunicacao} />
                      <p style={{margin: 0}}>Sistemas de Comunicação</p>
                    </span>
                  </div>
                </div>
              </DocumentsList>
              </div>
      </Container>
                
      {hasPictures && hasVideos && (
        <Container>
          <Center>
            <AlbumPhotos />
          </Center>
        </Container>
      )}

      <Container>
        {isVisible && (
          <Center>
            <TitleSection className="text-center">
              Obras em <strong>andamento</strong>
            </TitleSection>

            <Row>
              <WorkCarousel category="bb7f1740-35be-11eb-8cc1-1540c95fed24" />
            </Row>
          </Center>
        )}
         <TextSection style={{ marginTop: -95 }} columns="2">
            <p style={{ textAlign: "justify" }}>
          Veja abaixo a <strong>localização dos novos 10 ecopontos.</strong> </p>
          </TextSection>
        <Center>
          <h2>Ecopontos</h2>
          <MapComponent markers={locations} />
        </Center>
      </Container>
      <Footer />
    </>
  );
};

export default Residuos;
