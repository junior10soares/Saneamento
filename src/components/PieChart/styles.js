import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  width: ${(props) => props.width || '100%'};
`;

export const ChartTitle = styled.h4`
  font-weight: normal;
  color: gray;
  opacity: 0.7;
`;
