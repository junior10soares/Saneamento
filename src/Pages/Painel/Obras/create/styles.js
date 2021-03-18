import styled, {css} from 'styled-components';
import theme from '../../../../GlobalStyle/theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ListButton = styled.button`
  background-color: black;
  position: absolute;
  top: -108px;
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

export const CheckBoxContainer = styled.div`
  width: 120px;
  display: inline-block;

  input,
  label {
    cursor: pointer;
    margin-left: 8px;
  }

  input {
    margin: 0;
  }
`;

export const ConstructionProgressContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 200px;
`;

export const Step = styled.button.attrs((props) => ({ type: "button" }))`
  width: 100%;
  height: 4px;
  background-color: #e5e5e5;
  display: flex;
  position: relative;
  justify-content: space-between;
  border: 0;
  transition: 0.2s;
  &.active {
    background-color: ${theme.colors.primary.normal};
    &:before,
    &:after {
      background-color: ${theme.colors.primary.normal} !important;
    }
  }
  &:not(:last-child) {
    &:before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background: #e5e5e5;
      position: relative;
      top: -8px;
      left: -10px;
    }
  }
  span {
    position: absolute;
    bottom: -40px;
    left: -5px;
    font-size: 16px;
  }
  &:last-child {
    &:after {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background: #e5e5e5;
      position: relative;
      top: -8px;
      right: 0px;
    }

    span {
      left: initial;
      right: 0;
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
`;

export const DocumentsContainer = styled.div`
  margin-top: 32px;
  width: 100%;
`;

export const DocumentList = styled.ul`
  list-style-type: none;
  min-width: 100%;
  margin-top: 80px;
  padding: 0;
`;
export const Document = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > svg {
    margin-right: 48px;
  }

  span {
    width: 300px;
    color: #828282;
  }

  & + li {
    margin-top: 40px;
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

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 80%;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
max-width: 100%;
width: 80%;
justify-content: center;
`;

/* export const Arquivo = styled.div`
  min-width: 500px;
  height: 50px;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  input {
    position: absolute;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    padding: 16px;
    width: 40%;
    padding: 16px;
    opacity: 0;
  }

  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: #87939F;
  }

  button {
    width: 137px;
  height: 36px;
  background: #5e81f4;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;
  border: none;
  color: #fff;
  }



`; */

export const Arquivo = styled.div`
width: 100%;
  min-width: 500px;
  height: 50px;
  border: 1px solid #586365;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  color: #586365;

  input {
    position: absolute;
    border: 1px solid #586365;
    border-radius: 4px;
    padding: 16px;
    width: 40%;
    padding: 16px;
    z-index: 9999;
    opacity: 0;
    color: #586365;
  } 

  button {
    width: 137px;
  height: 36px;
  background: #5e81f4;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;
  border: none;
  color: #fff;
  }

`;