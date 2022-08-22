import React from 'react';
import { Container } from './styles';

export default function DashboardButton({
  children,
  onClick,
  style,
  ...props
}) {
  return (
    <Container style={style} onClick={onClick} {...props}>
      {children}
    </Container>
  );
}
