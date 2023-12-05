'use client'

import { postUser } from "@/app/functions/handlerAcessAPI";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "@/app/componentes/NavBar";
import './estilo.css';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const { push } = useRouter();

  const handlerFormSubmit = async (event) => {
    event.preventDefault();
    try{
      await postUser(user);
      await new Promise((resolve) => {
        toast.success("Usuário cadastrado com sucesso!!");
        setTimeout(resolve, 5000);
      });
      return push("/pages/dashboard/");
    } catch {
      toast.error("Erro ao cadastrar usuario!!");
    }
  }

  return (
    <div className="register">
      <NavBar linkAtivo={1} />
    <div className="container">
      <form className="register-form" onSubmit={handlerFormSubmit}>
      <h2>Cadastrar</h2>
      <input
          placeholder='Nome'
          type="text"
          required
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          required
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          required
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="button-submit">Salvar</button>
      </form>
      <ToastContainer />
    </div>
  </div>
  )
}
