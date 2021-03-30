import React, { useCallback, useEffect, useRef, useState } from "react";
import  {useParams, Link, useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import {notify} from "../../../../Notification";
import Input from "../../../../components/Input";
import Textarea from "../../../../components/Textarea";
import DashboardLayout from "../../../../components/DashboardLayout";
import {Container, Center, Grafic, Wrapper, ContainerForm, ButtonForm, TitleSection, ListButton} from './styles';
import api from "../../../../services/api";
import GraficCircle from "../../../../components/GraficCircle";
import DashboardButton from "../../../../components/DashboardButton";



const PhaseWorkEdit = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [workPhase, setWorkPhase] = useState([]);
  const form = useRef();


  const workPhaseResponse = useCallback(() => {
    api.get(`work-phase/${id}`).then(({ data }) => setWorkPhase(data.data));
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


      const response = await api.put(`${'work-phase'}/${id}`, data);
      if((await response).status === 201 || (await response).status === 200){
        notify('success', 'Fase da obra atualizada com sucesso!');
      } 

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

  useEffect(() => {
    workPhaseResponse();
  }, [workPhaseResponse]);

  const handleBack = () => {
    history.goBack();
  }


  return (
    <>
    <DashboardLayout title="Obra">
          <ListButton className="buttonEdit" onClick={() => history.goBack()}>Voltar</ListButton>
        <h3>Atualizar Fases da obra</h3>
        <ContainerForm>
        <Form ref={form} onSubmit={handleSubmit}
        initialData={{
          name: workPhase.name,
          description: workPhase.description,
          percentage: workPhase.percentage
        }}
        >
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
    </DashboardLayout>
    </>
  );
}

export default PhaseWorkEdit;
