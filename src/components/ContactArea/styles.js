import styled, {css} from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    max-width: ${props => props.full ? '100%' : theme.center + 'px'};
    margin: 0 auto;
    display: flex;
    padding: ${theme.spacing * 8}px 16px;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    background: ${props => props.color};
    box-sizing: border-box;

    .groupButtons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
    }

    .groupButtonsResponsive {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin-top: -15px;
    }

    .buttonAlign{
      display: flex;
      justify-content: flex-end;
      padding-right: 24px;
      transform: translateY(130px);
      position: relative;
      z-index: 41;
    }

    .buttonAlignResponsive{
      display: flex;
      justify-content: flex-end;
      position: relative;
      z-index: 41;
      margin-bottom: 10px
    }
    .buttonWhatas{
     width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
    transform: translateY(125px);
    position: relative;
    z-index: 41;
    a {
      height: 60px;
    padding: 0 ${theme.spacing * 4}px;
    background: #27AE60;
    font-size: 14px;
    line-height: 60px;
    min-width: 160px;
    cursor: pointer;
    color: #ffffff;
    display: inline-block;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    text-decoration: none;
    &:before {
        content: '';
        width: 25px;
        height: 25px;
        background: url(/whatsapp-ico.svg);
        background-size: cover;
        margin: 0 4px;
    }
    }
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

export const Center = styled.div`
    max-width: ${theme.center}px;
    margin: 0 auto;
    display: block;
    width: 100%;
    position: relative;   
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

export const Row = styled.div`
    width: 100%;
    height: auto;
    margin: 0 -${theme.spacing * 2}px;
    display: flex;
    position: relative;
    flex-wrap: wrap;
    justify-content: ${props => props.center ? 'center' : 'flex-start'};
    @media (max-width: 768px) {
        margin: 0;
    }
`;

/* Inputs */
export const InputBox = styled.input`
    width: 100%;
    border-radius: 6px;
    border: 1px solid #E0E0E0;
    height: 65px;
    outline: none;
    font-size: 14px;
    box-sizing: border-box;
    background: #ffffff;
    font-family: 'Roboto', sans-serif;
    padding: ${theme.spacing * 2}px; 
`;

export const SelectBox = styled(InputBox).attrs({
    as: "select"
})``;

export const TextAreaBox = styled(InputBox).attrs({
    as: "textarea"
})`
    min-height: 140px;
`;

export const Column = styled.div`
    padding: 0 ${theme.spacing * 2}px;
    box-sizing: border-box;
    width: ${props => (props.grid ? props.grid / 12 * 100 : '8:33')}%;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
    }
    ${InputBox} {
        margin-bottom: 10px;
    }
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

export const Button = styled.button`
    border-radius: 6px;
    height: 55px;
    min-width: 180px;
    height: ${props => (props.size ? props.size : '')}px;
    cursor: pointer;
    color: #ffffff;
    text-align: center;
    outline: none;
    font-size: 18px;
    border: 0;
    display: inline-block;
    background: ${props => theme.colors[props.theme].normal};
    transition: all 0.4s ease;
    &:hover {
        background: ${props => theme.colors[props.theme].dark};
    }
    width: ${props => props.full ? '100%': 'auto'};

    & svg {
        font-size: 25px;
        margin-right: 4px;
      }
    
      .icon-carregar {
        margin:-13px 20px -19px -54px;
        border: 1px solid;
        padding: 8px;
        border-radius: 15px;
      }
`;

export const ButtonLink = styled(Button).attrs({
    as: "a"
})`
    text-decoration: none;
    line-height: 55px;
`; 

export const Mailto = styled.div`
    .mailto {
        width: 50px;
        height: 50px;
        background-color: red;
        /* Center horizontally*/
        margin: 0 auto;    
    }
`
