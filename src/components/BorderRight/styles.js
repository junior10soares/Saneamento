import styled from "styled-components";

const borderWidth = 120;

export const BorderRightEl = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  width: ${borderWidth}px;

  @media only screen and (max-width: 680px) {
    right: -40px;
  }
`;