import { useCallback, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import {
Container,
Center,
Row,
TitleSection,
BannerPage,
TextSection
} from "./styles";
import MapComponent from "../../../components/MapComponent";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import capa from '../../../assets/public/imagens/ResiduosSolidos/capa.png';


const locations = [
  {
    name: "Albert Einstein",
    lat: "-23.6695957",
    lng: "-46.5435572",
  },
  {
    name: "Bangu",
    lat: "-23.647502",
    lng: "-46.5251817",
  },
  {
    name: "Jd. Cristiane",
    lat: "-23.690221",
    lng: "-46.5321896",
  },
  {
    name: "Santa Maria",
    lat: "-23.6520941",
    lng: "-46.5488333",
  },
  {
    name: 'Jardim',
    lat: '-23.6519862',
    lng: '-46.5312363'
  },
  {
    name: 'Jd. Alvorada',
    lat: '-23.6913025',
    lng: '-46.5232287'
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
        <Center>
          <TitleSection center>
            Gestão de <strong>Resíduos Sólidos</strong>
          </TitleSection>
          <TextSection columns="2">
            <p style={{ textAlign: "justify" }}>
            <strong>Com o Programa Sanear Santo André, o Semasa terá mais 0 Estações de Coleta, </strong><strong>o que dobrará a capacidade de o município receber resíduos recicláveis, entulho, móveis, restos de pequenas construções, pneus, óleo de cozinha e lixo eletrônico (computador, geladeira, fogão etc).</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
            <strong>Só em 2021, serão construídos mais 10 ecopontos (as outras 10 unidades estão previstas para serem implantadas em 2022). Os novos equipamentos têm a missão de:</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              • Ampliar a reciclagem.
              </p>
            <p style={{ textAlign: "justify" }}>
            <strong> • Diminuir pontos de descarte irregular de resíduos.</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
            <strong>• Aumentar a criação de postos de trabalho nas duas cooperativas
              de reciclagem que são parceiras da cidade – a CoopCicla e a
              CidadeLimpa.</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
            <strong>• Proporcionar economia de recursos gastos em locais que sofrem com o despejo de materiais. </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
            150 mil pessoas vão ser beneficiadas com os novos ecopontos. <strong>Ao todo, a cidade passará a ter 42 equipamentos públicos para recebimento de resíduos.</strong> 
            </p>
            <p style={{ textAlign: "justify" }}>
            <strong>As novas Estações de Coleta serão mais modernas. Os locais vão receber caçambas compactadoras para melhorar a eficiência do sistema e reduzir o número de viagens de caminhões que levam os resíduos às cooperativas de reciclagem.</strong>            
               </p>
            <p style={{ textAlign: "justify" }}>
            <strong>Todos os equipamentos públicos também terão um sistema de filmagem de qualidade para que possam ser evitados furtos e invasões</strong>. <strong>Para isso, haverá monitoramento dos locais em um Centro de Controle Operacional. Veja abaixo a</strong> localização dos 10 ecopontos que <strong>serão construídos em 2021. </strong>
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
