import { useState, useCallback, useEffect, useRef } from "react";
import {Link, useHistory} from "react-router-dom";
import MapComponent from "../../../../components/FormMap";
import DashboardLayout from "../../../../components/DashboardLayout";
import DashboardButton from "../../../../components/DashboardButton";
import FlatButton from "../../../../components/FlatButton";
import convertToBase64 from "../../../../helpers/convertToBase64";
import {notify} from "../../../../Notification";
import { Editor } from "@tinymce/tinymce-react";
import { Delete } from "@material-ui/icons";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepConnector from "@material-ui/core/StepConnector";
import StepLabel from "@material-ui/core/StepLabel"
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { ReactComponent as ListIcon } from "../../../../assets/public/list-icon.svg";
import request from "../../../../services/api";
import { withStyles } from "@material-ui/core/styles";

import BootstrapInput from "../../../../components/BootstrapInput";
import FileInput from "../../../../components/FileInput";

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
} from "../../../../styles/dashboard/create/obras";



export default function ObrasCreate() {
  const router = useHistory();

  const [uploadedImage, setUploadedImage] = useState(undefined);
  const [imageInBase64, setImageInBase64] = useState(undefined);
  const [editorValue, setEditorValue] = useState(null);
  const [uploadedDocuments, setUploadedDocuments] = useState(undefined);
  const [documentsInBase64, setDocumentsInBase64] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [categories, setCategories] = useState([]);
  const imageRef = useRef(null);
  const docRef =  useRef(null);

  const categoriesRequest = useCallback(() => {
    request.get('work-category').then(({ data }) => setCategories(data.data));
   }, [])

   useEffect(() => {
    categoriesRequest();
   }, [categoriesRequest])

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

  const convertBase64 = (arquivo) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(arquivo);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  async function handleFileChange(event) {
    event.preventDefault();
    const { name } = event.target;

    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    if (name === "img") {
      setUploadedImage(base64);
      setImageInBase64(file);
    }

    if (name === "work_documents") {
      setUploadedDocuments(base64);
      setDocumentsInBase64(file);
    }
  }

  function handleImage() {
    return imageRef.current.click();
  }

  function handleDocFile() {
    return docRef.current.click();
  }

  const handleEditorChange = (content, editor) => {
    setValue("description", content);
    setEditorValue(content);
  };



/*   useEffect(() => {
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
      if (uploadedDocuments) {
        const converted = await convertToBase64(uploadedDocuments);
        setDocumentsInBase64(converted);
      }
    }

    convert();
  }, [uploadedDocuments, setDocumentsInBase64]); */

  const { register, handleSubmit, setValue, errors } = useForm();

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
        notify('error', 'Oops! Não foi possivel pegar as coordenadas, tente novamente!');

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
      try {
        setLoading(true);
        data.img = uploadedImage;
        data.work_documents = uploadedDocuments;
        data.work_fase = Number(data.work_fase);
        data.work_categories_uuid = categoryId;

        const response = await request.post('work', data);        
        await sendCoordinates(response.data.data);

        if(response.status === 200 || response.status === 201){
          notify('success', 'Obra cadastrada com sucesso!');
        }

        router.push("/painel/obras");
      } catch (error) {
        setLoading(false);
        notify('error', 'Oops! Houve um erro ao cadastrar, tente novamente!');

      }
    },
    [categoryId, location]
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
                ref={imageRef}
                onChange={handleFileChange}
                title={
                  uploadedImage ? uploadedImage.name : "Selecionar foto de capa"
                }
                textButton="Selecionar"
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

          <FormItem column>
          <input type="text" hidden name="description" ref={register} />
            <Editor
              apiKey="jmxkgsh5p1wvnnjxdghns4la6w678kpcz905navyed34m8t6"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
              }}
              onEditorChange={handleEditorChange}
              value={editorValue}
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
                onChange={(event) => {
                  setCategoryId(event.target.value);
                  setValue("work_categories_uuid", event.target.value);
                }}
                placeholder="Selecionar Categoria"
              >
                <option value="" disabled selected>
                  Selecionar Categoria
                </option>
                {categories?.map((category) => (
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
              {steps?.map((label, index) => {
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
             name="work_documents"
             id="work_documents"
             type="file"
             accept=".pdf"
             ref={register({ required: "Documento obrigatório" })}
             onChange={handleFileChange}
             title={
              uploadedDocuments ? uploadedDocuments.name : "Selecione o arquivo..."
             }
             textButton="Selecionar"
              />             
              <ErrorMessage
                errors={errors}
                name="work_documents"
                render={({ message }) => <ErrorLabel>{message}</ErrorLabel>}
              />
            </FormItem>  
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
