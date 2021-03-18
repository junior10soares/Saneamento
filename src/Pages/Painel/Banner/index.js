import { Fragment, useCallback, useEffect, useState, useRef } from "react";
import request, {baseURL} from "../../../services/api";
import {Container, Row, BannerPreview, DeleteButton} from './styles';
import DashboardLayout from "../../../components/DashboardLayout";
import DashboardButton from "../../../components/DashboardButton";
import { GalleryBannerItem } from "../../../components/GalleryBannerItem";
import { notify } from "../../../Notification";
import { GalleryAddItem } from "../../../components/GalleryAddItem";
import { Spacer } from '../../../components/Spacer';
import Paper from "@material-ui/core/Paper";
import { format } from "date-fns";


const Banner = () => {
  const [bannersToShow, setBannersToShow] = useState([]);
  const [based64Images, setBased64Images] = useState([]);

  const bannerRequest = useCallback(() => {
    request.get('banner?order[id]=desc').then(({ data }) => setBannersToShow(data.data));
   }, []);

   useEffect(() => {
    bannerRequest()
   }, [bannerRequest, bannersToShow])

  const removeImage = useCallback((image) => {
    setBased64Images((uploadedImages) => {
      return uploadedImages.filter((img) => img !== image);
    });
  });

  const convertToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });

  const handlePickBanner = async () => {
    const inputImage = document.getElementById("gallery-file");
    const based64 = await convertToBase64(inputImage.files[0]);
    setBased64Images((alreadyPicked) => [...alreadyPicked, based64]);
  };

  const handleDeleteBanner = useCallback(
    async (id) => {
      try {
        await request({
          url: "banner/" + id,
          method: "delete",
        });

        setBannersToShow((currentBanners) =>
          currentBanners.filter((banner) => banner.uuid !== id)
        );
        notify('success', 'Banner removido com sucesso!');

      } catch (err) {
        console.log(err);
        notify('error', 'Houve um erro ao excluir o banner');
      }
    },
    []
  );

  const refreshBanners = useCallback(async () => {
    const response = await request({
      url: "banner",
      params: {
        "order[id]": "desc",
        paginate: false,
      },
    });

    setBannersToShow(response.data.data);
  }, [setBannersToShow]);

  const handleSendBanner = async () => {
    try {
      if(based64Images.length === 0){
        notify('error', 'Oops!, Selecione uma imagem!');
        return null;
      }
      const responses = Promise.all(
        based64Images.map((file) => {
          console.log('file',file)
          request({
            method: "post",
            url: "banner",
            data: {
              file,
              publication_date: format(new Date(), "yyyy-MM-dd"),
              active: true,
            },
          });
        })
      );

      setBased64Images([]);
      notify('success', 'Banner cadastrado com sucesso!');
    
      await refreshBanners();
    } catch (error) {
      notify('error', 'Houve um erro ao Cadastrar, tente novamente!');
    }
  };

  return (
    <DashboardLayout title="Banner">
      <Container>
        <Paper elevation={3} style={{ padding: 20 }}>
          <h3 style={{ fontSize: 20 }}>Cadastrar Banner</h3>

          <h4>Clique na imagem para removê-la</h4>

          <div style={{ display: "flex", flexDirection: "row" }}>
            {based64Images.map((image, index) => (
              <Fragment key={index}>
                <DeleteButton onClick={() => removeImage(image)}>
                  <GalleryBannerItem src={image} />
                </DeleteButton>
                <Spacer />
              </Fragment>
            ))}
            <Spacer />
            <GalleryAddItem
              type="file"
              accept=".png,.jpg"
              action={handlePickBanner}
            />
          </div>

          <Spacer size={60} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <DashboardButton onClick={handleSendBanner}>Salvar</DashboardButton>
          </div>

          <Row>
            <h3 style={{ fontSize: 20 }}>Galeria de Banners</h3>
          </Row>
          <Row>
            {bannersToShow?.map((banner) => (
              <>
                <BannerPreview onClick={() => handleDeleteBanner(banner.uuid)}>
                  <GalleryBannerItem src={`${baseURL}/${banner.file}`} />
                </BannerPreview>
                <Spacer />
              </>
            ))}
          </Row>
        </Paper>
      </Container>
    </DashboardLayout>
  );
}

export default Banner;
