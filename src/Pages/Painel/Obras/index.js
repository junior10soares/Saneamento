import React, { useCallback, useEffect, useState } from "react";
import {Link} from "react-router-dom";
import DashboardLayout from "../../../components/DashboardLayout";
import DashboardButton from "../../../components/DashboardButton";
import FlatButton from "../../../components/FlatButton";
import {Container, ActionIcons, ConstructionsList, FilterSection, RegisterButton} from './styles';
import { Edit, Delete } from "@material-ui/icons";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { ReactComponent as ListIcon } from "../../../assets/public/list-icon.svg";
import request from "../../../services/api";

const PainelObras = () => {
  const [constructions, setConstructions] = useState([]);

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

  useEffect(() => {
    getConstructions();
  }, []);

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