import { Container } from "./style.js";

export default function FlatButton({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
