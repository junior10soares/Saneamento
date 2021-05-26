import React, {useCallback, useEffect, useState} from 'react';
import { Header } from "../../../components/Header";
import {
  Container,
  TitleSection,
} from "./styles";
import { Footer } from "../../../components/Footer";
import { CardArticle } from "../../../components/CardArticle";
import api from "../../../services/api";


const Notícias = () => {
  const [news, setNews] = useState([]);
  const noticias = useCallback(() => {
    api.get('news?order[id]=desc&paginate=false').then(({ data }) => setNews(data.data));
   }, []);

   useEffect(() => {
    noticias();
   }, [noticias]);
  return (
    <>
      <Header />
      <Container>
      <div className="containerNoticias">
        <div className="contentNoticias">
          <div className="boxNoticias">
          <TitleSection center>
                Lista de <strong>notícias</strong>
              </TitleSection>
              {news.map((noticia) => (
                <CardArticle full="small"  content={noticia} />
              ))}
          </div>
        </div>
      </div>
      </Container>
      <Footer />
    </>
  );
}

export default Notícias;


