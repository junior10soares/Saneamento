import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import ReactHtmlParser from "react-html-parser";
import { Header } from "../../../components/Header";
import { Line } from "rc-progress";
import { FaWhatsapp } from "react-icons/fa";
import {
  FiFileText,
  FiHeadphones,
  FiXCircle,
  FiStar,
  FiEye,
  FiDownload,
} from "react-icons/fi";
import {
  Center,
  Container,
  Row,
  TitleSection,
  BannerPage,
  HeaderPage,
  Plantao,
  Projeto,
  SlideMacro,
  TextSection,
  WhatsappButton,
  Grafic,
  ContainerGrafic,
  DocumentsListContainer,
  Doc,
  Card,
  Image,
  Depoimento,
  Name,
  Info,
  DepoimentoInfo,
  IconDiv,
  ImgSection,
} from "./styles";
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import { StepsConstruction } from "../../../components/StepsConstruction";
import { CardDepoimento } from "../../../components/CardDepoimento";
import MapComponent from "../../../components/MapComponent";
import { DocumentsList } from "../../../components/DocumentsList";
import { ImQuotesRight } from "react-icons/im";
import { ModalSlide } from "../../../components/ModalSlide";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../../assets/public/imagens/MacroSlide/img1.jpg";
import img2 from "../../../assets/public/imagens/MacroSlide/img2.jpg";
import img3 from "../../../assets/public/imagens/MacroSlide/img3.jpg";
import img4 from "../../../assets/public/imagens/MacroSlide/img4.jpg";
import img5 from "../../../assets/public/imagens/MacroSlide/img5.jpg";
import img6 from "../../../assets/public/imagens/MacroSlide/img6.jpg";
import img7 from "../../../assets/public/imagens/MacroSlide/img7.jpg";
import img8 from "../../../assets/public/imagens/MacroSlide/img8.jpg";
import depoimento1 from "../../../assets/public/imagens/depoimento/depoimento1.jpg";
import depoimento2 from "../../../assets/public/imagens/depoimento/depoimento2.jpg";
import depoimento3 from "../../../assets/public/imagens/depoimento/depoimento3.jpg";
import depoimento4 from "../../../assets/public/imagens/depoimento/depoimento4.jpg";
import GraficCircle from "../../../components/GraficCircle";
import lazer1 from "../../../assets/public/imagens/Macrodrenagem/lazer1.jpg";
import lazer2 from "../../../assets/public/imagens/Macrodrenagem/lazer2.jpg";
import creche1 from "../../../assets/public/imagens/Macrodrenagem/creche1.jpg";
import creche2 from "../../../assets/public/imagens/Macrodrenagem/creche2.jpg";
import meio1 from "../../../assets/public/imagens/Macrodrenagem/meio1.jpg";
import meio2 from "../../../assets/public/imagens/Macrodrenagem/meio2.jpg";
import comeco1 from "../../../assets/public/imagens/Macrodrenagem/comeco1.jpg";
import comeco2 from "../../../assets/public/imagens/Macrodrenagem/comeco2.jpg";

/* export async function getServerSideProps(context) {
  const { params } = context;
  const { pid: id } = params;

  const response = await request({ url: `work/${id}` });
  const construction = response?.data.data || null;

  return {
    props: {
      construction,
    },
  };
} */

const options = {
  settings: {
    overlayColor: "rgb(25, 136, 124)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
};

const data = [
  {
    id: 0,
    image: img1,
    desc: "Movimentação de terra",
  },
  {
    id: 1,
    image: img2,
    desc: "Nova base do canal.",
  },
  {
    id: 2,
    image: img3,
    desc: "Assentamento de aduelas",
  },
  {
    id: 3,
    image: img4,
    desc: "Compatibilização das margens",
  },
  {
    id: 4,
    image: img5,
    desc: "Guias e sarjetas",
  },
  {
    id: 5,
    image: img6,
    desc: "Microdrenagem",
  },
  {
    id: 6,
    image: img7,
    desc: "Pavimentação",
  },
  {
    id: 7,
    image: img8,
    desc: "Sinalização",
  },
];

const markersLocation = [
  {
    lat: "-23.6735387",
    lng: "-46.4960711",
    name: "Rua Fernando costa machado",
  },
  { lat: "-23.6796537", lng: "-46.4954872", name: "Fim das Intervenções" },
];

const depoimentos = [
  {
    id: 0,
    text: "Todo dia eu passo aqui e fico olhando. Não vejo a hora de tudo ficar pronto. Vou ter orgulho demorar aqui.",
    nome: "Terezinha Bezerra da Silva",
    info: "69 anos, moradora da Vila Homero Thon",
    image: depoimento1,
  },
  {
    id: 1,
    text: "Não pensava que iria ficar bonito desse jeito. Eu nem acreditava mais que iriam fazer melhorias na nossa região.",
    nome: "Abelar Ferreira dos Santos",
    info: "80 anos, morador da Vila Guarani",
    image: depoimento2,
  },
  {
    id: 2,
    text: "Eu tenho certeza de que vai melhorar as condições de saúde e ambientais, a valorização das nossas casas e fomentar o comércio.",
    nome: "José Fernandes de Almeida",
    info: "73, morador do  Centreville",
    image: depoimento3,
  },
  {
    id: 3,
    text: "Anos atrás era muito diferente. Era barro. Agora, não. Vamos ter nova calçada, rede de esgoto. Estou apostando todas as minhas fichas nesta obra.",
    nome: "Márcia Pereira Bueno",
    info: "80 anos, morador da Vila Guarani",
    image: depoimento4,
  },
];

const Obra = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState();
  const [construction, setConstruction] = useState([]);
  const [workPhase, setWorkPhase] = useState([]);

  const constructionResponse = useCallback(() => {
    api.get(`work/${id}`).then(({ data }) => setConstruction(data.data));
  }, [id]);

  const workPahseResponse = useCallback(() => {
    api
      .get(`work-phase`, {
        data: {
          work_uuid: id,
        },
      })
      .then(({ data }) => setWorkPhase(data.data));
  }, [id]);

  useEffect(() => {
    constructionResponse();
    workPahseResponse();
  }, [constructionResponse, workPahseResponse]);

  const markers = useMemo(() => {
    const marks = construction?.work_coordinates?.map(
      ({ lat, long, name }) => ({
        lat,
        lng: long,
        name,
      })
    );

    return marks;
  }, [construction]);

  function handleModal(id) {
    setCurrent(id);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  console.log("workPhase", workPhase);

  /*   function handleNext(index){
    setCurrentSlide(index);
  }

  function handlePrev(index){
    setCurrentSlide(index);
  } */
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  return (
    <>
      <Header />
      {construction && (
        <>
          <BannerPage image={baseUrl + "/" + construction?.img} />
          <Container>
            <div className="desktopStepBar" style={{ width: "72%", alignItems: "center" }}>
              <div className="groupButtons">
                <div className="buttonAlign">
                  <Projeto
                    style={{ minWidth: 200 }}
                    href="/projeto-socioambiental"
                    target="_blank"
                  >
                    <FiStar />
                    Trabalho Socioambiental
                  </Projeto>
                </div>
                <div className="buttonAlign">
                  <Plantao href="/plantao-social" target="_blank">
                    <FiHeadphones />
                    Plantão Social
                  </Plantao>
                </div>

              {/*  {!!construction?.whatsapp_active && (
                  <div className="buttonAlign">
                    <WhatsappButton
                      href={construction?.whatsapp}
                      target="_blank"
                    >
                      <FaWhatsapp />
                      Nosso Whatsapp
                    </WhatsappButton>
                  </div>
              )}*/}
              </div>
            </div>

            <Center>
              <HeaderPage style={{ marginBottom: 60 }}>
                <TitleSection center>
                  <strong>Complexo Viário Cassaquera</strong>
                </TitleSection>
              </HeaderPage>
              <div className="responsiveStepBar">
                <div className="groupButtonsResponsive">
                  <div className="buttonAlignResponsive">
                    <Projeto
                      style={{ minWidth: 200 }}
                      href="/projeto-socioambiental"
                      target="_blank"
                    >
                      <FiStar />
                      Trabalho Socioambiental
                    </Projeto>
                  </div>
                  <div className="buttonAlignResponsive">
                    <Plantao
                      style={{ minWidth: 200 }}
                      href="/plantao-social"
                      target="_blank"
                    >
                      <FiHeadphones />
                      Plantão Social
                    </Plantao>
                  </div>

                  {/* {!!construction.whatsapp_active && (
                    <div className="buttonAlignResponsive">
                      <WhatsappButton
                        style={{ minWidth: 200 }}
                        href={construction?.whatsapp}
                        target="_blank"
                      >
                        Nosso Whatsapp
                      </WhatsappButton>
                  </div> 
                  )}*/}
                </div>
              </div>
              <TextSection style={{ marginTop: 110 }} columns="2">
                <div>
                  <ImgSection>
                    <div className="imageAbout">
                      <img src={comeco1} alt="Semasa" />
                    </div>
                  </ImgSection>
                  <div style={{ marginTop: "20px" }}>
                    <ImgSection>
                      <div className="imageAbout">
                        <img src={comeco2} alt="Semasa" />
                      </div>
                    </ImgSection>
                  </div>
                </div>
                <p>
                  Após mais de <strong>30 anos de espera</strong>, angústia e
                  expectativa da população que mora na região da avenida
                  Professor Luiz Ignácio de Anhaia Mello, finalmente as obras do
                  Complexo Viário Cassaquera saíram do papel em 12 de junho de
                  2020. O Semasa canalizou quase 2 quilômetros do córrego
                  Cassaquera e construiu um novo sistema viário na avenida.
                </p>
                <p>
                  As intervenções também envolveram a construção de mais de
                  3.200 metros de guias e sarjetas, 1.000 metros de galerias de
                  águas pluviais e 70 bocas de lobo; instalação de mais de 100
                  postes com iluminação de LED; calçadas largas e com
                  acessibilidade; e uma faixa ciclística. O espaço para
                  circulação de bicicletas fica entre o início da avenida
                  Professor Luiz Ignácio de Anhaia Mello e a rua Louis
                  Armstrong.
                </p>
                <p>
                  A faixa ciclística não estava prevista no projeto inicial, mas
                  a Prefeitura e o Semasa implantaram o corredor após pedido da
                  população. A administração municipal ainda estuda a
                  possibilidade de ampliar a área para bicicletas até o Parque
                  Guaraciaba.
                </p>
                <p>
                  A avenida agora possui duas pistas com três faixas de
                  rolamento em cada lado do córrego, além de duas travessias que
                  foram construídas próximas às ruas Fernando Pessoa e Assis
                  Chateaubriand, beneficiando tanto motoristas quanto pedestres.
                  Também foram readequadas as passagens que ficam na região das
                  ruas João Caetano e Fernando Costa.
                </p>
                <div style={{ marginTop: "1px" }}>
                  <ImgSection>
                    <div className="imageAbout">
                      <img src={meio1} alt="Semasa" />
                    </div>
                  </ImgSection>
                </div>
                <p>
                  O novo sistema viário vai melhorar a ligação entre as avenidas
                  dos Estados, Valentim Magalhães e Giovanni Battista Pirelli,
                  além de facilitar o acesso ao Rodoanel.
                </p>
                <p>
                  A pedido do Semasa, a Sabesp implantou coletores-tronco e
                  realizou serviços de interligação de ramais e de redes. Com
                  isso, no trecho onde o curso d’água foi canalizado,{" "}
                  <strong>100% dos efluentes passaram a ser coletados</strong> e
                  encaminhados para tratamento. Isso corresponde a,
                  aproximadamente, 80% de redução de esgoto despejado no curso
                  d’água.
                </p>
                <div>
                  <ImgSection>
                    <div className="imageAbout">
                      <img src={meio2} alt="Semasa" />
                    </div>
                  </ImgSection>
                </div>
                <p>
                  Todo o investimento para o Complexo Viário Cassaquera é de
                  mais de R$ 45 milhões. As obras foram realizadas entre a
                  avenida Professor Luiz Ignácio de Anhaia Mello e a rua
                  Fernando Costa, no Parque Gerassi. Cerca de 35 mil pessoas que
                  moram na região estão sendo beneficiadas.
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>Objetivos da obra:</strong>:
                </p>
                <p style={{ textAlign: "justify" }}>
                  • Melhorar o escoamento da água, diminuindo a incidência de
                  enchentes e pontos de alagamento.
                </p>
                <p style={{ textAlign: "justify" }}>
                  • Atenuar transtornos decorrentes de fortes chuvas.
                </p>
                <p style={{ textAlign: "justify" }}>
                  • Reduzir a ocorrência de descarte irregular de resíduos.
                </p>
                <p style={{ textAlign: "justify" }}>
                  • Regularizar a coleta e o tratamento de esgoto no trecho de
                  canalização do córrego Cassaquera, contribuindo para despoluir
                  o curso d'água, preservar o meio ambiente e proporcionar mais
                  qualidade de vida.
                </p>
                <p style={{ textAlign: "justify" }}>
                  • Melhorar a mobilidade urbana de veículos e pedestres.
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>Arborização da região</strong>:
                </p>
                <p style={{ textAlign: "justify" }}>
                  Como medida de compensação e para compor o projeto
                  paisagístico, a região ganhou o plantio de cerca de 700
                  árvores frutíferas e florísticas, além de arbustos e diversas
                  espécies de plantas e vegetações. Além das avenidas Giovanni
                  Battista Pirelli e Professor Luiz Ignácio de Anhaia Mello, os
                  bairros Vila Homero Thon, Jardim Marek, Vila Guarani, Vila
                  Progresso, Vila Guaraciaba, Centreville e Parque Gerassi
                  também foram arborizadas.
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>Equipamentos públicos</strong>:
                </p>
                <p style={{ textAlign: "justify" }}>
                  A Prefeitura de Santo André também implantou no local um
                  espaço para a prática de atividades físicas e um parquinho,
                  beneficiando diretamente moradores dos núcleos Homero Thon e
                  Pedro Américo, que careciam de áreas de lazer. Durante o
                  evento de entrega do Complexo Viário Cassaquera, a
                  administração anunciou ainda a construção da Creche Vila
                  Guarani, que será instalada no campo do Guarani. A obra deve
                  começar no primeiro semestre de 2022, com recursos próprios da
                  Prefeitura e investimento de R$ 7 milhões. A estimativa é de
                  que o equipamento possua 350 vagas.
                  <div>
                    <ImgSection>
                      <div className="imageAbout">
                        <img src={lazer1} alt="Semasa" />
                      </div>
                    </ImgSection>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <ImgSection>
                      <div className="imageAbout">
                        <img src={lazer2} alt="Semasa" />
                      </div>
                    </ImgSection>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <ImgSection>
                      <div className="imageAbout">
                        <img src={creche2} alt="Semasa" />
                      </div>
                    </ImgSection>
                    <div style={{ marginTop: "20px" }}>
                      <ImgSection>
                        <div className="imageAbout">
                          <img src={creche1} alt="Semasa" />
                        </div>
                      </ImgSection>
                    </div>
                  </div>
                </p>
              </TextSection>
            </Center>
          </Container>
          <Container style={{ marginTop: -200 }}>
            <Center>
              <AlbumPhotos
                pictures={construction.work_pictures}
                videos={construction.work_videos}
              />
            </Center>
          </Container>
          <Container>
            <Center>
              <TitleSection className="text-center">
                <strong>Documentos</strong> das obras
              </TitleSection>
              <DocumentsListContainer>
                <div className="Grid">
                  <div className="column">
                    <Doc>
                      <span>
                        <FiFileText />
                      </span>
                      <p className="p">
                        <a
                          href="/documentos/Licenca_de_operacao_Lara.pdf"
                          target="_blank"
                        >
                          Licenca de Operação
                        </a>
                        <a
                          href="/documentos/Licenca_de_operacao_Lara.pdf"
                          download
                        >
                          <FiDownload />
                        </a>
                      </p>
                    </Doc>

                    <Doc>
                      <span>
                        <FiFileText />
                      </span>
                      <p className="p">
                        <a
                          href="/documentos/Licenca_de_operaçãot_terra_forte.pdf"
                          target="_blank"
                        >
                          Licenca Terra Forte
                        </a>
                        <a
                          href="/documentos/Licenca_de_operaçãot_terra_forte.pdf"
                          download
                        >
                          <FiDownload />
                        </a>
                      </p>
                    </Doc>
                  </div>
                  <div className="column">
                    <Doc>
                      <span>
                        <FiFileText />
                      </span>
                      <p className="p">
                        <a
                          href="/documentos/Licenca_para_uso_de_terra_proveniente_de_jazida.pdf"
                          target="_blank"
                        >
                          Licenca Proveniente Jazida
                        </a>
                        <a
                          href="/documentos/Licenca_para_uso_de_terra_proveniente_de_jazida.pdf"
                          download
                        >
                          <FiDownload />
                        </a>
                      </p>
                    </Doc>

                    <Doc>
                      <span>
                        <FiFileText />
                      </span>
                      <p className="p">
                        <a
                          href="/documentos/Outorga_do_DAEE.pdf"
                          target="_blank"
                        >
                          Outorga do DAEE
                        </a>
                        <a href="/documentos/Outorga_do_DAEE.pd" download>
                          <FiDownload />
                        </a>
                      </p>
                    </Doc>
                  </div>
                  <div className="column">
                    <Doc>
                      <span>
                        <FiFileText />
                      </span>
                      <p className="p">
                        <a
                          href="/documentos/salvaguardas_ambientais_e_sociais.pdf"
                          target="_blank"
                        >
                          Ambientais e Sociais
                        </a>
                        <a
                          href="/documentos/salvaguardas_ambientais_e_sociais.pdf"
                          download
                        >
                          <FiDownload />
                        </a>
                      </p>
                    </Doc>

                    <Doc>
                      <span>
                        <FiFileText />
                      </span>
                      <p className="p">
                        <a
                          href="/documentos/CASSAQUERA_COMUNICAÇÃO-Model.pdf"
                          target="_blank"
                        >
                          Desenho do Projeto
                        </a>
                        <a
                          href="/documentos/CASSAQUERA_COMUNICAÇÃO-Model.pdf"
                          download
                        >
                          <FiDownload />
                        </a>
                      </p>
                    </Doc>
                  </div>
                </div>
              </DocumentsListContainer>
            </Center>
          </Container>
          <SlideMacro>
            {data.map((imagem) => (
              <div className="contentSlide">
                <div className="image-flip">
                  <div className="mainflip">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body">
                          <img
                            src={`${imagem.image}`}
                            alt=""
                            width={360}
                            height={300}
                            onClick={() => handleModal(imagem.id)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-text">{imagem.desc}</p>
                          <div className="icone">
                            <FiEye
                              size={24}
                              onClick={() => handleModal(imagem.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </SlideMacro>
          {/* <Modal open={open}>
          <BoxModal>
            <BtnFecharModal onClick={handleClose}>
              <FiXCircle fontSize={31} color={{color: '#fff'}} />
            </BtnFecharModal>

            {selected && (
              <img
                src={`/imagens/MacroSlide/${selected.image}`} width="500" height="500"
                alt=""
              />
            )}
          </BoxModal>
        </Modal> */}

          {open === true && (
            <Container style={{ marginTop: 10 }}>
              <ModalSlide toggleModal={handleClose} currentSlide={current}>
                {data.map((imagem) => (
                  <>
                    <img
                      src={`${imagem.image}`}
                      alt=""
                      className="image-modal"
                    />
                    <p className="imagemDesc">{imagem.desc}</p>
                  </>
                ))}
              </ModalSlide>
            </Container>
          )}
          <Center>
            <TitleSection className="text-center">
              Depoimentos <strong>de Moradores</strong>
            </TitleSection>
            <Carousel
              arrows={false}
              autoPlaySpeed={0}
              centerMode={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 4000,
                    min: 1027,
                  },
                  items: 2,
                  partialVisibilityGutter: 0,
                },
                mobile: {
                  breakpoint: {
                    max: 768,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              swipeable
              draggable
              minimumTouchDrag={80}
              focusOnSelect={false}
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              renderButtonGroupOutside={true}
              renderDotsOutside={true}
            >
              {depoimentos.map((item) => (
                <Card>
                  <Image src={item.image} alt="image" />
                  <DepoimentoInfo>
                    <Depoimento>{item.text}</Depoimento>
                    <Name>{item.nome},</Name>
                    <Info>{item.info}.</Info>
                  </DepoimentoInfo>
                  <IconDiv>
                    <ImQuotesRight color="#2f80ed" size={60} />
                  </IconDiv>
                </Card>
              ))}
            </Carousel>
          </Center>
          <Container>
            <Center>
              <MapComponent markers={markersLocation} />
            </Center>
          </Container>
        </>
      )}

      {!construction && (
        <div style={{ width: "100%", height: 100 }}>
          <h1 style={{ textAlign: "center" }}>Obra não encontrada!</h1>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Obra;
