import React, {useState, useRef, useEffect, useCallback} from "react";
import {Form} from '@unform/web';
import * as Yup from "yup";
import {notify} from '../../../Notification'
import { useForm } from "react-hook-form";
import FormItem from "../../../components/Form/FormItem";
import FormContainer from "../../../components/Form/FormContainer";
import DashboardButton from "../../../components/DashboardButton";
import Spacer from "../../../components/Spacer";
import Switch from "@material-ui/core/Switch";
import Input from "../../../components/Input";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorLabel } from "../../../styles/theme";


function SendVideoForm({  loading, onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  const [active, setActive] = React.useState(false);

  const urlPattern = {
    value:
      "^(https?:\\/\\/)?" + // protocol
      "((([a-zA-Z\\d]([a-zA-Z\\d-]{0,61}[a-zA-Z\\d])*\\.)+" + // sub-domain + domain name
      "[a-zA-Z]{2,13})" + // extension
      "|((\\d{1,3}\\.){3}\\d{1,3})" + // OR ip (v4) address
      "|localhost)" + // OR localhost
      "(\\:\\d{1,5})?" + // port
      "(\\/[a-zA-Z\\&\\d%_.~+-:@]*)*" + // path
      "(\\?[a-zA-Z\\&\\d%_.,~+-:@=;&]*)?" + // query string
      "(\\#[-a-zA-Z&\\d_]*)?$", // fragment locator,
    message: "Insira uma url válida",
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} style={{ minWidth: 500 }}>
      <FormItem column>
        <input
          name="name"
          placeholder="Nome"
          ref={register({ required: "Nome obrigatório" })}
        />

        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
        />
      </FormItem>

      <Spacer />

      <FormItem column>
        <input
          name="url"
          placeholder="URL do Vídeo"
          ref={register({
            required: "URL do vídeo obrigatória",
            pattern: urlPattern,
          })}
        />

        <ErrorMessage
          errors={errors}
          name="url"
          render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
        />
      </FormItem>

      <Spacer />

      <FormItem justify="flex-start">
        <span style={{ color: "#838383" }}>Vídeo Ativo</span>
        <Switch
          checked={active}
          onClick={() => setActive(!active)}
          name="active"
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          inputRef={register({ required: false })}
        />
      </FormItem>

      <Spacer />

      <DashboardButton type="submit" disabled={loading}>
        {loading ? "Enviando..." : "Cadastrar Vídeo"}
      </DashboardButton>
    </FormContainer>
  );
}

export default SendVideoForm;
