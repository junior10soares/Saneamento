import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;

  .obrasIcon {
    color: #87939f;
    fill: currentColor;
    cursor: pointer;
  }

`;

export const RegisterButton = styled.button`
  background-color: black;
  position: absolute;
  top: -100px;
  right: 0;
  padding: 12px 32px;

  background: #5e81f4;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: 0.1s;

  &:hover {
    background: #5171db;
  }
`;

export const FilterSection = styled.div`
  margin-top: 64px;

  input {
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    padding: 16px;
    margin-right: 16px;

    &.normal {
      width: 320px;
    }

    &.large {
      width: 320px;
    }
  }
`;

export const ConstructionsList = styled.ul`
  list-style-type: none;
  min-width: 100%;
  margin-top: 80px;
  padding: 0;

  li {
    > svg {
      margin-right: 48px;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    span {
      width: 300px;
      color: #828282;
    }

    & + li {
      margin-top: 40px;
    }
  }
`;

export const ActionIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 150px;

  svg {
    color: #87939f;
    transition: 0.1s;

    &:hover {
      color: #535659;
    }

    &.delete {
      &:hover {
        color: #bf0d2b;
      }
    }
  }
`;

export const Modal = styled.div`
width: 100vw;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
background: rgb(14 14 14 / 61%);
top: 0;
bottom: 0;
left: 0;
right: 0;
`;

export const ModalContent = styled.div`
width: 100%;
max-width: 500px;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
background: #fff;
margin: 0 auto;
border-radius: 10px;
position: relative;

`;

export const ModalForm = styled.div`
width: 100%;
margin: 0 auto;

svg {
  position: absolute;
  right: 1%;
  margin-right: 23px;
  font-size: 16px;
  top: 23px;
  cursor: pointer;
}

`;

export const Form = styled.form`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 auto;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #011f3b;
  }

  textarea,


  input {
    width: 65% !important;
    padding: 16px;
    margin-right: 16px;
    margin: 8px auto;
  }
`;
export const card = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 auto;
}

`;

export const ButtonForm = styled.div`
display: flex;
justify-content: flex-end;
width: 100%;
max-width: 72%;
`
