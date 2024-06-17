import React, { Fragment, useState, useEffect, useCallback } from "react";
import request from "../../services/api";
import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Center,
  Content,
  Container,
  Row,
  LinkEstatico,
  TitleObras,
  Title,
} from "./styles";
import "./styles.css";
import { baseURL } from "../../services/api";

import obras from "../../assets/public/imagens/Home/obras.jpg";

export function ObraImageLink2({ category }) {
  const [works, setWorks] = useState([]);
  const fetchWork = useCallback(async () => {
    try {
      const constructionsResponse = await request({
        url: `work`,
        params: category
          ? {
              "filters[][work_category.uuid@equal]": category,
            }
          : {},
      });
      setWorks(constructionsResponse.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchWork();
  }, [fetchWork]);

  return (
    <Content>
      <TitleObras>
        Obras <strong>finalizadas</strong>
      </TitleObras>
      <Container>
        <div>
          {works?.map((work) => (
            <Link
              className="link-style"
              key={work.uuid}
              to={`/obra/${work.uuid}`}
            >
              <Image
                src={baseURL + "/" + work.img}
                alt={work.name}
                title={work.name}
              />
              <Title>{work.name}</Title>
            </Link>
          ))}
        </div>
        <div>
          <LinkEstatico href="/residuos">
            <Image src={obras} alt="Banner Sanear" title="Resíduos"></Image>
            <Title>12 Estações de Coleta</Title>
          </LinkEstatico>
        </div>
      </Container>
    </Content>
  );
}
