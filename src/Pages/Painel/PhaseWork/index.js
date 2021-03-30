import React, { useCallback, useEffect, useRef, useState } from "react";
import  {useParams} from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import {notify} from "../../../Notification";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import DashboardLayout from "../../../components/DashboardLayout";
import {Container, Center, Grafic, Wrapper, ContainerForm, ButtonForm, TitleSection} from './styles';
import api from "../../../services/api";
import GraficCircle from "../../../components/GraficCircle";
import DashboardButton from "../../../components/DashboardButton";



const PhaseWork = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [workPhase, setWorkPhase] = useState([]);
  const form = useRef();


  const workPhaseResponse = useCallback(() => {
    api.get('work-phase').then(({ data }) => setWorkPhase(data.data));
   }, []);

   useEffect(() => {
    workPhaseResponse();
   }, [workPhaseResponse])

   async function handleSubmit(data) {
    try {
      form.current.setErrors({});
       const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório.'),
        description: Yup.string().required('Campo obrigatório.'),
        percentage: Yup.string().required('Campo obrigatório.'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const create = {
        work_uuid: id,
        name: data.name,
        description: data.description,
        percentage: data.percentage
      }

      const response = await api.post('work-phase', create);
      if((await response).status === 201 || (await response).status === 200){
        notify('success', 'Fases da obra cadastrada com sucesso!');
      }

      setWorkPhase(state => [...state, response.data.data]);
  

    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        form.current.setErrors(validationErrors);
      }
      notify('error', 'Oops! Houve um erro ao cadastrar, tente novamente!');
    }
  }

  const handleDelete = useCallback(
    async (id) => {
      try {
        await api({
          url: "work-phase/" + id,
          method: "delete",
        });

        setWorkPhase((currentGrafic) =>
        currentGrafic.filter((current) => current.uuid !== id)
      );
        notify('success', 'Banner removido com sucesso!');

      } catch (err) {
        console.log(err);
        notify('error', 'Houve um erro ao excluir o banner');
      }
    },
    []
  );

  useEffect(() => {
    workPhaseResponse();
  }, [workPhaseResponse])

  return (
    <DashboardLayout title="Obra">
        <h3>Cadastrar Fases da obra</h3>
        <ContainerForm>
        <Form ref={form} onSubmit={handleSubmit}>
          <Wrapper>
          <Input type="text" placeholder="Nome" name="name" />
          <Input type="text" placeholder="Porcetagem da obra" name="percentage" type="number" />
          </Wrapper>
          <Textarea type="text" placeholder="Descrição" name="description" />
          <ButtonForm>
            <DashboardButton type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Salvar"}
            </DashboardButton>
          </ButtonForm>
      </Form>
        </ContainerForm>
        <ContainerForm>
        <Container>
            <Center>
              <TitleSection className="text-center">
                Fases da <strong>obras</strong>
              </TitleSection>
          <Grafic>
          <GraficCircle
           data={workPhase}
            visibleTrash 
            action={handleDelete} 
            />
          </Grafic> 
            </Center>
          </Container>
        </ContainerForm>
        
   
    </DashboardLayout>
  );
}

export default PhaseWork;
