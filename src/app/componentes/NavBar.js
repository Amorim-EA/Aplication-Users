'use client'
import React, { useState } from 'react';
import Link from "next/link";
import Cookies from "js-cookie";
import './css/reset.css';
import './css/estilos.css';

const NavBar = ({ linkAtivo }) => {
   const [menuAtivo, setMenuAtivo] = useState(false);
   
   const handleMenuClick = () => {
      setMenuAtivo(!menuAtivo);
   }
   
    const removeToken = (e) => {
      e.preventDefault();
      Cookies.remove('token');
    }
    return(
   <div>
      <header className="cabecalho">
        <h1>Dashboard</h1> 
        <button className="cabecalho_menu" onClick={handleMenuClick}>
          <i className="icone-menu"></i>
        </button>
      </header>

      <nav className={`menu-lateral ${menuAtivo ? 'menu-lateral--ativo' : ''}`}>
        <Link
          href="/pages/dashboard"
          className={`menu-lateral_link icone-home ${linkAtivo === 0 ? 'menu-lateral_link--ativo' : ''}`}
        >
          Home
        </Link>
        <Link
          href="/pages/dashboard/register"
          className={`menu-lateral_link icone-cadastrar ${linkAtivo === 1 ? 'menu-lateral_link--ativo' : ''}`}
        >
          Cadastrar
        </Link>
        <Link
          href="/"
          className={`menu-lateral_link icone-logout ${linkAtivo === 2 ? 'menu-lateral_link--ativo' : ''}`}
          onClick={() => {
           removeToken()
          }}
        >
          LogOut
        </Link>
    </nav>
   </div>
    )
}

export default NavBar;