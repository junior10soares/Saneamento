import styled, {css} from "styled-components";

import theme, { PlayerButton } from "../../styles/theme";

export const Banner = styled.div`
  width: 100vw;
  height: 80vh;
  position: relative;
  background: black;
  overflow: hidden;
  img {
    object-fit: cover;
    opacity: 0.6;
  }

  li: {
    margin: 0 !important;
  }

  @media (min-width: 400px) and (max-width: 599px){
    height: 36vh;
  }
  @media(min-width: 600px) and (max-width: 799px){
    height: 61vh;
  }
  @media (min-width: 800px) and (max-width: 1280px) {
    height: 51vh;
  }
`;

export const Slide = styled.li`
  min-width: 100%;
  margin: 0;
  position: relative;
  text-align: center;
  background: #000;
`;

export const CarouselItem = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: rgba(211, 216, 210, 0.29);
  border-radius: 45px;
  border: none;
  top: 40%;
  z-index: 2;
  font-size: 3.2rem;
  color: #000;

  &:hover {
    animation-duration: 1s;
    animation-iteration-count: 1;
  }

  ${props =>
    props.direction === "left"
      ? css`
          left: 4%;
        `
      : css`
          right: 4%;
        `}

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;