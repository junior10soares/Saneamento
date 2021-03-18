import React , { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { Header } from "../../../components/Header";
import {Container,Center, Row, BannerPage, TextSection, TitleSection, Column} from './styles';
import { Footer } from "../../../components/Footer";
import { CardArticle } from "../../../components/CardArticle";
import  SocialShare  from "../../../components/SocialShare";
import { Link } from "react-router-dom";
import api from '../../../services/api';

/* export async function getServerSideProps(context) {
  const { params } = context;
  const { pid: id } = params;

  const response = await request({ url: `news/${id}` });
  const loadedNew = response?.data.data || null;

  const allNews = await request({ url: "news" });

  return {
    props: {
      loadedNew,
      allNews: allNews.data.data,
    },
  };
} */

const Noticia = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState('')
  const baseUrl = "https://api-sanear.cityconnect.com.br";

   const newIdRequest = useCallback(() => {
    api.get(`news/${id}`).then(({ data }) => setArticle(data?.data));
   }, [id]);

   const newsRequest = useCallback(() => {
    api.get('news').then(({ data }) => setNews(data?.data));
   }, []);

   useEffect(() => {
    newsRequest();
    newIdRequest();
   }, [newIdRequest, newsRequest]);



   console.log('newss',article.title);
   console.log('newss_article',article);
  return (
    <>
    <Header />
    <BannerPage image={baseUrl + "/" + article.img} />
    <Container>
      <Center>
        <Row>
          <Column grid="8">
            <SocialShare  data={article}/>

            <TitleSection>{article?.title}</TitleSection>
            <TextSection>
              <p>{ReactHtmlParser(article?.description)}</p>
            </TextSection>
          </Column>
          <Column grid="4">
            <TitleSection>
              Outras <strong>notícias</strong>
            </TitleSection>

            {news && (
              <>
                <Link to={`/noticias/${news[0]?.uuid}`}>
                  <CardArticle full="column" content={news[0]} />
                </Link>
                <Link to={`/noticias/${news[1]?.uuid}`}>
                  <CardArticle full="column" content={news[1]} />
                </Link>
                <Link to={`/noticias/${news[2]?.uuid}`}>
                  <CardArticle full="column" content={news[2]} />
                </Link>
              </>
            )}
          </Column>
        </Row>
      </Center>
    </Container>
    <Footer />
    </>
  );
}

export default Noticia
