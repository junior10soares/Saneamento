import React, { useCallback, useEffect, useState } from "react";
import DashboardLayout from "../../../components/DashboardLayout";
import DashboardButton from "../../../components/DashboardButton";
import { GalleryVideoItem } from '../../../components/GalleryVideoItem';
import { GalleryAddItem } from '../../../components/GalleryAddItem';
import Modal from "../../../components/Modal";
import { Spacer } from '../../../components/Spacer';
import request from "../../../services/api";
import SendVideoForm from './SendVideoForm';
import {Container} from './styles';
import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router";
import { notify } from "../../../Notification";

const PainelVideos = () => {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videos, setVideos] = useState([]);
  const { push } = useHistory();

  const fetchVideos = useCallback(async () => {
    try {
      const response = await request({
        url: "video",
        method: 'GET'
      });

      setVideos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleOpenModal = () => {
    setModalActive(true);
  };

  const handleSendVideo = async (data) => {
    setLoading(true);
    console.log('data',data);
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

  return (
    <DashboardLayout title="Videos">
      <Container>
        <Paper elevation={3} style={{ padding: 20 }}>
          <div
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
          >
            {videos.map((video, index) => (
              <GalleryVideoItem
                key={video.uuid}
                video={video}
              />
            ))}

            <GalleryAddItem type="button" onClick={handleOpenModal} />
          </div>

          <Spacer size={60} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <DashboardButton onClick={() => push("/dashboard/obras")}>
              Concluir
            </DashboardButton>
          </div>
        </Paper>
      </Container>

      <Modal isOpen={modalActive} onClose={() => setModalActive(false)}>
        <SendVideoForm onSubmit={handleSendVideo} loading={loading} />
      </Modal>
    </DashboardLayout>
  );
}

export default PainelVideos;
