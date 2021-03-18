import React, { useRef, useEffect,useState, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export default function Input({ name, type, label, required, icon, ...rest }) {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFieled, setIsField] = useState(false);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);
  }, []);

  return (
    <Container className="inputRow" isFieled={isFieled} isFocused={isFocused}>
      <label htmlFor={fieldName}>
        {label}
        {required && <span>*</span>}
      </label>
      <input        
        id={fieldName}
        name={fieldName}
        type={type || "text"}
        ref={inputRef}
        defaultValue={defaultValue}
        autoComplete="off"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
      {icon && <button type="submit">{icon}</button>}
      {error && <span className="error">{error}</span>}
    </Container>
  );
}
