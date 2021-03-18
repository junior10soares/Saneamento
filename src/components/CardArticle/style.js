import styled, {css} from "styled-components";
import theme from "../../styles/theme";

export const Card = styled.article`

   display: inline-block;
    /* ${({ full }) => (full ? css`width: 92%;` : css`width: 32%; margin-left: 16px;`)}; */
    ${(props) =>
      props.full === "small"
        ? css`
            width: 32% !important;
            margin-left: 16px;
          `
        : css`
            width: 0;
          `
          }

    ${(props) =>
      props.full === "column"
        ? css`
            width: 100% !important;
          `
        : css`
            width: 0;
          `
          }
    ${(props) =>
      props.full === "slider"
        ? css`
            width: 92% !important;
          `
        : css`
            width: 0;
          `
          }
    min-height: 286px;
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

  @media(max-width: 411px){
    width: 95% !important;
    margin: 8px auto;
  }

  @media(max-width: 414px){
    width: 95% !important;
    margin: 8px auto;
  }
  @media(max-width: 360px){
    width: 95% !important;
    margin: 8px auto;
  }
  @media(max-width: 320px){
    width: 95% !important;
    margin: 8px auto;
  }
`;

export const Title = styled.h2`
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

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  opacity: 0.7;
  display: block;
`;

export const Badge = styled.span`
 display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  font-size: 12px;
  color: #ffffff;
  margin-bottom: 8px;
  border-radius: 30px;
  padding: 10px 15px;
`;

export const Description = styled.p(props => ({
  maxWidth: props.maxWidth+'ch',
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap" 
}));
