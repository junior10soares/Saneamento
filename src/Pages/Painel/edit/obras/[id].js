import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import MapComponent from "@/components/FormMap";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardButton from "@/components/DashboardButton";
import FlatButton from "@/components/FlatButton";
import convertToBase64 from "@/helpers/convertToBase64";

import { Delete } from "@material-ui/icons";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from "@material-ui/core/StepLabel";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ReactComponent as ListIcon } from "../../../../public/list-icon.svg";

import request from "@/services/api";

import { withStyles } from "@material-ui/core/styles";

import BootstrapInput from "@/components/Input/BootstrapInput";
import FileInput from "@/components/FileInput";

import { useRouter } from "next/router";

import {
  Container,
  ListButton,
  Form,
  CheckBoxContainer,
  ConstructionProgressContainer,
  MapContainer,
  DocumentsContainer,
  DocumentList,
  Document,
  ActionIcons,
  FormItem,
  ErrorLabel,
} from "@/styles/dashboard/create/obras";

export async function getServerSideProps(context) {
  const {
    params: { id },
  } = context;

  const constructionResponse = await request({ url: `work/${id}` });
  const categoriesResponse = await request({ url: "work-category" });

  return {
    props: {
      construction: constructionResponse?.data.data,
      categories: categoriesResponse?.data.data,
    },
  };
}

export default function Obras({ construction, categories }) {
  const router = useRouter();

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageInBase64, setImageInBase64] = useState(null);

  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [documentsInBase64, setDocumentsInBase64] = useState([]);

  const [loading, setLoading] = useState(false);

  const [activeStep, setActiveStep] = useState(0);
  const [categoryId, setCategoryId] = useState(construction.work_category.uuid);
  const [location, setLocation] = useState({
    lat: construction.work_coordinates[0].lat,
    lng: construction.work_coordinates[0].long,
  });

  const { register, handleSubmit, setValue, errors } = useForm();

  function getSteps() {
    return [
      "Inicio",
      "10%",
      "20%",
      "30%",
      "40%",
      "50%",
      "60%",
      "70%",
      "80%",
      "90%",
      "Finalizado",
    ];
  }

  const steps = getSteps();

  //Detects image upload

  useEffect(() => {
    async function convert() {
      if (uploadedImage) {
        const converted = await convertToBase64(uploadedImage);
        setImageInBase64(converted);
      }
    }

    convert();
  }, [uploadedImage, setImageInBase64]);

  //Detects documents upload

  useEffect(() => {
    async function convert() {
      if (uploadedDocuments.length) {
        const converted = Promise.all(
          uploadedDocuments.map(async (doc) => {
            return await convertToBase64(doc);
          })
        );

        setDocumentsInBase64(converted);
      }
    }

    convert();
  }, [uploadedDocuments, setDocumentsInBase64]);

  useEffect(() => {
    const {
      name,
      img,
      work_fase,
      description,
      whatsapp,
      whatsapp_active,
    } = construction;

    setValue("name", name);
    setValue("work_categories_uuid", construction.work_category.uuid);
    setValue("work_fase", work_fase);
    setValue("description", description);
    setValue("whatsapp", whatsapp);
    setValue("whatsapp_active", whatsapp_active);
    setValue("work_location", {
      lat: construction.work_coordinates[0].lat,
      lng: construction.work_coordinates[0].long,
    });

    setActiveStep(work_fase);
    setImageInBase64(img);
  }, [construction, setValue, setActiveStep, setImageInBase64]);

  const handleStep = (step) => () => {
    setActiveStep(step);
    setValue("work_fase", step);
  };

  const handleMapClick = useCallback(
    (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      setValue("work_location", { lat, lng });
      setLocation({ lat, lng });
      return { lat, lng };
    },
    [setValue, location]
  );

  const sendCoordinates = useCallback(
    async ({ uuid, name }) => {
      try {
        await request({
          method: "post",
          url: "work-coordinate",
          body: {
            works_uuid: uuid,
            name: name,
            lat: location.lat,
            long: location.lng,
            reference: "reference",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    [location]
  );

  const Connector = withStyles({
    active: {
      "& $line": {
        backgroundColor: "#27AE60",
      },
    },
    completed: {
      "& $line": {
        backgroundColor: "#27AE60",
      },
    },
    line: {
      height: 4,
      border: 0,
      backgroundColor: "#E5E5E5",
      borderRadius: 1,
    },
  })(StepConnector);

  const onSubmit = useCallback(
    async (data) => {
      setLoading(true);
      try {
        imageInBase64 ? (data.img = imageInBase64) : undefined;

        data.work_fase = Number(data.work_fase);
        data.work_categories_uuid = categoryId;

        documentsInBase64.forEach((doc, index) => {
          data[`documents[${index}][file]`] = doc;
          data[`documents[${index}][name]`] = uploadedDocuments[index].name;
        });

        const response = await request({
          method: "put",
          url: "work/" + construction.uuid,
          body: data,
        });

        await sendCoordinates(response.data.data);

        router.push("/dashboard/obras");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [categoryId, location, imageInBase64]
  );

  return (
    <DashboardLayout title="Obras">
      <Container>
        <Link href="/dashboard/obras">
          <ListButton>Lista de Obras</ListButton>
        </Link>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>Cadastrar</h3>

          <FormItem>
            <FormItem column>
              <BootstrapInput
                name="name"
                placeholder="Nome"
                inputRef={register({ required: "Nome obrigatório" })}
                style={{ width: "100%" }}
                fullWidth
              />

              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
              />
            </FormItem>

            <FormItem column>
              <FileInput
                id="img"
                name="img"
                type="file"
                accept="image/*"
                ref={register}
                onChange={(e) => setUploadedImage(e.target.files[0])}
                title={
                  uploadedImage
                    ? uploadedImage.name
                    : "Selecionar foto de capa caso deseje substituir"
                }
                textButton="Selecionar"
              />

              <ErrorMessage
                errors={errors}
                name="img"
                render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
              />
            </FormItem>
          </FormItem>

          <FormItem column>
            <textarea
              name="description"
              placeholder="Descrição"
              ref={register({ required: "Descrição obrogatória." })}
              style={{ width: "96.5%" }}
            />

            <ErrorMessage
              errors={errors}
              name="description"
              render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
            />
          </FormItem>

          <FormItem>
            <FormItem column>
              <BootstrapInput
                name="whatsapp"
                type="text"
                placeholder="Whatsapp"
                inputRef={register({ required: "Whatsapp é obrigatório" })}
                fullWidth
              />

              <ErrorMessage
                errors={errors}
                name="whatsapp"
                render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
              />
            </FormItem>

            <FormItem column>
              <CheckBoxContainer>
                <input
                  type="checkbox"
                  name="whatsapp_active"
                  id="exibir"
                  ref={register}
                />
                <label for="exibir">Exibir</label>
              </CheckBoxContainer>
            </FormItem>

            <FormItem>
              {/* <Select
                labelId="work_categories_uuid"
                id="work_categories_uuid"
                name="work_categories_uuid"
                inputRef={register({ required: true })}
                value={categoryId}
                onChange={(event) => {
                  setCategoryId(event.target.value);
                  setValue("work_categories_uuid", event.target.value);
                }}
                placeholder="Selecionar Categoria"
                input={<BootstrapInput fullWidth />}
              >
                <MenuItem value="" disabled selected>
                  <em>Selecionar Categoria</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem value={category.uuid}>{category.name}</MenuItem>
                ))}
              </Select> */}

              <select
                name="work_categories_uuid"
                id="work_categories_uuid"
                ref={register({ required: true })}
                value={categoryId}
                defaultValue={categoryId}
                onChange={(event) => {
                  setCategoryId(event.target.value);
                  setValue("work_categories_uuid", event.target.value);
                }}
                placeholder="Selecionar Categoria"
              >
                <option value="" disabled>
                  Selecionar Categoria
                </option>
                {categories.map((category) => (
                  <option value={category.uuid}>{category.name}</option>
                ))}
              </select>
            </FormItem>
          </FormItem>

          <ConstructionProgressContainer>
            <h3>Fase da Obra</h3>

            <input
              name="work_fase"
              hidden
              ref={register({ required: "Fase da obra é obrigatória" })}
            />

            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<Connector />}
            >
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel
                      onClick={handleStep(index)}
                      completed={activeStep >= index}
                      icon={
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor:
                              activeStep >= index ? "#27AE60" : "#E5E5E5",
                          }}
                        />
                      }
                    >
                      {activeStep === index && <p>{label}</p>}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </ConstructionProgressContainer>

          {/* <AddVideoContainer>
            <h3>Vídeos</h3>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <GalleryVideoItem />
              <Spacer />
              <GalleryAddItem type="video" action={handlePickVideo} />
            </div>

            <Spacer size={60} />
          </AddVideoContainer> */}

          <MapContainer>
            <input
              name="work_location"
              hidden
              ref={register({ required: "Local da obra é obrigatório" })}
            />
            <MapComponent handleMouseClick={handleMapClick} />

            <ErrorMessage
              errors={errors}
              name="work_location"
              render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
            />
          </MapContainer>

          <DocumentsContainer>
            <h3>Documentos da Obra</h3>

            <FormItem column>
              <FileInput
                accept=".pdf"
                multiple
                onChange={(e) =>
                  setUploadedDocuments(Array.from(e.target.files))
                }
                name="work_documents"
                id="work_documents"
                type="file"
                ref={register({ required: "Documento obrigatório" })}
                title="Selecionar os arquivos..."
                textButton="Selecionar"
              />

              <ErrorMessage
                errors={errors}
                name="work_documents"
                render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
              />
            </FormItem>

            <DocumentList>
              {uploadedDocuments &&
                uploadedDocuments.map((document) => (
                  <Document>
                    <ListIcon />
                    <span>{document.name}</span>
                    <ActionIcons>
                      <FlatButton>
                        <Delete className="delete" />
                      </FlatButton>
                    </ActionIcons>
                  </Document>
                ))}
            </DocumentList>
          </DocumentsContainer>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <DashboardButton type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Salvar"}
            </DashboardButton>
          </div>
        </Form>
      </Container>
    </DashboardLayout>
  );
}
