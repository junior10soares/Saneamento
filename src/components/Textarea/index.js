import React, { useEffect, useRef, useState, useCallback } from "react";
import { useField } from "@unform/core";
import { Container } from "./styles";

const Textarea = ({ name, label, required, margin, ...rest }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFieled, setIsField] = useState(false);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  return (
    <Container margin={margin} isFieled={isFieled} isFocused={isFocused}>
      <label htmlFor={fieldName}>
        {label}
        {required && <span>*</span>}
      </label>
      <textarea
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Container>
  );
}

export default Textarea
