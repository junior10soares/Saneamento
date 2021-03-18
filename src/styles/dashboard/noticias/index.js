import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const FormNoticia = styled.form`
  margin-top: 72px;

  input {
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    margin: 8px 0;
    padding: 16px;

    width: 100%;
  }

  textarea {
    width: 85%;
    height: 200px;
  }
`;

export const NewsList = styled.ul`
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
