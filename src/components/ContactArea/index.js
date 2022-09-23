import React, {useCallback, useRef, useState, useEffect } from "react";
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
import { FaRegHandPointRight } from 'react-icons/fa';
import carregar from "../../assets/public/imagens/Home/carregar.png";


export function ContactArea() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const formRef = useRef(null);
  const { register, handleSubmit, setValue, errors, reset } = useForm();

  const onSubmit = useCallback( async (data) => {
     console.log(data)
    try {
        setLoading(true);
        const response = await api.post('contact', {
          name: data.name,
          email: data.email,
          phone: data.phone,
          work_categories_id: data.work_categories_id,
          message: data.message
        });

        console.log('response', response)
        if(response.status === 201 || response.status === 200){
            notify('success', 'Formulario enviado com sucesso!');
        }
        reset(response);
        setLoading(false);
      }catch (err) {
        console.log(err)
        notify('error', 'Oops! Houve um erro ao enviar, tente novamente!');
        setLoading(false);
      }
    },
    [reset]
  );

  const getCategoryList = useCallback(async () => {
    setLoading(true);
    try {
      const lista = await api.get('work-category').then(({ data }) => {
        //console.log(data.data)
        setCategories(data.data);
        //console.log('categories',categories);
      });

      setLoading(false);
    } catch (err) {
      notify('error', 'Falha ao buscar lista de Categorias. Tente mais tarde!');
      setLoading(false);
      getCategoryList([]);
    }
  }, []);

  useEffect(() => {
    getCategoryList();
  }, []);

  //setTimeout(() => {console.log("ctg", categories)}, 5000);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <Container color="#27AE60" full>
          <Center>
            <TitleSection light center>
            {/*<a>
            Entre em <strong>contato</strong>
            </a>
           <a 
              className="mailto" href="mailto:comunicacao@semasa.sp.gov.br">
              <button style={{
                  fontWeight: "bold",
                  fontSize: 40,
                  textDecorationLine: "none",
                  backgroundColor: "transparent",
                  borderStyle:"none",
                  borderColor: "white",
                  borderRadius:10,
                  color:"white",                  
                  padding: 10
                }} type="button">
              <FaRegHandPointRight size={29} /> Entre em contato </button>
              </a> */}
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
                    name="work_categories_id"
                    defaultValue={undefined}
                    ref={register({ required: "Categoria obrigatória" })}
                  >
                    <option disabled value={undefined}>
                      Categoria
                    </option>
                    {/* <option value="2">Macrodrenagem</option>
                    <option value="3">
                      Sistema de Monitoramento
                    </option>
                    <option value="1">Resíduos Sólidos</option> */}
                    {categories.map(item => (
                      <option value={item.uuid}>{item.name}</option>
                    ))}
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
                <img
                    className="icon-carregar"
                    style={{ height: 30, width: 30 }}
                    src={carregar}
                  />
              {loading ? "Enviando..." : "Enviar"}
            </Button>
              </Column>
            </Row> 
             {/*<div>
              <Row>
                <span style={{
                  fontWeight: "bold",
                  color: "white",
                  marginRight: 5
                }}>Email:</span>
              <a className="mailto" href="mailto:comunicacao@semasa.sp.gov.br" target="_blank">Comunicação Semasa</a>
              </Row>
              </div> */}
          </Center>
        </Container>
      </form>
    </>
  );
}
