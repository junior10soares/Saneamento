import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 16px;

  .react-select__control {
    border-radius: 4px;
  }

  .react-select__single-value {
    font-family: 'PoppinsSemiBold', sans-serif;
  }

  input {
    color: #586365;
  }

  &:last-child {
    margin-right: 0;
  }

  label {
    font-family: 'PoppinsSemiBold', sans-serif;
    font-size: 15px;
    color: #000000;
    margin-bottom: 8px;
  }

  span.danger {
    font-size: 14px;
    font-family: 'PoppinsSemiBold', sans-serif;
    color: #ff0000;
    margin: 4px 0;
  }

  span.error {
    font-size: 14px;
    font-family: 'MuseoSans700', sans-serif;
    color: #ff0000;
    margin: 4px 0;
  }
`;
