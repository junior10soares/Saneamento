import styled, {css} from 'styled-components';
import theme from '../../../../GlobalStyle/theme';

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

export const TextSection = styled.div`
    margin: ${theme.spacing * 3}px 0;
    color: ${theme.textColor};
    font-size: 16px;
    line-height: 1.5;
    font-weight: 300;
    /* padding-left: 70px;
    padding-right: 70px; */
`;

export const BannerPage = styled.div`
    background-repeat: no-repeat;
    background-position: 10% 66%;
    background-position-x: center;
    background-size: cover;
    background-attachment: scroll;
    height: 400px;
    background-color: black;
    background-image: url(${props => props.image});
`;

export const HeaderPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${theme.spacing * 8}px;

`;

export const SlideMacro = styled.div`
     display: flex;
    max-width: 1100px;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;

.contentSlide {
  display: flex;
    justify-content: flex-start;
    width: 30%;
    align-items: center;
    margin: auto;
}
.contentImage {
margin-bottom: 30px;}
`;

export const WhatsappButton = styled.a`
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
`;


export const WhatsappButtonMobile = styled.a`
    height: 60px;
    background: #27AE60;
    font-size: 14px;
    line-height: 60px;
    width: 60px;
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
        width: 26px;
        height: 25px;
        background: url(/whatsapp-ico.svg);
        background-size: cover;
        margin: 0 0px;
    }
`;
export const Plantao = styled.a`
    height: 60px;
    padding: 0 ${theme.spacing * 4}px;
    background: #e88700;
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
    
    & svg {
      font-size: 25px;
      margin-right: 4px;
    }

`;

export const Projeto = styled.a`
    height: 60px;
    padding: 0 ${theme.spacing * 4}px;
    background: #1182C6;
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
    
    & svg {
      font-size: 25px;
      margin-right: 4px;
    }

`;

export const ActionIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 150px;

  svg {
    color: #87939f;
    transition: 0.1s;

    &:hover {
      color: #535659;
    }

    &.delete {
      &:hover {
        color: #bf0d2b;
      }
    }
  }
`;

export const CheckBoxContainer = styled.div`
  width: 120px;
  display: inline-block;

  input,
  label {
    cursor: pointer;
  }

  input {
    margin: 0;
  }
`;

export const ConstructionProgressContainer = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 200px;
`;

export const Document = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > svg {
    margin-right: 48px;
  }

  span {
    width: 300px;
    color: #828282;
  }

  & + li {
    margin-top: 40px;
  }
`;

export const DocumentsContainer = styled.div`
  margin-top: 32px;
  width: 100%;
`;

export const DocumentList = styled.ul`
  list-style-type: none;
  min-width: 100%;
  margin-top: 80px;
  padding: 0;
`;

export const ErrorLabel = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.01em;
  color: #ef5350;
  margin-left: 10px;
`;

export const Form = styled.form`
  margin-top: 72px;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #011f3b;
  }

  textarea,
  input {
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    margin: 8px;
    padding: 16px;
  }

  input {
    width: 65% !important;
    padding: 16px;
    margin-right: 16px;
  }

  textarea {
    width: 65%;
    height: 200px;
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

export const ListButton = styled.button`
  background-color: black;
  position: absolute;
  top: -108px;
  right: 0;
  padding: 12px 32px;

  background: #5e81f4;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  transition: 0.1s;

  &:hover {
    background: #5171db;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
`;
