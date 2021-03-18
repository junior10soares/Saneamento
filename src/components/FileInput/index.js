import { Container, FileInputButton } from "./styles";

function FileInput({ title, textButton, ...props }) {
  return (
    <Container>
      <input {...props} style={{ opacity: 0, position: "absolute" }} />

      <span>{title}</span>

      <FileInputButton>{textButton}</FileInputButton>
    </Container>
  );
}

export default FileInput;
