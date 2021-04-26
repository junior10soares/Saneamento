import React, {useEffect, useCallback, useState} from "react";
import {Link, useHistory, useLocation} from "react-router-dom";
import { ExpandMore } from "@material-ui/icons";
import FlatButton from "../FlatButton";
import { CookieStorage } from "cookie-storage";
import { Container, Header, SideBar, Content, Modal } from "./style";
import { ReactComponent as ObraIcon } from "../../assets/public/obras.svg";
import { ReactComponent as VideoIcon } from "../../assets/public/videos.svg";
import { ReactComponent as NoticiaIcon } from "../../assets/public/noticias.svg";
import { ReactComponent as BannerIcon } from "../../assets/public/banner.svg";

import logo from '../../assets/public/imagens/header/logo.svg';
import api from '../../services/api';
import { FiLogOut, FiUser, FiUsers } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";

const DashboardLayout = ({ children, title }) => {
  const { signOut } = useAuth();
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [user, setUSer] = useState({});
  const cookieStorage = new CookieStorage();


  const handleModal = () => {
    setOpenModal((state) => !state);    
  }

  const userRequest = useCallback(() => {
    api.get('me').then(({ data }) => setUSer(data.data));
   }, []);

   useEffect(() => { 
     const token = cookieStorage.getItem("senarsemasatoken");
     if (!token) push("/auth/login");
   }, []);

   useEffect(() => {
    userRequest();
   }, [userRequest]);

   const handleSignUp = () => {
    cookieStorage.removeItem("senarsemasatoken");
    push("/auth/login");
   }

  return (
    <>
      <Container>
        <Header onClick={handleModal}>
          <span>{user.name}</span>
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
                    pathname.name === '/painel/obras' ? "active" : "inactive"
                
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
            <li>
              <FiUser />
            Perfil
            </li>
            <li onClick={handleSignUp}>
              <FiLogOut />
            Sair
            </li>
            </ul>     
         </Modal>    
     )}   
      </Container>          
    </>
  );
}

export default DashboardLayout;
