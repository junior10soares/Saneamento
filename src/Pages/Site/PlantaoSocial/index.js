import { useCallback, useState } from "react";
import { Header } from "../../../components/Header";
import {BannerPage, Center, Container,ContentPageSocial, ImageSocial, Row, TitleSection, TextSection} from './styles';
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { CardConstruction } from "../../../components/CardConstruction";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import plantao from '../../../assets/public/imagens/Plantao/plantao.jpg';
import social from '../../../assets/public/imagens/Plantao/social.jpg';

const PlantaoSocial = () => {
  return (
    <>
      <Header />
      <BannerPage image={plantao} />
      <Container>
        <Center>
          <TitleSection center>
            <strong>Plantão Social</strong>
          </TitleSection>
          <div className="buttonWhatas">
            <a
              href="https://api.whatsapp.com/send?phone=5511937503181"
              target="_blank"
            >
              Plantão Social
            </a>
          </div>
          <TextSection>
            <div className="contentText">
              <p>
                As obras do Complexo Viário Cassaquera contam com um Plantão
                Social exclusivo para que os moradores de Santo André possam
                saber mais informações sobre as intervenções e os seus
                benefícios, tirar dúvidas e levar demandas e sugestões.
              </p>
              <p>
                O atendimento é realizado por uma assistente social no canteiro
                de obras, que fica na avenida Pedro Américo, s/n. O serviço
                ocorre de segunda a sexta-feira, das 9h às 12h e das 13h às 15h.
              </p>
              <p>
                Os interessados ainda podem buscar atendimento à distância. Para
                isso, basta entrar em contato pelo número (11) 93750-3181,
                inclusive por meio do WhatsApp.
              </p>
              <p>
                O plantão ocorre de acordo com os protocolos de saúde para
                evitar o contágio pelo coronavírus. Desta forma, é obrigatório o
                uso de máscara no ambiente.
              </p>
            </div>
          </TextSection>
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export default PlantaoSocial;
