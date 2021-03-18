import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    min-height: 100vh;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #ffffff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }
  html {
    overflow-x: hidden;
    padding: 0;
  }
  .logo {
    @media (max-width: 768px) {
      width: 40%;
      display: block;
      margin: 10px auto;
    }
  }
  .slider {
    min-width: 1000px;
    margin: 0 auto;
    li {
        border: 10px solid transparent;
        box-sizing: border-box;
    }

    @media(max-width: 768px){
      height: 400px;
    }
  }

  .noticias {
    min-width: 1000px;
    width: 600px;
    height: 400px;
    margin: 0 auto;
    li {
        border: 10px solid transparent;
        box-sizing: border-box;
    }

    @media(max-width: 1024px){
      height: 400px;
    }

    @media(max-width: 768px){
      height: 400px;
    }

    @media(max-width: 375px){
    height: 288px;
    transform: translateX(-24px);
    width: 323px;
    }
  }

  .sliderVideo {
    width: 1154px;
    height: 35vh;

    @media (max-width: 425px){
      transform: translateX(-50px);
    width: 422px;
    height: 35vh;      
    }

    @media (max-width: 375px){
      transform: translateX(-49px);
      width: 369px;
      }
    @media (max-width: 360px){
      transform: translateX(-72px);
      width: 369px;
      }

    @media (max-width: 320px){
      transform: translateX(-67px);
    width: 318px;
    }
    /* padding-right: 100px; */
    /* padding-left: 100px; */
    /* margin-left: 100px; */
    /* margin-right: 100px; */
    /* max-width: 1000px;
    margin: 0px 0px;
    li {
        border: 10px solid transparent;
        box-sizing: border-box;
    }

    @media(max-width: 768px){
      height: 400px;

    } */
  }

  .sliderHome {
    left: 50%;
    transform: translateX(-50%);
    height: 277px;

    li {
        border: 10px solid transparent;
        box-sizing: border-box;
    }

    @media(max-width: 1440px){
     width: 96%;
     max-height: 300px;
    }

    @media(max-width: 768px){
      max-height: 244px;
    }

    @media (max-width: 360px){
      left: 97%;
      width: 700px; 
    }
    @media (max-width: 320px){
      left: 97%;
      width: 504px; 
    }
  }

  .sliderMacrodrenagem {
    left: 50%;
    transform: translateX(-50%);

    li {
        border: 10px solid transparent;
        box-sizing: border-box;
    }

    @media(max-width: 1440px){
     width: 96%;
     max-height: 300px;
    }

    @media(max-width: 768px){
      max-height: 244px;
    }

    @media (max-width: 360px){
      left: 97%;
      width: 700px; 
    }
    @media (max-width: 320px){
      left: 97%;
      width: 504px; 
    }
  }


  .carousel {
    text-align: center;
  }
  .dots button {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 0;
    margin: 0 4px;
    background: #C4C4C4;
    &.carousel__dot--selected {
        background: #2F80ED;

    }
  }
  .text-center {
    text-align: center !important;
    iframe {
      width: 100%
    }
  }
  .text-right {
    text-align: right !important;
  }

  button {
    cursor: pointer;
    outline: none;
  }

  #__next {
    min-height: 100vh;

    & > div {
      height: 100%;
    }
  }


  .containerNoticias{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
  }

  .contentNoticias {
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 18px;
    margin-right: 18px;
    padding-left: 18px;
    padding-right: 18px;
    }

  .boxNoticias {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 42px;
    @media(max-width: 768px){
      flex-direction: column;
    }
  }

  .responsiveStepBar {
    display: none;
  }

  .desktopStepBar {
    display: none;
  }

  @media only screen and (min-width: 768px){
    .desktopStepBar {
      display: block;
    }
  }

  @media only screen and (max-width: 767px) {
    .responsiveStepBar {
      display: block;
    }
  }

  .image-modal {
    height: 470px;
    width: 900px;

    @media(max-width: 768px){
      height: 200px;
      width: 350px;
    }
  }
`;

export default {
  textColor: "#4f4f4f",
  spacing: 8,
  center: 1300,
  colors: {
    primary: {
      normal: "#27AE60",
      dark: "#378c5b",
    },
    black: {
      normal: "#4f4f4f",
      dark: "#0000000",
    },
    secondary: {
      normal: "#2F80ED",
    },
    ternary: {
      normal: "#F2C94C",
    },
  },
};

export const PlayerButton = styled.button`
  width: 80px;
  display: block;
  height: 80px;
  border: 0;
  outline: none;
  background: url(/player.svg) no-repeat top left;
  background-size: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  z-index: 20;
  cursor: pointer;
  right: 0;
  transition: all 0.4s ease;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 500px) {
    width: 40px;
    height: 40px;
  }
`;

export const ErrorLabel = styled.span`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #ef5350;
  margin-top: 2px;
`;
