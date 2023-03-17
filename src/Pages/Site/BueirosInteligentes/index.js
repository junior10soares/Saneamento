// import { useCallback, useEffect, useState } from "react";
import { Header } from "../../../components/Header";
import React from "react";
import _ from "lodash";
import {
  Container,
  Center,
  TitleSection,
  BannerPage,
  HeaderPage,
  TextSection,
  ImagemBueiros,
  ImagemModal,
} from "./styles";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Footer } from "../../../components/Footer";
import monitoramento from "../../../assets/public/imagens/monitoramento/monitoramento.jpeg";
import bueiros from "../../../assets/public/imagens/Bueiros/bairros.png";
import { makeStyles, Modal, Fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundcolor: "red",
    },
  },
  img: {
    outline: "none",
  },
}));

const BueirosInteligentes = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header />
      <BannerPage image={monitoramento} />{" "}
      <Container>
        <Center>
          <HeaderPage style={{ marginBottom: 10 }}>
            <TitleSection center>
              <strong>Bueiros Inteligentes</strong>
            </TitleSection>{" "}
          </HeaderPage>{" "}
        </Center>{" "}
        <Center>
          <TextSection columns="2">
            <p style={{ textAlign: "justify" }}>
              Para reforçar{" "}
              <strong>
                ações preventivas e o combate a enchentes e alagamentos,
              </strong>{" "}
              Santo André iniciou a instalação de{" "}
              <strong>bocas de lobo inteligentes,</strong> popularmente
              conhecidas como bueiros.
            </p>
            <p style={{ textAlign: "justify" }}>
              Os novos equipamentos de drenagem, inéditos não só no município
              mas no ABC Paulista, possuem <strong>cesto com sensor</strong>,
              que emite um sinal de alerta quando os dispositivos estão cheios
              de resíduos. As bocas de lobo inteligentes têm como objetivos:
            </p>
            <p style={{ textAlign: "justify" }}>
              • Fortalecer ações preventivas e corretivas para que os resíduos
              não obstruam o escoamento da água, minimizando a ocorrência de
              enchentes e alagamentos.
            </p>
            <p style={{ textAlign: "justify" }}>
              • Impedir que os resíduos tenham como destino córregos e rios,
              contribuindo para a{" "}
              <strong>despoluição e preservação do meio ambiente.</strong>
            </p>
            <p style={{ textAlign: "justify" }}>
              • Otimizar o processo de limpeza de bueiros, direcionando os
              profissionais para locais onde realmente há necessidade de
              atuação, o que agrega vantagens em relação à eficiência
              operacional, além de economia de recursos públicos.
            </p>{" "}
            <p style={{ textAlign: "justify" }}>
              A primeira instalação foi feita em janeiro de 2023, no bairro Vila
              Vitória. Ao todo, vão ser implantados 561 equipamentos do tipo,
              com investimento de mais de R$ 1 milhão.
            </p>
            <p style={{ textAlign: "justify" }}>
              Na imagem abaixo estão os bairros beneficiados, bem como o número
              de equipamentos que serão instalados.
            </p>
            <ImagemBueiros>
              <div>
                <div>
                  <div className="imageAbout" onClick={handleOpen}>
                    <img
                      src={bueiros}
                      alt="Localização dos Bueiros Inteligentes"
                    />
                  </div>
                  <Modal
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                  >
                    <Fade in={open} timeout={500} className={classes.img}>
                      <img
                        src={bueiros}
                        alt="Localização dos Bueiros Inteligentes"
                        style={{ maxHeight: "99%", maxWidth: "99%" }}
                      />
                    </Fade>
                  </Modal>
                </div>
              </div>
            </ImagemBueiros>
          </TextSection>
        </Center>
      </Container>{" "}
      <Footer />
    </>
  );
};

export default BueirosInteligentes;
