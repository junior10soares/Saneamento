import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const Header = styled.head`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 32px;
  right: 56px;

  img {
    height: 42px;
    width: 42px;
    border-radius: 21px;
  }

  span {
    margin-left: 16px;
    color: #011f3b;
    font-weight: bold;
  }

  svg {
    margin-left: 16px;
  }
`;

export const SideBar = styled.aside`
  width: 242px;
  height: 100%;
  padding: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  ul {
    margin-top: 32px;
    width: 100%;
    padding: 0 0 0 48px;
    list-style-type: none;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    li {
      width: 100%;
      padding: 14px 0;

      a {
        transition: 0.1s;
        padding: 14px 0;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #272829;

        > span {
          font-size: 16px;
          margin-left: 24px;
        }

        svg {
          transition: 0.1s;
        }

        &.inactive {
          svg {
            fill: #c7cadd;
          }
        }

        &:hover,
        &.active {
          border-right: 4px solid #5e81f4;
          color: #5e81f4;

          svg {
            fill: #5e81f4;
          }
        }
      }
    }
  }
`;

export const Content = styled.main`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 120px;

  h2 {
    font-size: 28px;
  }
`;

export const Modal = styled.div`
position: absolute !important;
z-index: 1300 !important;
height: 110px;
opacity: 1;
    transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    top: 87px;
    right: 163px;
    transform-origin: -16px 26px;
    width: 133px;
    padding-top: 8px;
    padding-bottom: 8px;   
    padding-left: 16px;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
    ul {
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    width: 138px;

    li{
      width: auto;
    overflow: hidden;
    font-size: 1rem;
    box-sizing: border-box;
    min-height: 48px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    padding-top: 6px;
    white-space: nowrap;
    letter-spacing: 0.00938em;
    padding-bottom: 6px;
    }
    }

`;

