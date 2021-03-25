import React, {useState, useCallback, useMemo, useEffect} from 'react';
import  {useParams} from 'react-router-dom';
import api from "../../../services/api";
import ReactHtmlParser from "react-html-parser";
import { Header } from "../../../components/Header";
import {Line} from 'rc-progress';
import {FiFileText, FiHeadphones, FiXCircle, FiStar} from 'react-icons/fi'
import { Center, Container, Row, TitleSection, BannerPage, HeaderPage, Plantao, Projeto, SlideMacro, TextSection, WhatsappButton, Grafic } from './styles';
import { Footer } from "../../../components/Footer";
import { AlbumPhotos } from "../../../components/AlbumPhotos";
import { StepsConstruction } from "../../../components/StepsConstruction";
import MapComponent from "../../../components/MapComponent";
import { DocumentsList } from "../../../components/DocumentsList";
import { ModalSlide } from "../../../components/ModalSlide";
import img1 from '../../../assets/public/imagens/MacroSlide/img1.jpg';
import img2 from '../../../assets/public/imagens/MacroSlide/img2.jpg';
import img3 from '../../../assets/public/imagens/MacroSlide/img3.jpg';
import img4 from '../../../assets/public/imagens/MacroSlide/img4.jpg';
import img5 from '../../../assets/public/imagens/MacroSlide/img5.jpg';
import img6 from '../../../assets/public/imagens/MacroSlide/img6.jpg';
import img7 from '../../../assets/public/imagens/MacroSlide/img7.jpg';
import img8 from '../../../assets/public/imagens/MacroSlide/img8.jpg';
import img9 from '../../../assets/public/imagens/MacroSlide/img9.jpg';
import GraficCircle from '../../../components/GraficCircle';


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
  }
};

const data =  [
  {
      "id": 0,
      "image": img1
  },
  {
      "id": 1,
      "image": img2
  },
  {
      "id": 2,
      "image": img3
  },
  {
      "id": 3,
      "image": img4
  },
  {
      "id": 4,
      "image": img5
  },
  {
      "id": 5,
      "image": img6
  },
  {
      "id": 6,
      "image": img7
  },
  {
      "id": 7,
      "image": img8
  },
  {
      "id": 8,
      "image": img9
  }
]


const Obra = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState();
  const [construction, setConstruction] = useState([]);
  const [workPhase, setWorkPhase] = useState([]);

  const constructionResponse = useCallback(() => {
    api.get(`work/${id}`).then(({ data }) => setConstruction(data.data));
   }, [id])

   const workPahseResponse = useCallback(() => {
    api.get(`work-phase`, {
      data: {
        work_uuid: id
      }
    }).then(({ data }) => setWorkPhase(data.data));
   }, [id])

   useEffect(() => {
    constructionResponse();
    workPahseResponse()
   }, [constructionResponse, workPahseResponse]);

  const markers = useMemo(() => {
    const marks = construction?.work_coordinates?.map(({ lat, long, name }) => ({
      lat,
      lng: long,
      name,
    }));

    return marks;
  }, [construction]);


  function handleModal(id) {
    setCurrent(id)
    setOpen(true);
  }

 function handleClose() {
    setOpen(false);
  }

  console.log('workPhase', workPhase)

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
            <div className="desktopStepBar" style={{ width: "100%"}}>
              <div className="groupButtons">
                <div className="buttonAlign">
                  <Projeto style={{ minWidth: 200}} href="/projeto-socioambiental" target="_blank">
                    <FiStar />Trabalho Socioambiental
                  </Projeto>
                </div>
                <div className="buttonAlign">
                  <Plantao href="/plantao-social" target="_blank">
                    <FiHeadphones />Plantão Social
                  </Plantao>
                </div>

                {!!construction?.whatsapp_active && (
                  <div className="buttonAlign">
                    <WhatsappButton href={construction?.whatsapp} target="_blank">
                      Nosso Whatsapp
                    </WhatsappButton>
                  </div>
                )}
              </div>
            </div>
      

            <Center>
              <HeaderPage style={{marginBottom: 60}}>
                <TitleSection center>
                  Detalhe das <strong>Obras</strong>
                </TitleSection>
              </HeaderPage>
              <div className="responsiveStepBar">
                <div className="groupButtonsResponsive">
                  <div className="buttonAlignResponsive">
                    <Projeto style={{ minWidth: 200}}>
                      <FiStar />Trabalho Socioambiental
                    </Projeto>
                  </div>
                  <div className="buttonAlignResponsive">
                    <Plantao style={{ minWidth: 200}} href="/plantao-social" target="_blank">
                      <FiHeadphones />Plantão Social
                    </Plantao>
                  </div>

                  {!!construction.whatsapp_active && (
                    <div className="buttonAlignResponsive">
                      <WhatsappButton style={{ minWidth: 200}} href={construction?.whatsapp} target="_blank">
                        Nosso Whatsapp
                      </WhatsappButton>
                    </div>
                  )}
                </div>
              </div>
              <TextSection style={{ marginTop: 110}} columns="2">
                <p>{ReactHtmlParser(construction?.description)}</p>
              </TextSection>
            </Center>
          </Container>
          <Container>
            <Center>
              <TitleSection className="text-center">
                Fases da <strong>obras</strong>
              </TitleSection>      
              <div className="desktopStepBar">
                <StepsConstruction phase={construction?.work_fase} />
              </div>
              <div className="responsiveStepBar">
                <Line style={{ position: "absolute", zIndex: -1}} percent={construction?.work_fase + "0"} strokeWidth="7" trailWidth="7" strokeColor="#27AE60" />
                  <strong style={{ zIndex: 1, marginLeft: "50%", fontSize: 17, paddingTop: 5 }}>{construction?.work_fase + '0%'}</strong>
              </div>
            </Center>
          </Container>

          <Container>
            <Center>
              <TitleSection className="text-center">
                Fases da <strong>obras</strong>
              </TitleSection>
          <Grafic>
          <GraficCircle data={workPhase} />
          </Grafic> 
            </Center>
          </Container>      




          <Container>
            <Center>
              <TitleSection className="text-center">
                Desenho do <strong>projeto</strong>
              </TitleSection>
            </Center>

            <DocumentsList>
                <div className="Grid">
                    <div className="column1">
                        <span><FiFileText /><a href="/documentos/CASSAQUERA_COMUNICAÇÃO-Model.pdf" target="_blank">Desenho do Projeto</a></span>
                     </div>
                </div>

              </DocumentsList>
          </Container>
          <Container>
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
                Documentos das <strong>obras</strong>
              </TitleSection>
              <DocumentsList>
                <div className="Grid">
                    <div className="column1">
                        <span><FiFileText /><a href="/documentos/Licenca_de_operacao_Lara.pdf" target="_blank">Licenca de Operacao Lara</a></span>
                        <span><FiFileText /><a href="/documentos/Licenca_de_operaçãot_terra_forte.pdf" target="_blank">Licenca de Operação Terra Forte</a></span>
                        <span><FiFileText /><a href="/documentos/Licenca_para_uso_de_terra_proveniente_de_jazida.pdf" target="_blank">Licenca para Uso de Terra Proveniente de Jazida</a></span>
                     </div>

                     <div className="column2">
                        <span><FiFileText /><a href="/documentos/Outorga_do_DAEE.pdf" target="_blank">Outorga do DAEE</a></span>
                        <span><FiFileText /><a href="/documentos/salvaguardas_ambientais_e_sociais.pdf" target="_blank">Salvaguardas Ambientais e Sociais</a></span>
                     </div>
                </div>

              </DocumentsList>
            </Center>
          </Container>
          <SlideMacro>
            {data.map((imagem) => (
              <div className="contentSlide" key={imagem.id}>
                <div className="contentImage">
                <img src={`${imagem.image}`} alt="" width={360} height={300}
                onClick={() => handleModal(imagem.id)}
                />
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
          <Container style={{ marginTop: 10}}>
          <ModalSlide toggleModal={handleClose} currentSlide={current}>
            {data.map((imagem) => (
                <img src={`${imagem.image}`} alt="" className="image-modal"
                />
              ))}
          </ModalSlide>
          </Container>
        )}
          <Container>
            <Center>
              <MapComponent markers={markers} />
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
}

export default Obra
