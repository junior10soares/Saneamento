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
} from "./styles";
import MapComponent from "../../../components/MapComponent";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import monitoramento from "../../../assets/public/imagens/monitoramento/monitoramento.jpeg";

const locations = [
  {
    name: "Area 1 - Betania",
    lat: "-23.6356121",
    lng: "-46.5059712",
  },
  {
    name: "Area 2 - EMEIEF Eufly Gomes",
    lat: "-23.6443238",
    lng: "-46.5199072",
  },
  {
    name: "Area 3 - Creche Maximo Manssur",
    lat: "-23.6466776",
    lng: "-46.5082739",
  },
  {
    name: "Area 4 - CF João amazonas",
    lat: "-23.6473472",
    lng: "-46.4942573",
  },
  {
    name: "Area 5 - Creche Demercindo",
    lat: "-23.624573",
    lng: "-46.5236407",
  },
  {
    name: "Area 6 - CAPS praça Chile",
    lat: "-23.6392532",
    lng: "-46.525763",
  },
  {
    name: "Area 8 - Prefeitura Municipal de Santo André",
    lat: "-23.6573194",
    lng: "-46.532942",
  },
  {
    name: "Area 9 - Centro reabilitação IV",
    lat: "-23.636011",
    lng: "-46.5449043",
  },
  {
    name: "Area 10 - UBS Vila Palmares",
    lat: "-23.6518101",
    lng: "-46.560578",
  },
  {
    name: "Area 11 - CESA Vila Floresta",
    lat: "-23.6760804",
    lng: "-46.5502266",
  },
  {
    name: "Area 12 - Unidade Defesa Civil",
    lat: "-23.6655394",
    lng: "-46.5521223",
  },
  {
    name: "Area 13 - Creche Marina Ulbrich",
    lat: "-23.6821143",
    lng: "-46.5379085",
  },
  {
    name: "Area 14 - UBS Jd. Alvorada",
    lat: "-23.6961177",
    lng: "-46.5211209",
  },
  {
    name: "Area 15 - Unidade Guarará",
    lat: "-23.687388",
    lng: "-46.5079282",
  },
  {
    name: "Area 16 - EMEIEF Premem",
    lat: "-23.6670915",
    lng: "-46.5128382",
  },
  {
    name: "Area 17 - EMEIEF Francisca Zuk",
    lat: "-23.7060687",
    lng: "-46.5015742",
  },
  {
    name: "Area 18-C - EMEIEF Homero Thon",
    lat: "-23.6658989",
    lng: "-46.5022625",
  },
  {
    name: "Area 19 - EMEIEF Arquiteto Estevão",
    lat: "-23.6737111",
    lng: "-46.4922245",
  },
  {
    name: "Area 20 - Creche vereador Cosmo",
    lat: "-23.7102568",
    lng: "-46.5171041",
  },
  {
    name: "Area 21 - Escola do conhecimento Sabina",
    lat: "-23.6790432",
    lng: "-46.5314242",
  },
  {
    name: "Area A - Unidade Iluminação Publica",
    lat: "-23.6544014",
    lng: "-46.545913",
  },
  {
    name: "Area B - Creche Beth Lobo",
    lat: "-23.6164323",
    lng: "-46.5317969",
  },
  {
    name: "Area D - EMEIEF Gabriel Oscar",
    lat: "-23.6678024",
    lng: "-46.5382772",
  },
  {
    name: "Area E - Creche Heitor Vila Lobos",
    lat: "-23.6401371",
    lng: "-46.4918714",
  },
  {
    name: "Area 26 - EMEIEF Machado Assis",
    lat: "-23.7400518",
    lng: "-46.4958728",
  },
];

const EstacaoMeteorologicas = () => {
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
      <BannerPage image={monitoramento} />{" "}
      <Container>
        <Center>
          <HeaderPage style={{ marginBottom: 10 }}>
            <TitleSection center><strong>Estações meteorológicas</strong></TitleSection>{" "}
          </HeaderPage>{" "}
          <TextSection
            style={{ marginTop: 30 }}
            columns="2"
            id="firstParagraph"
          >
            <p style={{ textAlign: "justify" }}>
              Santo André nunca investiu tanto em tecnologia e modernização para
              melhorar o sistema de monitoramento e alerta de chuva. Antes, a
              cidade possuía apenas 1 estação meteorológica em funcionamento,
              agora são <strong>26 equipamentos em operação</strong>. Isso significa que houve
              <strong>ampliação de 2.500% no número de dispositivos</strong>. Eles servem para
              registrar e monitorar a temperatura, umidade relativa do ar,
              direção e velocidade dos ventos, índice pluviométrico (chuva) e
              radiação solar.O <strong>Departamento de Proteção e Defesa Civil de Santo
              André</strong> utiliza as estações meteorológicas para avisar a população
              sobre riscos de chuvas intensas, deslizamentos, desabamentos,
              ventanias, granizo, baixa umidade do ar, dentre outros eventos
              climáticos e meteorológicos. Os equipamentos também são
              fundamentais para projetar o desenvolvimento de ações preventivas,
              com o objetivo de preservar vidas e garantir a segurança dos
              moradores. A Defesa Civil encaminha os avisos por meio do
              WhatsApp. Para receber as mensagens, o munícipe deve se cadastrar
              pelo número <strong>99584-5372 ou pelo link</strong>{" "}
              <a href="https://www3.santoandre.sp.gov.br/defesacivil/alertas-preventivos-por-sms/">
              <strong>Alertas Preventivos por WhatsApp</strong>
              </a>{" "}
            </p>
            <p style={{ textAlign: "justify" }}>
              Veja abaixo os locais onde foram instaladas as estações
              meteorológicas.
            </p>
          </TextSection>{" "}
        </Center>{" "}
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
        <TextSection style={{ marginTop: -95 }} columns="2"></TextSection>{" "}
        <Center>
          <h2> Estações Meteorológicas</h2>
          <MapComponent markers={locations} />
        </Center>{" "}
      </Container>{" "}
      <Footer />
    </>
  );
};

export default EstacaoMeteorologicas;
