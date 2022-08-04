import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { CardImageLink } from "../../../components/CardImageLink";
import { FullBanner } from "../../../components/FullBanner";
import { Header } from "../../../components/Header";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import CarouselNoticias from "react-multi-carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import api from "../../../services/api";
import {
  ContainerHome,
  ContainerCardHome,
  CardBanner,
  Container,
  Row,
  Column,
  TextHome,
  TitleHome,
  ButtonLink,
  Center,
  InstagramFrame,
  CenterVideo,
  TitleVideo,
  TitleObras,
} from "./styles";
import macrodrenagem from "../../../assets/public/imagens/Home/macrodrenagem.jpg";
import obras from "../../../assets/public/imagens/Home/obras.jpg";
import residuos from "../../../assets/public/imagens/Home/residuos_solidos.jpg";
import monitoramento from "../../../assets/public/imagens/Home/monitoramento.jpg";
import sobre from "../../../assets/public/imagens/Home/sobre.jpg";
import { ConstructionFilters } from "../../../components/ConstructionFilters";
import { VideoItem } from "../../../components/VideoItem";
import { CardArticle } from "../../../components/CardArticle";
import { Footer } from "../../../components/Footer";
import { ContactArea } from "../../../components/ContactArea";
import { ObraImageLink } from "../../../components/ObraImageLink";
import Loader from "../../../components/Loader";
import CardVideo from "../../../components/CardVideos";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { Directions } from "@material-ui/icons";

const Home = () => {
  const [swiper, updateSwiper] = useState(null);
  const [banners, setBanner] = useState([]);
  const [work, setWork] = useState([]);
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  const [videos, setVideo] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [counterNumbersCarrousel, setNumbersCarrousel] = useState(3);

  const params = {
    swiper,
    slidesPerView: 3,
    spaceBetween: 30,
    initialSlide: 1,
    Center: true,
    draggable: true,
    simulateTouch: true,
    loopFillGroupWithBlank: true,
    freeMode: true,
    getSwiper: updateSwiper,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };

  const bannerRequest = useCallback(() => {
    api.get("banner?order[id]=desc").then(({ data }) => setBanner(data.data));
  }, []);

  const constructionsResponse = useCallback(() => {
    api.get("work?order[id]=desc").then(({ data }) => setWork(data.data));
  }, []);

  const categoriesResponse = useCallback(() => {
    api.get("work?order[id]=desc").then(({ data }) => setCategory(data.data));
  }, []);

  const locationsResponse = useCallback(() => {
    api.get("work-coordinate").then(({ data }) => setLocation(data.data));
  }, []);

  const videosResponse = useCallback(() => {
    api
      .get("video?order[id]=desc", {
        params: {
          paginate: false,
        },
      })
      .then(({ data }) => setVideo(data.data));
  }, []);

  const newsResponse = useCallback(() => {
    api
      .get("news?order[id]=desc&paginate=false")
      .then(({ data }) => setNews(data.data));
  }, []);

  useEffect(() => {
    bannerRequest();
    constructionsResponse();
    categoriesResponse();
    locationsResponse();
    videosResponse();
    newsResponse();
  }, [
    bannerRequest,
    categoriesResponse,
    constructionsResponse,
    locationsResponse,
    newsResponse,
    videosResponse,
  ]);

  const bannerImages = useMemo(() => {
    const images = banners?.map((banner) => banner.file);
    return images;
  }, [banners]);

  const renderWork = () => {
    if (loading) {
      return <Loader />;
    }

    if (!loading && !work.length) {
      return <Loader />;
    }

    return (
      <ConstructionFilters
        constructions={work}
        categories={category}
        locations={location}
      />
    );
  };

  const renderNews = () => {
    if (!loading && !news.length) {
      return <Loader />;
    }

    return news.map((item, index) => (
      <Link to={`/obra/${item.uuid}`}>
        <CardArticle full="slider" content={item} key={index} />
      </Link>
    ));
  };

  const renderVideos = () => {
    if (!loading && !videos.length) {
      return <Loader />;
    }

    return videos.map((item, index) => (
      <CardVideo content={item} key={index} />
    ));
  };

  window.fbAsyncInit = function () {
    window.FB.init({
      appId: "478490393450873",
      cookie: true,
      xfbml: true,
      version: "v10.0",
    });
  };

  // load facebook sdk script
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/pt_BR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");

  return (
    <>
      <Header />
      <CardBanner className="cardBanner">
      <FullBanner images={bannerImages} />
      </CardBanner>
      <ContainerCardHome column>
        <CardImageLink
          image={macrodrenagem}
          theme="ternary"
          link="/macrodrenagem"
        >
          <span>
            Obras de <strong>Macrodrenagem</strong>
          </span>
        </CardImageLink>
        <CardImageLink image={residuos} theme="primary" link="/residuos">
          <span>
            Gestão de <strong>Resíduos Sólidos</strong>
          </span>
        </CardImageLink>
        <CardImageLink
          image={monitoramento}
          theme="secondary"
          link="/sistemas-monitoramento"
        >
          <span>
            Sistema de <strong>Monitoramento de chuva</strong>
          </span>
        </CardImageLink>
      </ContainerCardHome>
      <Container>
        <Row>
          <Column grid="5">
            <img
              src={sobre}
              style={{ width: "100%" }}
              alt="Programa Sanear Santo André"
            />
          </Column>
          <Column grid="7">
            <TitleHome>
              <strong>Sobre o{"\u00A0"}programa</strong>
            </TitleHome>
            <TextHome>
              <p style={{ textAlign: "justify" }}>
                O Sanear Santo André (Saneasa) é um dos{" "}
                <strong>
                  maiores programas de saneamento, drenagem e infraestrutura
                </strong>{" "}
                urbana da história do município. As intervenções são executadas
                pela Prefeitura de Santo André, por meio da Secretaria de
                Manutenção e Serviços Urbanos, e pelo Semasa (Serviço Municipal
                de Saneamento Ambiental de Santo André), com financiamento de
                US$ 50 milhões pela CAF – Banco de Desenvolvimento da América
                Latina. Como contrapartida, o município investirá US$ 12,5
                milhões.
              </p>
              <div className="buttonContainer">
                <ButtonLink theme="primary" href="/sobre">
                  Saiba mais
                </ButtonLink>
              </div>
            </TextHome>
          </Column>
        </Row>
      </Container>
      <Container>
        <ObraImageLink></ObraImageLink>
      </Container>
      <Container>{renderWork()}</Container>
      <Container color="#E5E5E5" full>
        <Column grid="15">
          <TitleVideo center>
            Galeria de <strong> vídeos</strong>
          </TitleVideo>
          <Center>
            <Carousel
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              infinite
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1027,
                  },
                  items: 3,
                  partialVisibilityGutter: 40,
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
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
            >
              {renderVideos()}
            </Carousel>
          </Center>
        </Column>
      </Container>

      <ContainerHome>
        <TitleHome center padding>
          <strong>Notícias</strong>&nbsp;
        </TitleHome>
        <Center>
          <CarouselNoticias
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1027,
                },
                items: 3,
                partialVisibilityGutter: 40,
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
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {renderNews()}
          </CarouselNoticias>
        </Center>
      </ContainerHome>
      <Container>
        <Center>
          <Row center>
            <Column grid="6" className="text-center">
              <TitleHome left style={{ marginBottom: "24px" }}>
                <FiInstagram style={{ marginRight: "10px" }} />
                Instagram
              </TitleHome>
              <InstagramFrame
                src="https://cdn.lightwidget.com/widgets/725a90d3dbcc5049b0f84b89ef07b6aa.html"
                scrolling="no"
                allowtransparency="true"
                className="lightwidget-widget"
                allowFullScreen
              ></InstagramFrame>
            </Column>
            <Column grid="6" className="text-center">
              <TitleHome left style={{ marginBottom: "24px" }}>
                <FiFacebook style={{ marginRight: "10px" }} />
                Facebook
              </TitleHome>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/sanearsantoandre/"
                data-tabs="timeline"
                data-width="500"
                data-height="600"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/sanearsantoandre/"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/sanearsantoandre/">
                    Programa Sanear Santo André
                  </a>
                </blockquote>
              </div>
            </Column>
          </Row>
        </Center>
      </Container>
      <ContactArea />
      <Footer />
    </>
  );
};

export default Home;
