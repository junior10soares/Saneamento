import React from "react";
import {Link} from "react-router-dom";
import { Card, Title, Badge, LinkTitle } from "./style";
import ReactHtmlParser from "react-html-parser";

export function CardArticle({ content, full }) {
  const maxLength = 130;
  const { description } = content || {};
  let trimmed = description?.substr(0, maxLength);

  trimmed =
    trimmed?.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" "))) +
    "...";

    const subString = (string, indexStart, indexEnd) => {   
     return string.substring(indexStart, indexEnd) + "..."
         
    }
    function removedAccent(text) {
     const slug = text?.normalize("NFD").replace(/[^a-zA-Zs]/g, "-");
      return slug?.toLowerCase();
    }		
    

  return (
    <>
      <Card full={full} >
        <Badge>{content?.news_categories.name}</Badge>
          <Title onClick={() => {window.open(`/noticias/${removedAccent(content?.title)}/${content?.uuid}`)}}>
            {content?.title}
          </Title>
      </Card>
    </>
  );
}
