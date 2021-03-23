import React, {useEffect, useState} from "react";
import {Link, useHistory, useLocation} from "react-router-dom";
import { CookieStorage } from "cookie-storage";
import { ExpandMore } from "@material-ui/icons";
import FlatButton from "../FlatButton";
import { Container, Header, SideBar, Content, Modal } from "./style";
import { ReactComponent as ObraIcon } from "../../assets/public/obras.svg";
import { ReactComponent as VideoIcon } from "../../assets/public/videos.svg";
import { ReactComponent as NoticiaIcon } from "../../assets/public/noticias.svg";
import { ReactComponent as BannerIcon } from "../../assets/public/banner.svg";
import logo from '../../assets/public/imagens/header/logo.svg';

export default function DashboardLayout({ children, title }) {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const cookieStorage = new CookieStorage();

    const token = cookieStorage.getItem("@senarsemasa:token");
    if (!token) push("/auth/login");
  });

  const handleModal = () => {
    setOpenModal((state) => !state);    
  }

  const cookieStorage = new CookieStorage();
  const token = cookieStorage.getItem("@senarsemasa:token");

  return (
    <>
      <Container>
        <Header onClick={handleModal}>
          <img src="https://i.pravatar.cc/150?img=60" />
          <span>Fulano de tal</span>
          <FlatButton>
            <ExpandMore />
          </FlatButton>
        </Header>
        <SideBar>
          <img src={logo} alt="Sanear" width="120" height="120" />
          <ul>
            <li>
              <Link to="/painel/obras">
                <a
                  className={
                    pathname.name === 'obras' ? "active" : "inactive"
                
                  }
                >
                  <ObraIcon />
                  <span>Obras</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/painel/videos">
                <a
                  className={
                    pathname.name === 'videos' ? "active" : "inactive"
                  }
                >
                  <VideoIcon />
                  <span>Vídeos</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/painel/noticias">
                <a
                  className={
                    pathname.name === 'noticias' ? "active" : "inactive"
                  }
                >
                  <NoticiaIcon />
                  <span>Notícias</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/painel/banner">
                <a
                  className={
                    pathname.name === 'banner' ? "active" : "inactive"
                  }
                >
                  <BannerIcon />
                  <span>Banner</span>
                </a>
              </Link>
            </li>
          </ul>
        </SideBar>
        <Content>
          <h2>{title}</h2>
          {children}
        </Content>
        {openModal && (
          <Modal>
          <ul>
            <li>Teste</li>
            </ul>     
         </Modal>    
     )}   
      </Container>
          
    </>
  );
}
