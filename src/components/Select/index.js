/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import ReactSelect from 'react-select';
import { useField } from '@unform/core';
import { Container } from './styles';

export const selectCustomStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: `1px #ddd solid`,
    color: '#000',
    backgroundColor: '#fff',
    padding: 16,
    fontFamily: 'PoppinsSemiBold',
    fontSize: 14,
    boxSizing: 'border-box',
    outline: 'none',
  }),
  input: provided => ({
    ...provided,
    padding: 16,
    fontSize: 14,
    margin: 0,
  }),
  container: provided => ({
    ...provided,
    padding: 0,
  }),
  valueContainer: provided => ({
    ...provided,
    padding: 0,
  }),
  placeholder: provided => ({
    ...provided,
    marginLeft: 16,
    fontSize: 14,
    padding: 0,
  }),
  control: provided => ({
    ...provided,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 2,
    boxSizing: 'border-box',
    backgroundColor: '#fafafa',
    boxShadow: '0 3px 12px rgba(0, 0, 0, 0.075)',
    height: 48,
    outline: 'none',
  }),
  singleValue: provided => ({
    ...provided,
    marginLeft: 16,
    fontSize: 14,
  }),
  indicatorsContainer: provided => ({
    ...provided,
    fontSize: 10,
    color: '#ccc',
  }),
};

export default function Select({
  style,
  name,
  label,
  classError,
  required,
  isMulti = false,
  ...rest
}) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [name, fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <label htmlFor={fieldName}>
        {label}
        {required && <span className="danger">*</span>}
      </label>
      <ReactSelect
        name={fieldName}
        styles={style || selectCustomStyles}
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        isMulti={isMulti}
        {...rest}
      />
      {error && <span className={`${classError || 'danger'}`}>{error}</span>}
    </Container>
  );
}
