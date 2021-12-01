import styled from "styled-components";

const borderWidth = 120;
const maxWidth = 680;

export const OverlayWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 10000;
  background: rgba(34, 47, 62, 0.9);
  color: white;
`;

export const ModalClose = styled.div`
  svg {
    position: fixed;
    top: 130px;
    right: 16px;
    width: 34px;
    height: 34px;
    cursor: pointer;
    z-index: 7;

    @media only screen and (max-width: 680px){
      right: 50%;
      transform: translateX(50%);
    }
  }
`;

export const ModalNav = styled.div`
  @media only screen and (max-width: 680px){
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.7);
    z-index: 6;
  }

  svg {
    position: absolute;
    top: 470px;
    width: 34px;
    height: 34px;
    font-size: 32px;
    text-align: center;
    line-height: 64px;
    cursor: pointer;
    z-index: 6;
  }

  svg:first-child {
    left: 100px;

    @media only screen and (max-width: 1300px) {
      left: 16px;
    }
  }
  svg:last-child {
    right: 100px;

    @media only screen and (max-width: 1300px) {
      right: 16px;
    }
  }
`;

export const ModalCardWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  margin-top: 70px;
  width: 100%;
  height: 700px;
  z-index: 6;

  @media(max-width: 768px){
    height: 300px;
  }
`;

export const ModalCard = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  max-width: 1000px;
  max-height: 470px;
  margin: 80px auto;
  padding: 0 ${borderWidth}px;
  
  @media only screen and (max-width: 680px) {
    padding: 0 40px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 470px;
  min-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  text-align: center;
  color: #fff;
  z-index: 2;

  svg {
    margin-bottom: 20px;
  }

  h2,
  p {
    margin: 0;
  }

  h2 {
    font-size: 25px;
  }

  p {
    font-size: 20px;

    &.imagemDesc {
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      padding: 4px 16px;
      border-radius: 8px;
      bottom: 24px;
    }
  }

  @media(max-width: 768px) {
    min-height: 200px;
    min-width: 300px;
  }
`;
