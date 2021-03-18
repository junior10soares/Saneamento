import styled, { css } from "styled-components";
import theme from "../../../../styles/theme";

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

export const Form = styled.form`
  margin-top: 72px;

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
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    margin: 8px;
    padding: 16px;
  }

  input {
    width: 65% !important;
    padding: 16px;
    margin-right: 16px;
  }

  textarea {
    width: 65%;
    height: 200px;
  }
`;

export const CheckBoxContainer = styled.div`
  width: 120px;
  display: inline-block;

  input,
  label {
    cursor: pointer;
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

export const BarStatus = styled.div`
  width: 100%;
  height: 4px;
  /* margin: ${theme.spacing * 4}px 0 0; */
  background-color: #e5e5e5;
  display: flex;
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

export const FormError = styled.div`
  width: 100%;
  text-align: left;

  span {
    color: #990000;
    font-size: 14px;
  }
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

export const ErrorLabel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #ef5350;
  margin-left: 10px;
`;
