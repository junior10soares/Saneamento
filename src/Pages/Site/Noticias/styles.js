import styled from 'styled-components';
import theme from '../../../GlobalStyle/theme';

export const Container = styled.div`
  .containerNoticias{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
  }

  .contentNoticias {
    max-width: 1300px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 18px;
    margin-right: 18px;
    padding-left: 18px;
    padding-right: 18px;
    }

  .boxNoticias {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 42px;
    @media(max-width: 768px){
      flex-direction: column;
    }
  }

`;
export const TitleSection = styled.h1`
/* max-width: 650px; */
width: 100%;
/* padding-left: 70px; */
margin: 0 0 ${theme.spacing}px;
color: ${props => props.light ? '#ffffff' : theme.textColor};
display: block;
font-size: 36px;
line-height: 1.2;
font-weight: 400;
text-align: ${props => props.center ? 'center' : 'left'};
@media (max-width: 768px) {
    font-size: 24px;
    margin: ${theme.spacing * 2}px 0;
}

@media (max-width: 320px){
  padding-left: 0px;

}
`;