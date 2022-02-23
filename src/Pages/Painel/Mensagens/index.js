import React, { useCallback, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {FiXCircle} from 'react-icons/fi';
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../components/DashboardLayout";
import DashboardButton from "../../../components/DashboardButton";
import FlatButton from "../../../components/FlatButton";
import {Container, ActionIcons, ConstructionsList, FilterSection, RegisterButton, Modal, ModalContent, ModalForm, Form, ButtonForm} from './styles';
import { Delete } from "@material-ui/icons";
import { IoCloudOfflineOutline } from "react-icons/io5";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { ReactComponent as ListIcon } from "../../../assets/public/list-icon.svg";
import request from "../../../services/api";



const PainelMensagens = () => {
  const [message, setMessage] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [categoria, setCategoria] = useState([]);


  const getMessage = useCallback(async () => {
    try {
      const response = await request({
        url: "contact",
        params: {
          "order[id]": "desc",
        },
      });
      setMessage(response?.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [message]);

  const getCategoria = useCallback(async () => {
    try {
      const response = await request({
        url: "WorkCategory",
        params: {
          "order[id]": "desc",
        },
      });
      setCategoria(response?.data.data);
    } catch (error) {
      console.log(error);
    }
  }, [categoria]);

  const deleteMessage = useCallback(async (uuid) => {
    try {
      await request({
        method: "delete",
        url: `contact/${uuid}`,
      });
      getMessage();
    } catch (error) {
      console.log(error);
    }
  }, []);

 

  useEffect(() => {
    getMessage();
    getCategoria();
  }, []);


  

  const hasMenssage = message.length > 0;

  return (
    <DashboardLayout title="Lista de Mensagens">
      <Container>
        
        <FilterSection>
          <h3>Filtrar</h3>

          <input type="text" className="large" placeholder="Nome" />
          <input type="text" placeholder="Local" />

          <DashboardButton disabled={!hasMenssage}>
            Pesquisar
          </DashboardButton>
        </FilterSection>

        <ConstructionsList>
          {message.map((message) => (
            <li>
              <ListIcon />
            
              <span>{message.name}</span>
              <span>{message.message}</span>
              <span>{message.email}</span>
              <span>{message.phone}</span>
              
              

              <ActionIcons>
                <FlatButton
                  onClick={() => deleteMessage(message.uuid)}
                >
                  <Delete className="delete" />
                </FlatButton>
              </ActionIcons>
            </li>
          ))}

          {!hasMenssage && (
           
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <IoCloudOfflineOutline fontSize="large" />

                <span style={{ textAlign: "center" }}>
                  Nenhuma mensagem cadastrada <br />{" "}
                  <br /> 
                </span>
              </div>
            
          )}
        </ConstructionsList>
      </Container>
    </DashboardLayout>
  );
}

export default PainelMensagens;