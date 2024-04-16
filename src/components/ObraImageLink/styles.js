import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  max-width: ${(props) => (props.full ? "100%" : theme.center + "px")};

  display: flex;
  padding: 0 38px 0 0;
  position: relative;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  background: ${(props) => props.color};
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: ${theme.spacing * 8}px 48px;
    width: 100%;
  }
  @media (max-width: 768px) {
    /* padding: ${theme.spacing * 4}px; */
    width: 100%;
  }
`;

export const Center = styled.div`
  max-width: ${theme.center}px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const Card = styled.article`
  display: flex;
  align-content: center;
  width: 405px;
  background: black;
  position: relative;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  position: absolute;
  padding: 24px;
  bottom: 0;
  margin: 0 0 0 35px;
  z-index: 10;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 296px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Link = styled.a`
  display: flex;
  align-content: center;
  width: 405px;
  height: 225px;
  background: black;
  position: relative;
`;

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  opacity: 0.7;
`;

export const Content = styled.div`
  width: 100%;
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
export const TitleObras = styled.h1`
  /* max-width: 650px; */
  width: 100%;
  /* padding-left: 70px; */
  margin: -100px 0 30px;
  color: ${(props) => (props.light ? "#ffffff" : theme.textColor)};
  display: block;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 24px;
    margin: ${theme.spacing * 2}px 0;
  }
  @media (max-width: 320px) {
    padding-left: 0px;
  }
`;
