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
  EstudoCatadores
} from "./styles";
import MapComponent from "../../../components/MapComponent";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import capa from '../../../assets/public/imagens/ResiduosSolidos/capa.png';

import { FiClipboard } from 'react-icons/fi';

const locations = [
  {
    name: "Albert Einstein",
    lat: "-23.6695957",
    lng: "-46.5435572",
  },
  {
    name: "Bangu",
    lat: "-23.641372",
    lng: "-46.5218887",
  },
  {
    name: "Jd. Cristiane",
    lat: "-23.690221",
    lng: "-46.5321896",
  },
  {
    name: "",
    lat: "-23.7303635",
    lng: "-46.4945559", 
  },
  {
    name: 'Jardim',
    lat: '-23.6519862',
    lng: '-46.5312363'
  },
  {
    name: 'Jd. Alvorada',
    lat: '-23.6942366',
    lng: '-46.5218557'
  },
  {
    name: "Palmeiras",
    lat: "-23.6439247",
    lng: "-46.5403729",
  },
  {
    name: 'Santa Cristina',
    lat: '-23.6981998',
    lng: '-46.5083826'
  },
  {
    name: "Jd. Ana Maria",
    lat: "-23.6268707",
    lng: "-46.4863033",
  },
  {
    name: "Jd. Santo André",
    lat: "-23.706491",
    lng: "-46.4962917",
  },
];

  const Residuos = () => {
  const [isVisible, setVisible] = useState(false);
  const [constructions, setConstrutions] = useState([]);  
  const construction = useCallback(() => {
    api.get('work?filters[][work_category.uuid@equal]=bb7f1740-35be-11eb-8cc1-1540c95fed24').then(({ data }) => setConstrutions(data.data));
   }, [])

   useEffect(() => {
    construction()
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
        <div className="desktopStepBar" style={{ width: "100%"}}>
          <div className="groupButtons">
            <div className="buttonAlign">
              <EstudoCatadores href="/estudo-de-catadores" target="_blank">
                <FiClipboard />
                Estudo de catadores
              </EstudoCatadores>
            </div>
          </div>
        </div>

        <Center>
          <HeaderPage style={{marginBottom: 60}}>
            <TitleSection center>
              Gestão de <strong>Resíduos Sólidos</strong>
            </TitleSection>
          </HeaderPage>
          <div className="responsiveStepBar">
            <div className="groupButtonsResponsive">
              <div className="buttonAlignResponsive">
                <EstudoCatadores style={{ minWidth: 200}} href="/estudo-de-catadores" target="_blank">
                  <FiClipboard />
                  Estudo de catadores
                </EstudoCatadores>
              </div>
            </div>
          </div>
          <TextSection style={{ marginTop: 110 }} columns="2">
            <p style={{ textAlign: "justify" }}>
            Com o Programa Sanear Santo André, o Semasa terá mais <strong>20 Estações de Coleta</strong>, o que dobrará a capacidade de o município receber resíduos 
            recicláveis, entulho, móveis, restos de pequenas construções, pneus, óleo de cozinha e lixo eletrônico (computador, geladeira, fogão etc).
            </p>
            <p style={{ textAlign: "justify" }}>
            Em 2022, serão construídos mais 10 eco pontos. Os novos equipamentos têm a missão de:
            </p>
            <p style={{ textAlign: "justify" }}>
              • Ampliar a reciclagem.
              </p>
            <p style={{ textAlign: "justify" }}>
            • Diminuir pontos de descarte irregular de resíduos.
            </p>
            <p style={{ textAlign: "justify" }}>
            • Aumentar a criação de postos de trabalho nas duas cooperativas
              de reciclagem que são parceiras da cidade – a CoopCicla e a
              CidadeLimpa.
            </p>
            <p style={{ textAlign: "justify" }}>
            • Proporcionar economia de recursos gastos em locais que sofrem com o despejo de materiais.
            </p>
            <p style={{ textAlign: "justify" }}>
            <strong>Mais de 170 mil pessoas vão ser beneficiadas</strong> com os novos ecopontos. Ao todo, a cidade passará a ter 40 equipamentos públicos para 
            recebimento de resíduos. O raio de distância entre as unidades será de até 1,5 quilômetro.
            </p>
            <p style={{ textAlign: "justify" }}>
            As novas Estações de Coleta serão mais <strong>modernas</strong>. Os locais vão receber caçambas compactadoras para melhorar a eficiência do sistema 
              e reduzir o número de viagens de caminhões que levam os resíduos às cooperativas de reciclagem.          
            </p>
            <p style={{ textAlign: "justify" }}>
            Todos os equipamentos públicos também terão um sistema de filmagem de qualidade para que possam ser evitados furtos e invasões. 
            Para isso, haverá monitoramento dos locais em um Centro de Controle Operacional. Veja abaixo a <strong>localização dos 10 ecopontos</strong> que 
            serão construídos no começo de 2022.
            </p>
          </TextSection>
        </Center>
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

        <Center>
          <h2>Ecopontos</h2>
          <MapComponent markers={locations} />
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export default Residuos;
