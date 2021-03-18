import styled from "styled-components";
import theme from "../../GlobalStyle/theme";


export const HeaderStyle = styled.header`
  position: fixed;
  height: 125px;
  z-index: 50;
  width: 100%;
  background: #fff;
  left: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  padding: 0 ${theme.spacing * 3}px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  right: 0;
  @media (max-width: 1000px) {
    top: 0;
    justify-content: space-between;
  }
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 1000px) {
    position: fixed;
    background: #ffffff;
    width: 280px;
    flex-direction: column;
    justify-content: flex-start;
    top: 0;
    height: 100vh;
    left: 0;
    margin: 0;
    transition: all 0.4s ease;
    transform: translateX(-110%);
    &.active {
      transform: translateX(0);
    }
  }
  a {
    color: ${theme.textColor};
    text-decoration: none;
    padding: ${theme.spacing * 3}px;
    position: relative;
    display: flex;
    align-items: center;
    height: 72%;
    &:after {
      content: "";
      position: absolute;
      height: 5px;
      width: 100%;
      background: ${theme.colors.primary.normal};
      bottom: 0;
      left: 0;
      display: none;
    }
    &.active {
      &:after {
        display: block;
      }
    }
  }
`;

export const ButtonMenu = styled.button`
  width: 40px;
  cursor: pointer;
  border: 0;
  background: transparent;
  outline: none;
  display: none;
  @media (max-width: 1000px) {
    display: block;
  }
  &:after,
  &:before,
  span {
    content: "";
    height: 3px;
    display: block;
    background: black;
    width: 100%;
    margin: 3px 0;
  }
`;

export const Spacer = styled.div`
  height: 125px;
  width: 100%;
`;
