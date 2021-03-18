import styled from "styled-components";
import theme from "@/styles/theme";

export const Step = styled.div`
  flex: 1;
  height: 4px;
  background-color: #e5e5e5;
  display: flex;
  position: relative;
  justify-content: space-between;
  &.active {
    background-color: ${theme.colors.primary.normal};
    &:before,
    &:after {
      background-color: ${theme.colors.primary.normal} !important;
    }
  }
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background: #e5e5e5;
    position: relative;
    top: -8px;
    right: 0; 
  }
  span {
    position: absolute;
    bottom: -30px;
    left: 0;
    font-size: 13px;
  }
`;

export const BarStatus = styled.div`
  width: 100%;
  height: 4px;
  margin: ${theme.spacing * 4}px 0 0;
  background-color: #e5e5e5;
  display: flex;
`;
