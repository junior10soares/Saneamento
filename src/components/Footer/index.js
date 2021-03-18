import React from "react";
import { Container, Center, Row, Column, SocialIcons, Address } from "./styles";
import facebook from '../../assets/public/facebook.svg';
import instagram from '../../assets/public/instagram.svg';
import youtube from '../../assets/public/youtube.svg';
import logo from '../../assets/public/01.png';
import caf from '../../assets/public/CAF.svg';

export function Footer() {
  return (
    <>
      <Container color="#333333" full>
        <Center>
          <Row center>
            <Column grid="3" style={{marginRight: 10}}>
              <img className="logo" src={logo} width="110%" />
            </Column>
            <Column grid="3">
              <img className="logo" src={caf} width="100%" />
            </Column>
          </Row>
          <Address>
            Endereço: Avenida José Caballero, 143, Vila Bastos – Santo André            
          </Address>
          <SocialIcons>
            <a href="https://www.facebook.com/sanearsantoandre" target="_blank">
              <img src={facebook} />
            </a>
            <a href="https://www.instagram.com/sanearsantoandre/" target="_blank">
              <img src={instagram} />
            </a>
            <a href="https://www.youtube.com/watch?v=G0huxQ5uJtQ&list=PLFYkOIN5HQyZcEpZWIt41vM55YH2yCLQ5" target="_blank">
              <img src={youtube} />
            </a>
          </SocialIcons>
        </Center>
      </Container>
    </>
  );
}
