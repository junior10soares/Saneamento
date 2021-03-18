import styled from 'styled-components';
import FlatButton from '../../../components/FlatButton';
import theme from '../../../GlobalStyle/theme';

export const Container = styled.div`
  position: relative;
  width: 100%;
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

export const DeleteButton = styled(FlatButton)`
  transition: 0.2s;

  &:hover {
    opacity: 0.4;
  }
`;

export const BannerPreview = styled(FlatButton)`
  background-color: #ff0000;
  padding: 0;

  div {
    transition: 0.2s;
    margin: 0;

    &:hover {
      opacity: 0.7;
    }
  }
`;
