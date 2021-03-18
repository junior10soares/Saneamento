import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputBox, SelectBox } from "../../../styles/styles";
import { Editor } from "@tinymce/tinymce-react";
import DashboardButton from "../../../components/DashboardButton";
import convertToBase64 from "../../../helpers/convertToBase64";
import {notify} from "../../../Notification";
import { format } from "date-fns";
import FlatButton from "../../../components/FlatButton";
import DashboardLayout from "../../../components/DashboardLayout";
import {
  ActionIcons,
  Container,
  NewsList,
  FormNoticia,
  ErrorLabel,
} from "../../../styles/dashboard/noticias";
import { ReactComponent as ListIcon } from "../../../assets/public/list-icon.svg";
import { Edit, Visibility, Delete } from "@material-ui/icons";
import request from "../../../services/api";
import { useForm } from "react-hook-form";



const PainelNoticias = () => {
  const [newIdToUpdate, setNewIdToUpdate] = useState(undefined);
  const [newToUpdate, setNewToUpdate] = useState(undefined);

  const [newsList, setNewsList] = useState([]);
  const [newToShow, setNewToShow] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageInBase64, setImageInBase64] = useState(null);
  const [editorValue, setEditorValue] = useState(null);
  const { register, handleSubmit, setValue, errors, reset } = useForm();
  const [responseError, setResponseError] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const newsResponse = useCallback(() => {
    request.get('news?order[id]=desc').then(({ data }) => setNewsList(data.data));
   }, []);

  useEffect(() => {
    newsResponse()
    const handleNewToUpdate = async () => {
      if (newIdToUpdate) {
        const {
          data: { data: selectedNew },
        } = await request({
          url: `news/${newIdToUpdate}`,
        });


        setValue("title", selectedNew.title);
        setValue("news_categories_uuid", selectedNew.news_categories.uuid);
        setValue("active", selectedNew.active);
        handleEditorChange(selectedNew.description);

        setNewToUpdate(selectedNew);
      }
    };

    handleNewToUpdate();
  }, [newIdToUpdate, setNewToUpdate, setValue, newsResponse]);

  useEffect(() => {
    async function convert() {
      if (uploadedImage) {
        const converted = await convertToBase64(uploadedImage);
        setImageInBase64(converted);
      }
    }

    convert();
  }, [uploadedImage, setImageInBase64]);

  const handleEditorChange = (content, editor) => {
    setValue("description", content);
    setEditorValue(content);
  };

  const resetForm = useCallback(() => {
    reset();
    setNewIdToUpdate(undefined);
    setNewToUpdate(undefined);
    setValue("title", undefined);
    setValue("news_categories_uuid", undefined);
    setValue("active", undefined);
    handleEditorChange(undefined);
  }, [handleEditorChange, setValue, setNewIdToUpdate, setNewToUpdate, reset]);

  const onSubmit = useCallback(
    async (data) => {
      try {
        setLoading(true);
        const now = new Date();

        const publication_date = `${now.getFullYear()}-${
          now.getMonth() + 1
        }-${now.getDate()}`;

        data.img = imageInBase64;

        !newIdToUpdate
          ? (data.publication_date = publication_date)
          : (data.publication_date = newToUpdate.publication_date);

          
   /*      const updated = await request({
          method: newIdToUpdate ? "put" : "post",
          body: data,
          url: newIdToUpdate ? `news/${newIdToUpdate}` : "news",
        }); */
        if(newIdToUpdate){
          const response = await request({
            method: "PUT",
            data: data,
            url: `news/${newIdToUpdate}`
          });
          if(response.status === 200 || response.status === 201){
            notify('success', 'Post atualizado com sucesso!');    
           }
        }else {      
           const response = await request.post('news', data);
           if(response.status === 200 || response.status === 201){
             notify('success', 'Post cadastrado com sucesso!');    
            }
        }




        resetForm();

        setValue("true-img", undefined);
        setValue("img", undefined);
      } catch {
        setResponseError(true);
        setLoading(false);
        notify('error', 'Oops! Houve um erro ao cadastrar, tente novamente!');
      }
    },
    [
      imageInBase64,
      setLoading,
      setResponseError,
      setNewsList,
      formRef,
      setValue,
      setEditorValue,
    ]
  );

  const handleDelete = useCallback(
    async (id) => {
      try {
        await request({ method: "delete", url: `news/${id}` });

        const { data: refreshedNews } = await request({
          url: "news",
          params: { "order[id]": "desc" },
        });
        setNewsList(refreshedNews.data);
      } catch {
        notify('error', 'Oops! Não foi possivel deletar este post, tente novamente!')
      }
    },
    [setNewsList]
  );
  console.log('noticiass',newIdToUpdate?.lenght !== "" ? 'true' : 'false');

  return (
    <DashboardLayout title="Notícias">
      <FormNoticia onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <h3>Cadastrar Notícia</h3>

        <InputBox
          type="text"
          name="title"
          placeholder="Título"
          ref={register({ required: "O título é obrigatório" })}
        /> 

        <SelectBox
          name="news_categories_uuid"
          ref={register({ required: "A categoria da notícia é obrigatória" })}
          defaultValue={newToUpdate?.news_categories.uuid || undefined}
        >
          <option disabled value={undefined}>
            Categoria
          </option>
          <option value="bb7ef7e0-35be-11eb-87bf-b7d2a30b7e17">Eventos</option>
          <option value="bb7ef710-35be-11eb-a4b3-613d04ccb16d">Notícias</option>
        </SelectBox>

        <SelectBox
          name="active"
          ref={register({ required: "O status é obrigatório" })}
          defaultValue={newToUpdate?.active || undefined}
        >
          <option disabled value={undefined}>
            Status
          </option>
          <option value={1}>Ativa</option>
          <option value={0}>Inativa</option>
        </SelectBox>


        <InputBox
          type="file"
          name="true-img"
          accept="image/*"
          ref={!newIdToUpdate ? null : register}
          onChange={(e) => setUploadedImage(e.target.files[0])}
        />

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
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}
        >
          <DashboardButton type="button" onClick={resetForm}>
            Limpar
          </DashboardButton>
          <div style={{ width: 20 }} />
          <DashboardButton type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Salvar"}
          </DashboardButton>
        </div>
      </FormNoticia>
      <Container>
        <NewsList>
          <h3>Lista de Notícias</h3>
          {newsList?.map((noticia) => (
            <li key={noticia.uuid}>
              <ListIcon />
              <span>{noticia.title}</span>
              <span>{noticia.created_at}</span>
              <ActionIcons>
                <FlatButton onClick={() => setNewIdToUpdate(noticia.uuid)}>
                  <Edit />
                </FlatButton>
                <FlatButton onClick={() => handleDelete(noticia.uuid)}>
                  <Delete className="delete" />
                </FlatButton>
              </ActionIcons>
            </li>
          ))}
        </NewsList>
      </Container>
    </DashboardLayout>
  );
}

export default PainelNoticias;
