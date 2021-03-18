import { useState, useCallback, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, FormError, InputBox, Button} from "./styles";
import {Form} from '@unform/web';
import * as Yup from "yup";
import { useAuth } from "../../../../hooks/auth";
import logo from '../../../../assets/public/imagens/header/logo.svg';
import Input from "../../../../components/Input";
import {notify} from '../../../../Notification'
const Login = () => {
  const history = useHistory();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();


  const handleSubmit = useCallback(async (data) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const shema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-email válido'),
          password: Yup.string()
            .required('Senha obrigatória'),
        });
        await shema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push("/painel/obras");  
        setLoading(false);
        notify('success', 'Bem vindo!')

      } catch (err) {
        const validationErrors = {};
        if (err instanceof Yup.ValidationError) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
          formRef.current.setErrors(validationErrors);
        }
        notify('error', 'Ocorreu um erro ao fazer login, verifique os dados')
      }
    },
    [signIn, notify]
    );
    
    return (
    <>     
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Container>
          <Card>
            <img src={logo} width="120" height="120" />    
            <Input
              placeholder="E-mail"
              type="email"
              name="email"
            />
            <Input
              placeholder="Senha"
              type="password"
              name="password"
            />
            <Button theme="secondary" full type='submit'>
              {loading ? "Enviando..." : "Acessar"}
            </Button>
          </Card>
        </Container>
      </Form>
    </>
  );
}

export default Login;
