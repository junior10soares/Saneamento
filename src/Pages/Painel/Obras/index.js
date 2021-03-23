import React, { useCallback, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {FiXCircle} from 'react-icons/fi';
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../components/DashboardLayout";
import DashboardButton from "../../../components/DashboardButton";
import FlatButton from "../../../components/FlatButton";
import {Container, ActionIcons, ConstructionsList, FilterSection, RegisterButton, Modal, ModalContent, ModalForm, Form, ButtonForm} from './styles';
import { Edit, Delete } from "@material-ui/icons";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { ReactComponent as ListIcon } from "../../../assets/public/list-icon.svg";
import request from "../../../services/api";
import { ReactComponent as ObraIcon } from "../../../assets/public/obras.svg";
import {notify} from '../../../Notification';
import FormContainer from "../../../components/Form/FormContainer";
import FormItem from "../../../components/Form/FormItem";
import { ErrorMessage } from "@hookform/error-message";
import Spacer from "../../../components/Spacer";
import BootstrapInput from "../../../components/BootstrapInput";


const PainelObras = () => {
  const [constructions, setConstructions] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();


  const getConstructions = useCallback(async () => {
    try {
      const response = await request({
        url: "work",
        params: {
          "order[id]": "desc",
        },
      });
      setConstructions(response?.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [constructions]);

  const deleteConstruction = useCallback(async (id) => {
    try {
      await request({
        method: "delete",
        url: `work/${id}`,
      });
      getConstructions();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleModal = () => {
    setOpenModal((state) => !state); 
  }

  useEffect(() => {
    getConstructions();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    // Sample Video
    // https://www.youtube.com/embed/L7OLY4HCctQ
    try {
      const response = await request.post('video', data);

      setLoading(false);
      setModalActive(false);
      if(response.status === 201){
        notify('success', 'Video cadastrado com sucesso')
      }

    } catch (error) {
      setLoading(false);
    }
  };
  

  const hasConstructions = constructions.length > 0;

  return (
    <DashboardLayout title="Lista de Obras">
      <Container>
        <Link to="/painel/obras/create">
          <RegisterButton>Cadastrar Obra</RegisterButton>
        </Link>
        <FilterSection>
          <h3>Filtrar</h3>

          <input type="text" className="large" placeholder="Nome" />
          <input type="text" placeholder="Localização" />

          <DashboardButton disabled={!hasConstructions}>
            Pesquisar
          </DashboardButton>
        </FilterSection>

        <ConstructionsList>
          {constructions.map((construction) => (
            <li>
              <ListIcon />

              <span>{construction.name}</span>
              <span>Volta Redonda</span>

              <ActionIcons>
                <Link to={"/painel/edit/obras/" + construction.uuid}>
                  <Edit />
                </Link>
                <ObraIcon className="obrasIcon" onClick={handleModal} />
                <FlatButton
                  onClick={() => deleteConstruction(construction.uuid)}
                >
                  <Delete className="delete" />
                </FlatButton>
              </ActionIcons>
            </li>
          ))}

          {!hasConstructions && (
            <Link to="/painel/create/obras">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <AddCircleIcon fontSize="large" />

                <span style={{ textAlign: "center" }}>
                  Nenhuma obra cadastrada <br /> clique aqui para cadastrar{" "}
                  <br /> uma nova obra
                </span>
              </div>
            </Link>
          )}
        </ConstructionsList>
      </Container>
    </DashboardLayout>
  );
}

export default PainelObras;