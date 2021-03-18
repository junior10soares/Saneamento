import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${({ height }) => height || "320"}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
`;
