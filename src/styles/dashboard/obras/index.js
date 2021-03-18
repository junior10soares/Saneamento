import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
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
