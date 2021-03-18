import React from "react";
import { Form } from "./styles";

function FormContainer({ children, ...props }) {
  return <Form {...props}>{children}</Form>;
}

export default FormContainer;
