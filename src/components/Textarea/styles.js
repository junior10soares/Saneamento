import styled, {css} from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 96%;
  flex-direction: column;
  margin-right: 16px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  label {
    font-family: 'MuseoSans500', sans-serif;
    font-size: 15px;
    color: #000000;
    margin-bottom: 8px;
  }
  textarea {
    width: 100%;
    height: 100px;
    border-radius: 2px;
    border: 1px #d0d0d0 solid;
    padding: 16px;
    font-size: 16px;
    font-family: 'InterSemiBold', sans-serif;
    color: #828282;
    background-color: #fafafa;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.075); 
    outline: none;
    ${({isFocused}) => isFocused && css`
      border: 1px solid #5e81f4;
    `}
    ${(props) =>
    props.isFieled &&
    css`
      color: #828282;
    `}
  }
  span {
    font-size: 14px;
    font-family: 'MuseoSans700', sans-serif;
    color: #ff0000;
    margin: 4px 0;
  }
`;
