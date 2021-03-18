import styled, {css} from 'styled-components';

export const Container = styled.div`
width: 93%;
display: flex;

`;

export const Slide = styled.div`
display: flex;
position: relative;
z-index: 1000;
iframe {
    display: flex;
    width: 400px;
    height: 240px;
}
iframe + iframe {
    margin-right: 12px;
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
  z-index: 9999;
  font-size: 3.2rem;
  color: #000;

  ${props =>
    props.direction === "left"
      ? css`
          left: 3%;
        `
      : css`
          right: 9%;
        `}

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;