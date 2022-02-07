import styled from 'styled-components';
import theme from '../../../GlobalStyle/theme';

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

export const ContainerGrafic = styled.div`
    max-width: ${props => props.full ? '100%' : theme.center + 'px'};
    margin: 0 auto;
    display: flex;
    padding: ${theme.spacing * 8}px 16px;
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    background: ${props => props.color};
    box-sizing: border-box;

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
    padding-bottom: 60px;
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
    font-size: 21px;
    line-height: 1.5;
    font-weight: 300;
    /* padding-left: 70px;
    padding-right: 70px; */
    p {
     padding: 0 65px;
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
margin-bottom: 30px;
}
.image-flip:hover .backside,
.image-flip.hover .backside {
    -webkit-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    transform: rotateY(0deg);
    border-radius: .25rem;
}

.image-flip:hover .frontside,
.image-flip.hover .frontside {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.mainflip {
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;
}

.frontside {
    position: relative;
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    z-index: 2;
    margin-bottom: 30px;
}

.backside {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
}

.frontside,
.backside {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 1s;
    -moz-transform-style: preserve-3d;
    -o-transition: 1s;
    -o-transform-style: preserve-3d;
    -ms-transition: 1s;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
}

.frontside .card,
.backside .card {
    min-height: 300px;
}

.backside .card a {
    font-size: 18px;
    color: #007b5e !important;
}

.frontside .card .card-title,
.backside .card .card-title {
    color: #007b5e !important;
}
.card-body {
  display: flex;
  width: 100%;
  height: 100%;
  p {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 18px;
    text-align: left;
  }

  .icone {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 30px;
    cursor: pointer;
    &:hover {
      color: #26AE60;
    }
}
  }
.frontside .card .card-body img {
 object-fit: cover;
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
        content: '';
      font-size: 25px;
      margin-right: 4px;
    }

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
    & svg {
        content: '';
        width: 25px;
        height: 25px;
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

export const Grafic = styled.div`
    width: 70%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;

    @media(max-width: 1024px){
        width: 100%;
        margin-left: 137px;
    }
    @media(max-width: 768px){
        width: 100%;
        margin-left: 77px;
    }
    @media(max-width: 425px){
        width: 100%;
        margin-left: 35px;
    }
    
`;

export const DocumentsListContainer = styled.div`
width: 100%;
margin: 0 auto;
text-align: center;
.Grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    max-width: 1050px;
    gap: 20px;

    @media (max-width: 1193px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 927px){
        grid-template-columns: 1fr;
        margin: 0 auto;
        .column {
            margin: auto;
        }
    }
}
`;

export const Doc = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 357px;
    background: #fff;
    height: 60px;
    


    & + div {
        margin-top: 16px;
    }
    

 p{

     width: 100%;
    background: #fff;   
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #BEBEBE;
    border-top: 1px solid #BEBEBE;
    border-right: 1px solid #BEBEBE;
    opacity: 0.6;

    & a{
        text-decoration: none;
        color: #000;
    } 

    & svg {
        a {
            
        }
        
    margin-left: 50px;

    }   

 }


  >  span{
    background: #27AE60;
    width: 74px;
    height: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;

    & svg {
        font-size: 26px;
        color: #fff;
    }
}

`;

export const Card = styled.div`
    border: 1px solid;
    width: 95%;
    height: 95%;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    border-color: lightgrey;
    justify-content: center;
    align-items: center;
    margin: 10px;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 90%;
    }
`

export const Image = styled.img`
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin: 10px;
    object-fit: cover;
`

export const Depoimento = styled.p`
    font-size: 16px;
    color: grey;
    font-family: 'Roboto',sans-serif;
    text-align: left;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const DepoimentoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Name = styled.p`
    font-size: 14px;
    color: grey;
    font-weight: bold;
    font-family: 'Roboto',sans-serif;
    margin: 0;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const Info = styled.p`
    font-size: 14px;
    color: grey;
    font-family: 'Roboto',sans-serif;
    margin-top: 0;

    @media (max-width: 768px) {
        text-align: center;
    }
`

export const IconDiv = styled.div`
    marginRight: 10px;
    marginLeft: 25px;
    top: 0;
    height: 200px;

    @media (max-width: 768px) {
        height: 0;
        visibility: hidden;
    }
`
export const ImgSection = styled.div`

margin-top: 32px;
text-align: center;
.imageAbout{
  img {
    width: 100%;
    max-width: 900px;
    text-align: center;
    margin: auto;
  }
}



`;
