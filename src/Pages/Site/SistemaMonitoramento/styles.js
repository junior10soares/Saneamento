import styled from "styled-components";
import theme from "../../../GlobalStyle/theme";

export const Container = styled.div`
  max-width: ${(props) => (props.full ? "100%" : theme.center + "px")};
  margin: 0 auto;
  display: flex;
  padding: ${theme.spacing * 8}px 16px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  background: ${(props) => props.color};
  box-sizing: border-box;

  .groupButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .groupButtonsResponsive {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-row-gap: 10px;
    width: 100%;
    margin-top: -15px;
  }

  .buttonAlign {
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
    transform: translateY(130px);
    position: relative;
    z-index: 41;
  }

  .buttonWhatas a {
    height: 60px;
    padding: 0 ${theme.spacing * 4}px;
    background: #27ae60;
    font-size: 14px;
    line-height: 20px;
    min-width: 160px;
    cursor: pointer;
    color: #ffffff;
    display: inline-block;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    text-decoration: none;
  }

  .iconsGrid .row {
    display: flex;
    margin: auto;
    justify-content: center;
  }

  .iconsGrid {
    display: flex;
    margin: auto;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    padding: ${theme.spacing * 8}px 48px;
    max-width: 706px;
  }

  @media (max-width: 768px) {
    width: 100%;
    #firstParagraph {
      margin-top: 40px !important;
    }
  }
`;

export const Center = styled.div`
  max-width: ${theme.center}px;
  margin: 20px auto;
  display: block;
  width: 100%;
  position: relative;
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  margin: 0 -${theme.spacing * 2}px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const TitleSection = styled.h1`
  width: 100%;
  margin: 0 0 ${theme.spacing}px;
  color: ${(props) => (props.light ? "#ffffff" : theme.textColor)};
  display: block;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  text-align: ${(props) => (props.center ? "center" : "left")};
  @media (max-width: 768px) {
    font-size: 30px;
    margin: ${theme.spacing * 2}px 0px -60px 1px;
  }

  @media (max-width: 320px) {
    padding-left: 0px;
  }
`;

export const BannerPage = styled.div`
  background-repeat: no-repeat;
  background-position: 10% 35%;
  background-position-x: center;
  background-size: cover;
  background-attachment: scroll;
  height: 400px;
  background-color: black;
  background-image: url(${(props) => props.image});
`;

export const HeaderPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing * 8}px;
`;

export const TextSection = styled.div`
  margin: ${theme.spacing * 3}px 0;
  color: ${theme.textColor};
  font-size: 21px;
  line-height: 1.5;
  font-weight: 300;
`;

export const EstudoCatadores = styled.a`
  height: 60px;
  padding: 0 6px;
  background: #1182c6;
  font-size: 14px;
  line-height: 20px;
  min-width: 160px;
  cursor: pointer;
  color: #ffffff;
  display: inline-block;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-decoration: none;

  & svg {
    font-size: 25px;
    margin-right: 4px;
  }

  .icon-estudo {
    margin: 2px 10px 0px 0px;
    border: 1px solid;
    padding: 8px;
    border-radius: 15px;
  }
`;
export const ProjetoTecnico = styled.a`
  height: 60px;
  padding: 0 6px;
  background: #11c66a;
  font-size: 14px;
  line-height: 20px;
  min-width: 160px;
  cursor: pointer;
  color: #ffffff;
  display: inline-block;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-decoration: none;

  & svg {
    font-size: 25px;
    margin-right: 4px;
  }
  .icon-projeto {
    margin: 2px 10px 0px 10px;
    border: 1px solid;
    padding: 8px;
    border-radius: 15px;
  }
`;
export const LivroCatadores = styled.a`
  height: 60px;
  padding: 0 6px;
  background: #006400;
  font-size: 14px;
  line-height: 20px;
  min-width: 160px;
  cursor: pointer;
  color: #ffffff;
  display: inline-block;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-decoration: none;

  & svg {
    font-size: 25px;
    margin-right: 4px;
  }

  .icon-livro {
    margin: 2px 10px 0px 5px;
    border: 1px solid;
    padding: 8px;
    border-radius: 15px;
  }
`;

export const EstacaoLink = styled.a`
  height: 60px;
  padding: 0 10px;
  background: #11c66a;
  font-size: 20px;
  line-height: 20px;
  min-width: 160px;
  cursor: pointer;
  color: #ffffff;
  display: inline-block;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-decoration: none;

  & svg {
    font-size: 25px;
    margin-right: 4px;
  }

  .icon-estacao {
    margin: 2px 10px 0px 5px;
  }
`;
export const BueirosLink = styled.a`
  height: 60px;
  padding: 0 10px;
  background: #1182c6;
  font-size: 20px;
  line-height: 20px;
  min-width: 160px;
  cursor: pointer;
  color: #ffffff;
  display: inline-block;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-decoration: none;

  & svg {
    font-size: 25px;
    margin-right: 4px;
  }

  .icon-estacao {
    margin: 2px 10px 0px 5px;
  }
`;

export const FluvioLink = styled.a`
  height: 60px;
  padding: 0 10px;
  background: #1182c6;
  font-size: 20px;
  line-height: 20px;
  min-width: 160px;
  cursor: pointer;
  color: #ffffff;
  display: inline-block;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  text-decoration: none;

  & svg {
    font-size: 25px;
    margin-right: 4px;
  }

  .icon-estacao {
    margin: 2px 10px 0px 5px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  border: solid 1px;
  border-radius: 10px;
  padding: 30px;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    border: solid 1px;
    border-radius: 10px;
    padding: 30px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    border: solid 1px;
    border-radius: 10px;
    padding: 30px;
  }
  @media (max-width: 380px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    border: solid 1px;
    border-radius: 10px;
    padding: 30px;
  }
`;

export const IconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
`;
