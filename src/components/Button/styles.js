import styled from "styled-components";
import theme from "../../GlobalStyle/theme";

export const Container = styled.button`
    border-radius: 6px;
    min-width: 180px;
    height: 48px;
    cursor: pointer;
    color: #ffffff;
    text-align: center;
    outline: none;
    font-size: 18px;
    border: 0;
    display: inline-block;
    margin-top: 8px;

  width: ${({ full }) => (full ? "100%" : "max-content")};
  max-width: ${({ width }) => (width ? [width] : "none")};
  padding: ${({ icon }) => (icon ? "16px 24px" : "16px 0")};
  background-color: ${({ btType }) => (btType ? [btType] : "#378C5B")};
  color: ${({ btType }) => (btType === "disable" ? "#f2f2f2" : "#ffffff")};
  transition: 300ms ease;

  &:hover {
    transform: scale(0.98);
  }

  svg {
    margin-right: 8px;
    color: ${({ btType }) => (btType === "disable" ? "#f2f2f2" : "#ffffff")};
  }

  img {
    margin-right: 8px;
  }

  .icon-spin {
    animation: iconSpin 2s infinite linear;
  }

  @keyframes iconSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
