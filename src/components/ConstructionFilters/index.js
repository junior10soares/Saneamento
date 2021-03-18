import request from "../../services/api";
import React, { Fragment, useCallback, useState } from "react";
import WorkCarousel from "../WorkCarousel";
import { useForm } from "react-hook-form";
import Select from '../../components/Select';
import { Form } from '@unform/web';
import Input from '../Input';
import Button from '../Button';
import {
  Container,
  Content,
  Row,
  TitleObras,
  Column,
  SelectBox,
  InputBox,
} from "./styles";
import { CardConstruction } from "../CardConstruction";
export function ConstructionFilters({ constructions, locations, categories }) {
  const [constructionsToShow, setConstructionsToShow] = useState(constructions);

  const onSubmit = useCallback(async (params) => {
    const response = await request({
      url: "work",
      params: {
        ...params,
        "order[id]": "desc",
      },
    });
    const { data } = response.data;
    setConstructionsToShow(data);
  }, []);

  return (
    <>
      <Content>
        <TitleObras>
          Obras em <strong>andamento</strong>
        </TitleObras>
        {/*   <Form>
            <Row>
              <Column grid="4">
                <Input
                  type="text"
                  name="name"
                  placeholder="O que deseja procurar ?"
                />
              </Column>
              <Column grid="3">
                <Select name="work_coordinate">
                  <option disabled selected>
                    Localidade
                  </option>
                  {locations?.map((location) => (
                    <option value={location.uuid}>{location.name}</option>
                  ))}
                </Select>
              </Column>
              <Column grid="2">
                <Select name="work_categories_uuid">
                  <option disabled selected>
                    Categoria
                  </option>
                  {categories.map((category) => (
                    <option value={category.uuid}>{category.name}</option>
                  ))}
                </Select>
              </Column>
              <Column grid="2">
              <Button  label="Voltar" full width="150px" />
              </Column>
            </Row>
          </Form> */}
        <Container>
          <Row>
            <WorkCarousel />
          </Row>
        </Container>
      </Content>
    </>
  );
}
