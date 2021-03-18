/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";
import { Container, Arquivo, FileInputButton } from "./styles";

export default function File({
  name,
  label,
  required,
  icon,
  title,
  textButton,
  ...rest
}) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);
  const [attach, setAttach] = useState(undefined);
  

  function handleChange(event) {
    setAttach(event.target.files[0]);
  }

  function handleFile() {
    return inputRef.current.click();
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <Container >
    <input 
    style={{ opacity: 0, position: "absolute" }}
    name={fieldName}
    ref={inputRef}
    defaultValue={defaultValue}
    onChange={handleChange}
    type="file"   
    />
    <span>{attach ? attach.name : title}</span>
    <FileInputButton onClick={handleFile}>{textButton}</FileInputButton>
  </Container>
  );
}
