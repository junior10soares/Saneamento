import styled from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.article`
  display: block;
  width: 100%;
  padding: ${theme.spacing * 4}px;
  box-sizing: border-box;
  text-align: left;
  background: ${theme.colors.secondary.normal};
  position: fixed;
  bottom: 0;
  color: #fff;
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
`;

export const Title = styled.h2`
  display: block;
  color: #ffffff;
  font-weight: 400;
  font-size: 24px;
  margin: 0;
`;

export const Link = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  opacity: 0;
  z-index: 15;
`;

export const Address = styled.p`
  color: #bdbdbd;
  max-width: 80%;
  margin: 0 auto;
  font-size: 18px;
  padding: ${theme.spacing * 3}px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin: 0 ${theme.spacing}px;
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

export const Column = styled.div`
    padding: 0 ${theme.spacing * 2}px;
    box-sizing: border-box;
    width: ${props => (props.grid ? props.grid / 12 * 100 : '8:33')}%;
    @media (max-width: 768px) {
        width: 100%;
        padding: 0;
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

