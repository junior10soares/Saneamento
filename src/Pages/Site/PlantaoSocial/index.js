import { useCallback, useState } from "react";
import { Header } from "../../../components/Header";
import {
  BannerPage,
  Center,
  Container,
  ContentPageSocial,
  ImageSocial,
  Row,
  TitleSection,
  TextSection,
  ImgSection,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import { CardConstruction } from "../../../components/CardConstruction";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import WorkCarousel from "../../../components/WorkCarousel";
import plantao from "../../../assets/public/imagens/Plantao/plantao.jpg";
import social from "../../../assets/public/imagens/Plantao/social.jpg";
import plantao2 from "../../../assets/public/imagens/Plantao/plantao2.jpeg";
import plantao3 from "../../../assets/public/imagens/Plantao/plantao3.jpeg";

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
                Ter um canal exclusivo para conversar com moradores envolvidos
                em uma obra de grande porte, como a do Complexo Viário
                Cassaquera, é fundamental. Por isso, criamos o Plantão Social,
                que, desde outubro de 2020, já realizou mais de 330 atendimentos
                com a população que reside na região da avenida Professor Luiz
                Ignácio de Anhaia Mello.
              </p>
            </div>
          </TextSection>
          <ImgSection>
            <div  className="imageAbout">
              <img src={plantao2} alt="Semasa" />
            </div>
          </ImgSection>

          <TextSection>
            <div className="contentText">
              <p>
                O atendimento é feito por uma assistente social, responsável por
                acolher e ouvir a população, tirar dúvidas, resolver problemas,
                encaminhar sugestões e levar diversas informações sobre as
                obras, a fim de proporcionar mais transparência e conhecimento
                acerca das melhorias que estão sendo executadas pelo Semasa.
              </p>
              <p>
                Quem quiser utilizar o canal pode ligar ou mandar mensagem para
                o WhatsApp (11) 93750-3181, de segunda a sexta-feira, das 9h às
                12h e das 13h às 15h.
              </p>
              <p>
                O Plantão Social também promoveu diversas reuniões de diálogo
                social junto à população para abordar sobre as obras de
                saneamento, infraestrutura e mobilidade urbana realizadas ao
                longo da avenida Luiz Ignácio de Anhaia Mello. Foram 21
                encontros, on-line e presenciais, que contaram com a
                participação de mais de 250 munícipes.
              </p>
            </div>
          </TextSection>

          <ImgSection>
            <div  className="imageAbout">
              <img src={plantao3} alt="Semasa" />
            </div>
          </ImgSection>
          <TextSection>
            <div className="contentText">
              <p>
                Para ficar mais próximo dos moradores impactados pelas
                intervenções do Complexo Viário Cassaquera, o plantão chegou a
                funcionar no CEU das Artes Jardim Marek e depois ao lado do
                canteiro de obras. Com a finalização das obras, o atendimento
                passou a ser realizado a distância.
              </p>
            </div>
          </TextSection>
          <div></div>
        </Center>
      </Container>
      <Footer />
    </>
  );
};

export default PlantaoSocial;
