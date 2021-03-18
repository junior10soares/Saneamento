import styled from "styled-components";

export const Form = styled.form`
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
    padding: 16px;
  }

  input {
    width: 95%;
    padding: 16px;
    margin-right: 16px;
  }

  textarea {
    width: 65%;
    height: 200px;
  }
`;
