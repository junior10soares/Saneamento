import React, {useCallback, useRef, useState } from "react";
import {
 Container,
 Center,
 Column,
 Row,
 TitleSection,
 FormItem,
 InputBox,
 SelectBox,
 TextAreaBox,
 Button,
 ButtonLink,
} from "./styles";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorLabel } from "../../styles/theme";
import {notify} from '../../Notification';
import api from '../../services/api';


export function ContactArea() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const { register, handleSubmit, setValue, errors, reset } = useForm();

  const onSubmit = useCallback( async (data) => {
    try {
        setLoading(true);
        const response = await api({
          url: "contact",
          method: "post",
          body: data,
        });

        console.log('response', response)
        if(response.status === 201 || response.status === 200){
            notify('success', 'Formulario enviado com sucesso!');
        }
        reset(response);
      }catch (err) {
        notify('error', 'Oops! Houve um erro ao enviar, tente novamente!');
        setLoading(false);
      }
    },
    [reset]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <Container color="#27AE60" full>
          <Center>
            <TitleSection light center>
              Entre em <strong>contato</strong>
            </TitleSection>
            <Row>
              <Column grid="6">
                <FormItem column>
                  <InputBox
                    placeholder="Nome"
                    type="text"
                    name="name"
                    ref={register({ required: "Nome obrigatório." })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
                  />
                </FormItem>
                <FormItem column>
                  <InputBox
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    ref={register({ required: "E-mail obrigatório." })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
                  />
                </FormItem>
                <FormItem column>
                  <InputBox
                    placeholder="Telefone"
                    type="phone"
                    name="phone"
                    ref={register({ required: "Telefone obrigatório." })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="phone"
                    render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
                  />
                </FormItem>
              </Column>
              <Column grid="6" className="text-right">
                <FormItem column>
                  <SelectBox
                    name="sector"
                    defaultValue={undefined}
                    ref={register({ required: "Categoria obrigatória" })}
                  >
                    <option disabled value={undefined}>
                      Categoria
                    </option>
                    <option value="Macrodrenagem">Macrodrenagem</option>
                    <option value="Sistema de Monitoramento">
                      Sistema de Monitoramento
                    </option>
                    <option value="Resíduos Sólidos">Resíduos Sólidos</option>
                  </SelectBox>

                  <ErrorMessage
                    errors={errors}
                    name="sector"
                    render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
                  />
                </FormItem>
                <FormItem column>
                  <TextAreaBox
                    placeholder="Mensagem"
                    name="message"
                    ref={register({ required: "Mensagem obrigatória." })}
                  />

                  <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
                  />
                </FormItem>
                <Button theme="black" type='submit'>
              {loading ? "Enviando..." : "Enviar"}
            </Button>
              </Column>
            </Row>
          </Center>
        </Container>
      </form>
    </>
  );
}
