'use client'
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../../componentes/NavBar";
import './estilo.css';

export default function Alterar() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
 

  const alterarUsuario = async (e) => {
    e.preventDefault();
    toast.success("Usuário atualizado com sucesso!!");
  }
  return (
    <div className="alter">
      <NavBar />   
    <div>
      <form className="alter-form" onSubmit={alterarUsuario}>
      <h2>Atualizar</h2>
        <input
          placeholder='Nome'
          type="text"
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button>Atualizar</button>
      </form>
      <ToastContainer />
    </div>
    </div>
  )
}
