import styled, {css} from 'styled-components';
import theme from '../../GlobalStyle/theme';

export const Container = styled.div`
  .single-chart {
  width: 100%;
  justify-content: space-around ;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: #eee;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart.orange .circle {
  stroke: #ff9f00;
}

.circular-chart.green .circle {
  stroke: #4CC790;
}

.circular-chart.blue .circle {
  stroke: #3c9ee5;
}

.percentage {
  fill: #666;
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}
    @media(max-width: 1024px){
      padding: ${theme.spacing * 8}px 48px;
      max-width: 706px;
    }
    @media (max-width: 768px) {
        /* padding: ${theme.spacing * 4}px; */
        width: 100%;
    }
`;

export const Trash = styled.div`
${({visibleTrash}) => visibleTrash ? css`
display: block;
` : css`
display: none;
`}
`


export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 45px;
  height: 45px;
  background-color: rgba(211, 216, 210, 0.29);
  border-radius: 45px;
  border: none;
  top: 54%;
  z-index: 9999;
  font-size: 3.2rem;
  color: #000;

  ${props =>
    props.direction === "left"
      ? css`
          left: 9%;
        `
      : css`
          right: 9%;
        `}

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

