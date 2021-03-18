import styled from "styled-components";
import FlatButton from "@/components/FlatButton";

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
