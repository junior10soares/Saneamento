import React from "react";
import { FiLoader } from "react-icons/fi";
import { Container } from "./styles";

export default function Button({
  btType,
  label,
  action,
  type,
  icon,
  full,
  width,
  loading,
}) {
  return (
    <Container
      btType={btType}
      onClick={action}
      type={type || "button"}
      icon={!!icon}
      full={full}
      width={width}
      className="defaultButton">
      {loading && <FiLoader size={20} className="icon-spin" />}
      {!loading && label}
      {icon && icon}
    </Container>
  );
}
