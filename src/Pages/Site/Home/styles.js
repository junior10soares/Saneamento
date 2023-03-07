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

  .img-container {
    @media (max-width: 768px) {
      display: Flex;
      flex-direction: column;
      min-width: 56vh;
    }
    @media screen and (max-width: 410px) {
      display: Flex;
      flex-direction: column;
      min-width: 46vh;
    }
  }

  .groupButtons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
  }

  .groupButtonsResponsive {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

  .buttonAlignResponsive {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 41;
    margin-bottom: 10px;
  }

  .imagemObra {
    display: flex;

    @media (max-width: 768px) {
      display: grid;
      justify-content: center;
    }
    @media (max-width: 500px) {
      display: grid;
      justify-content: center;
    }
    @media (max-width: 1180px) {
      display: grid;
      justify-content: center;
    }
  }

  .buttonWhatas {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
    transform: translateY(125px);
    position: relative;
    z-index: 41;
    a {
      height: 60px;
      padding: 0 ${theme.spacing * 4}px;
      background: #27ae60;
      font-size: 14px;
      line-height: 60px;
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
      &:before {
        content: "";
        width: 25px;
        height: 25px;
        background: url(/whatsapp-ico.svg);
        background-size: cover;
        margin: 0 4px;
      }
    }
  }
`;

export const ContainerCardHome = styled.div`
  max-width: ${theme.center}px;
  margin: -60px auto 0;
  display: flex;
  position: relative;
  z-index: 10;
  @media (max-width: 768px) {
    display: Flex;
    flex-direction: column;
  }
  @media screen and (max-width: 410px) {
    display: Flex;
    flex-direction: column;
  }
`;

export const CardBanner = styled.div`
  .kpQrA-d {
    @media (max-width: 768px) {
      display: Flex;
    }
    @media screen and (max-width: 410px) {
      height: 35vh;
      display: Flex;
    }
  }
`;

export const InputBox = styled.input`
  width: 100%;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  height: 65px;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
  background: #ffffff;
  font-family: "Roboto", sans-serif;
  padding: ${theme.spacing * 2}px;
`;

export const Column = styled.div`
  padding: 0 ${theme.spacing * 2}px;
  box-sizing: border-box;
  width: ${(props) => (props.grid ? (props.grid / 12) * 100 : "8:33")}%;

  @media (max-width: 768px) {
    display: flex;
    padding: 0px 0px 0px 16px;
    width: 100vh;
    position: relative;
    flex-direction: column;
  }
  @media screen and (max-width: 410px) {
    display: flex;
    padding: 0px 0px 0px 9px;
    width: 100vh;
    position: relative;
    flex-direction: column;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  margin: 0 -${theme.spacing * 2}px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
`;

export const Center = styled.div`
  max-width: ${theme.center}px;
  margin: 0 auto;
  display: block;
  width: 100%;
  position: relative;
  .carousel-videos {
    @media (min-width: 300px) and (max-width: 400px) {
      width: 35vh;
    }
    @media (min-width: 401px) and (max-width: 500px) {
      width: 45vh;
    }
    @media (min-width: 501px) and (max-width: 768px) {
      width: 65vh;
    }
    @media (min-width: 769px) and (max-width: 1180px) {
      width: 110vh;
    }
  }
`;

export const CenterVideo = styled.div`
  max-width: ${theme.center}px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  position: relative;
`;

export const Video = styled.div`
  width: 1154px;
  height: 35vh;
`;

export const Button = styled.button`
  border-radius: 6px;
  height: 55px;
  min-width: 180px;
  height: ${(props) => (props.size ? props.size : "")}px;
  cursor: pointer;
  color: #ffffff;
  text-align: center;
  outline: none;
  font-size: 18px;
  border: 0;
  display: inline-block;
  background: ${(props) => theme.colors[props.theme].normal};
  transition: all 0.4s ease;
  &:hover {
    background: ${(props) => theme.colors[props.theme].dark};
  }
  width: ${(props) => (props.full ? "100%" : "auto")};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  @media screen and (max-width: 410px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ButtonLink = styled(Button).attrs({
  as: "a",
})`
  height: 60px;
  padding: 0 6px;
  background: #27ae60;
  font-size: 18px;
  line-height: 60px;
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

  .icon-tap {
    margin: 2px 10px 0px -7px;
    border: 1px solid;
    padding: 8px;
    border-radius: 15px;
  }
`;

export const TextHome = styled.div`
  margin: ${theme.spacing * 3}px 0;
  color: ${theme.textColor};
  font-size: 21px;
  line-height: 1.5;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 410px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: 1180px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const TitleHome = styled.h1`
  color: ${(props) => (props.light ? "#ffffff" : theme.textColor)};
  display: block;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  text-align: ${(props) => (props.center ? "center" : "left")};
  padding-bottom: ${(props) => (props.padding ? "80px" : "")};
`;

export const TitleVideo = styled.h1`
  width: 100%;
  padding-bottom: 80px;
  color: ${(props) => (props.light ? "#ffffff" : theme.textColor)};
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
`;

export const TitleObras = styled.h1`
  width: 100%;
  color: ${(props) => (props.light ? "#ffffff" : theme.textColor)};
  text-align: ${(props) => (props.center ? "center" : "left")};
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
`;

export const ContainerHome = styled.div`
  max-width: ${(props) => (props.full ? "100%" : theme.center + "px")};
  margin: 0 auto;
  display: flex;
  padding: ${theme.spacing * 8}px 16px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  background: ${(props) => props.color};
  box-sizing: border-box;
`;

export const InstagramFrame = styled.iframe`
  width: 0;
  height: 592px;
`;

export const Iframe = styled.div`
  display: flex;
  iframe {
    width: 100%;
    height: 240px;
    margin-left: 34px;
  }
`;
export const ContainerImagem = styled.div`
  max-width: ${(props) => (props.full ? "100%" : theme.center + "px")};
  margin: 0 auto;
  display: flex;
  padding: ${theme.spacing * 8}px 16px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  background: ${(props) => props.color};
  box-sizing: border-box;

  @media  (min-width: 300px) and  (max-width: 400px) {
    display: grid;
    justify-content: center;
  }
  @media  screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: -157px 15px 9px 44px;
    width: 60vh;
  }
  @media screen and (max-width: 1180px) {
    display: flex;
    width: auto;
  }
}
`;
