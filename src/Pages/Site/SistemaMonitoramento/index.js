import React, { useState, useCallback, useEffect } from "react";
import { Header } from "../../../components/Header";
import {
BannerPage,
Center,
Container,
Row,
TextSection,
TitleSection
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import api from "../../../services/api";
import monitoramento from '../../../assets/public/imagens/monitoramento/monitoramento.jpeg';

/* export async function getServerSideProps() {
  const response = await api({
    url: `work?filters[][work_category.uuid@equal]=bb7f1850-35be-11eb-afab-b56d7c8b75a2`,
  });
  const constructions = response.data.data || [];

  return {
    props: {
      constructions,
    },
  };
} */

const SistemaMonitoramento = ({ constructions }) =>  {
  const [isVisible, setVisible] = useState(false);
  const [construction, setConstruction] = useState([]);


  const categoriesResponse = useCallback(() => {
    api.get('work?filters[][work_category.uuid@equal]=bb7f1850-35be-11eb-afab-b56d7c8b75a2').then(({ data }) => setConstruction(data.data));
   }, [])

   useEffect(() => {
    categoriesResponse();
   }, [categoriesResponse]);

  return (
    <>
      <Header />
      <BannerPage image={monitoramento} />
      <Container>
        <Center>
          <TitleSection center>
            <strong>Sistema de monitoramento</strong>
          </TitleSection>
          <TextSection columns="1">
            <p style={{ textAlign: "justify" }}>
              Santo André terá o seu sistema de monitoramento de chuva ampliado
              e modernizado, a fim de substanciar a velocidade e a qualidade dos
              alertas à população, bem como a eficiência das providências a
              serem tomadas em decorrência das adversidades pluviométricas. Os
              principais benefícios são:
              <p>
                • Minimizar prejuízos materiais, de saúde e demais problemas à
                população.
              </p>
              <p>
                • Registrar o histórico do comportamento das inundações para
                melhoria do processo de gestão.
              </p>
              <p>
                • Ter indicadores estatísticos, de ocorrências, desempenho de
                produtividade e atendimento.
              </p>
              <p>• Apoiar planejamento e decisões estratégicas.</p>
              <p>
                • Identificar causas e problemas, bem como responsabilidades.
              </p>
              <p>
                • Obter maior eficiência ao detectar e comunicar ocorrências
                críticas e desastres.
              </p>
              <p>
                • Melhorar a qualidade do atendimento de solicitações feitas
                pela população.
              </p>
              <p>• Agilizar a limpeza e/ ou os reparos após ocorrências.</p>
              <p>
                • Reduzir o número de chamados e solicitações por meio de outros
                canais atendimento.
              </p>
              <p>
                • Estreitar o relacionamento com a população, incentivando a
                participação colaborativa na gestão.
              </p>
              <p>• Realizar análise de previsão meteorológica.</p>
              <p>• Alertar previamente a população em situação de risco.</p>
            </p>
            <p style={{ textAlign: "justify" }}>
              As intervenções preveem diversas melhorias para o sistema, como 25
              novas câmeras para monitorar córregos e o rio Tamanduateí
              (atualmente, existem 17, 9 pluviômetros (existem 2), 23
              fluviômetros (existem 9) e 7 estações meteorológicas (existem 5,
              mas 3 estão fora do ar); desenvolvimento de softwares de simulação
              de inundações, modelagem hidrográfica para o município e de gestão
              de alertas; implantação de 1.321 bocas de lobo inteligentes (com
              sensor volumétrico); adequação e reabilitação de equipamentos já
              existentes; além de sirenes de alertas instaladas em diversos
              pontos de Santo André.
            </p>
            <p style={{ textAlign: "justify" }}>
              O novo sistema de monitoramento de chuva será operado e
              centralizado em uma nova sala localizada no prédio da Prefeitura.
              As imagens e informações também serão passadas ao Semasa para que
              seus técnicos façam a manutenção preventiva da rede de drenagem
              nos eventos pós-chuva.
            </p>
          </TextSection>
        </Center>
      </Container>

{/*       {hasPictures && hasVideos && (
        <Container>
          <Center>
            <AlbumPhotos midiaArray={midiaArray} />
          </Center>
        </Container>
      )} */}

      <Container>
        <Center>
          {isVisible && (
            <TitleSection className="text-center">
              Obras em <strong>Andamento</strong>
            </TitleSection>
          )}
          <Row>
            <WorkCarousel category="bb7f1850-35be-11eb-afab-b56d7c8b75a2" />
          </Row>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export default SistemaMonitoramento;
