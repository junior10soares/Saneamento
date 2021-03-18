import React, { useState } from "react";
import { ButtonMenu, HeaderStyle, Menu, Spacer } from "./style";
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/public/imagens/header/logo.svg'

const listmenu = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Sobre",
    url: "/sobre",
  },
  {
    label: "Obras de Macrodrenagem",
    url: "/macrodrenagem",
  },
  {
    label: "Resíduos Sólidos",
    url: "/residuos",
  },
  {
    label: "Sistema de Monitoramento",
    url: "/sistemas-monitoramento",
  },
  {
    label: "Notícias",
    url: "/noticias",
  },
  // {
  //   label: "Canal de Relacionamento",
  //   url: "/canal-relacionamento",
  // },
];

export function Header() {
  const router = useLocation();

  const [isMenuOpen, setVisibleMenu] = useState(false);

  return (
    <>
      <HeaderStyle>
        <img src={logo} alt="Sanear" width="90" height="90" />
        <ButtonMenu onClick={() => setVisibleMenu(!isMenuOpen)}>
          <span></span>
        </ButtonMenu>
        <Menu className={isMenuOpen ? "active" : ""}>
          {listmenu.map((item) => (
            <Link to={item.url} onClick={() => setVisibleMenu(false)}>
              <a className={router.pathname === item.url ? "active" : ""}>
                {item.label}
              </a>
            </Link>
          ))}
        </Menu>
      </HeaderStyle>
      <Spacer />
    </>
  );
}
