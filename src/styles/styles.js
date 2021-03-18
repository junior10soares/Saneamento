import styled, {css} from 'styled-components';
import theme from './theme';

export const ContainerCardHome = styled.div`
    max-width: ${theme.center}px;
    margin: -60px auto 0;
    display: flex;    
    position: relative;
    z-index: 10;

    @media (max-width: 768px) {
        max-width: ${theme.center}px;
        flex-direction:  ${props => props.column ? 'column' : ''};
        margin: -131px auto 0;
    }

    @media(max-width: 425px){
      margin: -330px auto 0;
    }

    @media(max-width: 320px){
      margin: -403px auto 0;
    }
`;

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

export const TitleObras = styled.h1`
    /* max-width: 650px; */
    width: 100%;
    /* padding-left: 70px; */
    margin: 0 0 ${theme.spacing}px;
    color: ${props => props.light ? '#ffffff' : theme.textColor};
    display: block;
    font-size: 36px;
    line-height: 1.2;
    font-weight: 400;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 24px;
        margin: ${theme.spacing * 2}px 0;
    }
    @media (max-width: 320px) {
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

/* Buttons */

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
`;

export const ButtonLink = styled(Button).attrs({
    as: "a"
})`
    text-decoration: none;
    line-height: 55px;
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

export const Arrow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #fff;
  color: #242f7c;
  border-radius: 45px;
  border: none;

  ${(props) =>
    props.direction === "left"
      ? css`
          left: 5%;
        `
      : css`
          right: 5%;
        `}

  top: 60%;
  z-index: 2;
  font-size: 3.2rem;
  @media (max-width: 1024px) {
    ${(props) =>
      props.direction === "left"
        ? css`
            left: 2%;
          `
        : css`
            right: 2%;
          `}
  }

  @media (max-width: 425px) {
    ${(props) =>
      props.direction === "left"
        ? css`
            left: 5%;
          `
        : css`
            right: 5%;
          `}
    top: 66%;
  }
  @media (max-width: 375px) {
    ${(props) =>
      props.direction === "left"
        ? css`
            left: 5%;
          `
        : css`
            right: 5%;
          `}
  }

  @media screen and (max-device-width: 320px) and (-webkit-min-device-pixel-ratio: 1) {
    ${(props) =>
      props.direction === "left"
        ? css`
            left: 14%;
          `
        : css`
            right: 14%;
          `}

    svg {
      position: relative;
      top: -8px;
    }
  }
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


export const ContentPageSocial = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;

    .foto {
      width: 100%;
    height: 542px;
    padding-bottom: 154px;
    }

    .contentText{
      text-align: justify;
      padding-left: 0px;
      padding-right: 32px;
      color: ${theme.textColor}
    }

    @media(max-width: 850px){
      grid-template-columns: 1fr;
    }
    `;

export const ImageSocial = styled.div`
     background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-position: center;
    margin-top: 100px;
    background-image: url(${props => props.image});
    `;


export const Modal = styled.div`
  display: ${(props) => (props.open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 50;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BoxModal = styled.div`
 position: relative;
    border-radius: 5px;
    text-align: center;
    padding: 40px 0;

  img {
    width: 100%;
    object-fit: cover;
    max-width: 100vw;
    max-height: 70vh;
  }
  @media only screen and (max-width: 575px) {
    width: 85%;
    height: 90%;
  }
}
`;

export const BtnFecharModal = styled.a`
  position: absolute;
  max-width: 37px;
  top: 10px;
  right: -26px;
  cursor: pointer;

  & svg {
    color: #fff;
  }
`;

export const ImagemSobre = styled.div`
margin-top: 32px;
text-align: center;
.imageAbout{
  img {
    width: 100%;
    max-width: 600px;
    text-align: center;
    margin: auto;
  }
}

.textAbout {
  text-align: left;
  max-width: 600px;
  margin: auto;
}

`;

export const WithStyles = styled.div `
img{
  width: 400px;
  height: 400px;
}
.card {
  display: inline-block;
    width: 92%;
    min-height: 250px;
    padding: 32px;
    box-sizing: border-box;
    text-align: left;
    background: #2F80ED;
    position: relative;
    color: #fff;
    border-radius: 16px;
    margin-bottom: 24px;
  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
  }
  .link {
    color: #fff;
    font-size: 13px;
    display: block;
    margin-top: ${theme.spacing * 2};
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
  }

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    background: transparent;
    opacity: 1;
    z-index: 15;
    color: #fff;
    text-decoration: none;
  }

  .badge {
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 8px;
  border-radius: 30px;
  padding: 10px 15px;
  }

  .title {
  display: block;
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  margin: 0;

  @media(max-width: 768px){
    max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }

  }
}
`;


