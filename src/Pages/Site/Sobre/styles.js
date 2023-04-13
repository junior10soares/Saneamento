import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  max-width: ${(props) => (props.full ? "100%" : theme.center + "px")};
  margin: 0 auto;
  display: flex;
  padding: ${theme.spacing * 8}px 16px;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  background: ${(props) => props.color};
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

  .buttonAlign {
    display: flex;
    justify-content: flex-end;
    padding-right: 24px;
    transform: translateY(130px);
    position: relative;
    z-index: 41;
  }

  .buttonAlignResponsive {
    display: flex;
    justify-content: flex-end;
    position: relative;
    z-index: 41;
    margin-bottom: 10px;
  }
  .buttonWhatas {
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
      background: #27ae60;
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
        content: "";
        width: 25px;
        height: 25px;
        background: url(/whatsapp-ico.svg);
        background-size: cover;
        margin: 0 4px;
      }
    }
  }

  @media (max-width: 1024px) {
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
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const TitleSection = styled.h1`
  /* max-width: 650px; */
  width: 100%;
  /* padding-left: 70px; */
  margin: 0 0 ${theme.spacing}px;
  color: ${(props) => (props.light ? "#ffffff" : theme.textColor)};
  display: block;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  text-align: ${(props) => (props.center ? "center" : "left")};
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
  font-size: 21px;
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
  background-image: url(${(props) => props.image});
`;

export const ImagemSobre = styled.div`
  margin-top: 32px;
  text-align: center;
  .imageAbout {
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

export const Rounded = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: ${(props) => props.color};
  height: calc(100px + (70 - 200) * ((35vw - 200px) / (1600 - 300)));
  width: calc(50px + (70 - 30) * ((50vw - 300px) / (1600 - 300)));
  border-radius: 50%;
  padding: 6px;
  color: white;
  margin: 0;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: calc(20px + (24 - 10) * ((50vw - 300px) / (1600 - 300)));

  &::before {
    color: black;
    opacity: 0.6;
    ${(props) => (props.before ? `{ content: '${props.before}' }` : "")};
    position: absolute;
    margin: 0;
    left: -55px;
    font-weight: normal;
    font-size: calc(8px + (18 - 8) * ((100vw - 300px) / (1600 - 300)));
    width: 45%;
    text-align: end;
  }

  &::after {
    color: black;
    opacity: 0.6;
    ${(props) => (props.after ? `{ content: '${props.after}' }` : "")};
    position: absolute;
    margin: 0;
    right: -35px;
    font-weight: normal;
    font-size: calc(8px + (18 - 8) * ((100vw - 300px) / (1600 - 300)));
    width: 45%;
  }

  @media (max-width: 1024px) {
    &::before {
      width: 43%;
    }

    &::after {
      width: 43%;
    }
  }

  @media (max-width: 600px) {
    &::before {
      width: 41%;
    }

    &::after {
      width: 41%;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${theme.center}px;
  margin: 0 auto;
  display: block;
`;

export const TimelineContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;

  .timeline-item-title {
    border-radius: 1.2rem;
    font-size: 1.5rem;
    font-weight: 500;
    overflow: hidden;
    padding: 0.25rem 0.25rem 0.25rem 1.25rem;
    visibility: visible;
    text-align: start;
    color: black;
    margin: 50px 50px;
    border: 2px solid;
  }

  .timeline-controls {
    background: rgba(229, 229, 229, 0.85);
    border-radius: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    margin-left: 30px;
    display: -ms-flexbox;
    display: flex;
    list-style: none;
    padding: 0.25em 0.25em;
  }
  @media (max-width: 1024px) {
    max-width: 706px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 10px;
`;

export const TimelineText = styled.li`
  display: list-item;
  width: 100%;
  margin: 5px;
  list-style: circle;
`;
export const TimelineLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;

  & + & {
    margin-top: 10px;
  }
`;

export const TimelineTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  & > h2 {
    font-size: calc(16px + (30 - 16) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 100;
    opacity: 0.7;
    text-align: center;
  }
`;
