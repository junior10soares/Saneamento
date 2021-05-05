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
            <strong>Santo André terá o seu sistema de monitoramento e alerta de chuva ampliado e modernizado, 
            a fim de otimizar a velocidade e a qualidade dos alertas enviados à população, bem como 
            possibilitar mais eficiência de medidas que devem ser tomadas em decorrência de adversidades 
            pluviométricas. Os principais benefícios são:</strong> 
              <p>
              <strong>• Minimizar prejuízos materiais, de saúde e demais problemas à
                população.</strong>
              </p>
              <p>
              <strong>• Registrar o histórico do comportamento das inundações para
                melhoria do processo de gestão.</strong>
              </p>
              <p>
              <strong>• Ter indicadores estatísticos, de ocorrências, desempenho de
                produtividade e atendimento.</strong>
              </p>
              <p>• Apoiar planejamento e decisões estratégicas.</p>
              <p>
              <strong>• Identificar causas e problemas, bem como responsabilidades.</strong>
              </p>
              <p>
              <strong>• Obter maior eficiência ao detectar e comunicar ocorrências
                críticas e desastres.</strong>
              </p>
              <p>
              <strong>• Melhorar a qualidade do atendimento de solicitações feitas
                pela população.</strong>
              </p>
              <p><strong>• Agilizar a limpeza e/ ou os reparos após ocorrências.</strong></p>
              <p>
              <strong>• Reduzir o número de chamados e solicitações por meio de outros
                canais atendimento.</strong>
              </p>
              <p>
              <strong>• Estreitar o relacionamento com a população, incentivando a
                participação colaborativa na gestão.</strong>
              </p>
              <p><strong>• Realizar análise de previsão meteorológica.</strong></p>
              <p><strong>• Alertar previamente a população em situação de risco.</strong></p>
            </p>
            <p style={{ textAlign: "justify" }}>
            <strong>As intervenções preveem diversas melhorias para o sistema, como </strong>25 novas câmeras <strong>para 
            monitorar córregos e o rio Tamanduateí (atualmente, existem 17),</strong> 9 pluviômetros
             (<strong>existem 2</strong>), 23 fluviômetros (<strong>existem 9</strong>) e 7 estações meteorológicas
              (<strong>existem 5, mas 3 
             estão fora do ar</strong>); <strong>desenvolvimento de </strong>softwares de simulação de inundações, 
             <strong>modelagem 
             hidrográfica para o município e de gestão de alertas; implantação de</strong> 1.321 bocas de lobo 
             inteligentes (<strong>com sensor volumétrico para alertar quando os equipamentos estão cheios de resíduos</strong>); 
             <strong>e adequação e </strong>reabilitação de equipamentos <strong>já existentes. </strong>
            </p>
            <p style={{ textAlign: "justify" }}>
            <strong>O novo sistema de monitoramento de chuva será operado e centralizado em uma nova sala da Defesa Civil, localizada no prédio da Prefeitura. As imagens e informações também serão passadas ao Cecoi (Centro de Controle Operacional Integrado) do Semasa para que seus técnicos façam a manutenção preventiva da rede de drenagem nos eventos pós-chuva.</strong>        
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
