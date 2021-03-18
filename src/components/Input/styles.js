import styled, {css} from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 16px;
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  label {
    font-family: "InterBold", sans-serif;
    font-size: 16px;
    line-height: 20px;
    color: #828282;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid #E0E0E0;
    height: 48px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
    background: #ffffff;
    font-family: 'Roboto', sans-serif;
    padding: ${theme.spacing * 2}px; 
    ${({isFocused}) => isFocused && css`
      border: 1px solid #5e81f4;
    `}
    ${(props) =>
    props.isFieled &&
    css`
      color: #828282;
    `}
    }

    &::-webkit-input-placeholder {
      opacity: 1;
    }

    &:-ms-input-placeholder {
      opacity: 1;
    }

    &:-moz-placeholder {
      opacity: 1;
    }

    &::-moz-placeholder {
      opacity: 1;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    position: absolute;
    right: 0;
    top: 8px;

    svg {
      color: #f2f2f2;
    }
  }

  span {
    font-size: 14px;
    font-family: "MuseoSans700", sans-serif;
    color: #ff0000;
    margin: 4px 0;
  }

`;
