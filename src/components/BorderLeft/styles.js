import styled from "styled-components";

const borderWidth = 120;

export const BorderLeftEl = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: ${borderWidth}px;

  @media only screen and (max-width: 680px) {
    left: -40px;
  }
`;