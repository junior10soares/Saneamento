import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;  
    display: flex;
    justify-content: center;
    align-items: center;
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
