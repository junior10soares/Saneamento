import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiXCircle } from "react-icons/fi";
import { useForm } from "react-hook-form";
import DashboardLayout from "../../../components/DashboardLayout";
import DashboardButton from "../../../components/DashboardButton";
import FlatButton from "../../../components/FlatButton";
import {
  Container,
  ActionIcons,
  ConstructionsList,
  FilterSection,
  RegisterButton,
  Modal,
  ModalContent,
  ModalForm,
  Form,
  ButtonForm,
} from "./styles";
import { Delete } from "@material-ui/icons";
import { IoCloudOfflineOutline } from "react-icons/io5";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { ReactComponent as ListIcon } from "../../../assets/public/list-icon.svg";
import request from "../../../services/api";
import { DocumentsList } from "../../../components/DocumentsList";

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

  let listaMensagem = message.concat(categoria);

  const hasMenssage = message.length > 0;

  return (
    <DashboardLayout title="Lista de Mensagens">
      <Container>
        <FilterSection>
          <h3>Filtrar</h3>

          <input type="text" className="large" placeholder="Nome" />
          <input type="text" placeholder="Local" />

          <DashboardButton disabled={!hasMenssage}>Pesquisar</DashboardButton>
        </FilterSection>

        <ConstructionsList>
          {listaMensagem.map((listaMensagem) => (
            <li>
                <DocumentsList>
                <div className="card" style={{marginLeft: 20, marginRight: 12}}>
                  <div>
                    <div className="card-body">
                      <h5 className="card-title"><strong>Nome:</strong> {listaMensagem.name}</h5>
                      <h6 className="card-subtitle"><strong>Email:</strong> {listaMensagem.email}</h6>
                      <h6 className="card-subtitle"><strong>Telefone:</strong> {listaMensagem.phone}</h6>
                      <h6 className="card-subtitle">
                      <strong> Categoria:</strong>  {listaMensagem.work_category.name}
                      </h6>
                      <h6 className="card-subtitle">Mensagem:</h6>
                    </div>
                    <div className="card-text-field" style={{marginLeft: 20, marginRight: 12}} >
                      <p className="card-text">{listaMensagem.message}</p>
                    </div>
                    
                  </div>
                </div>
            </DocumentsList>
                <div className="card-delete">
                  <ActionIcons>
                    <FlatButton onClick={() => deleteMessage(message.uuid)}>
                      <Delete className="delete" />
                    </FlatButton>
                  </ActionIcons>
                </div>
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
                Nenhuma mensagem cadastrada <br /> <br />
              </span>
            </div>
          )}
        </ConstructionsList>
      </Container>
    </DashboardLayout>
  );
};

export default PainelMensagens;
