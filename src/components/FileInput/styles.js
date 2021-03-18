import styled from "styled-components";

export const Container = styled.div`
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
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    padding: 16px;
    width: 40%;
    padding: 16px;
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
`;

export const FileInputButton = styled.button`
  width: 137px;
  height: 36px;
  background: #5e81f4;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;
  border: none;
  color: #fff;
`;
