import styled, { css } from "styled-components";

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify || "space-between"};
  width: 100%;

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    `}
`;

export default FormItem;
