'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "@/app/componentes/NavBar";
import { putUser, getOneUser } from "@/app/functions/handlerAcessAPI";
import './estilo.css';

export default function Alterar({ params }) {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

 const userFind = async () => {
     const userTaken = await getOneUser(params.id);
     setUser({ ...user, name: userTaken.name, email: userTaken.email, password: userTaken.password });
 }
 
userFind();

  const handlerFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await putUser(user, params.id);
      toast.success("Usuário atualizado com sucesso!!");
      setTimeout(() => router.push("/pages/dashboard/"), 5000);
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      toast.error("Erro ao atualizar usuário!!");
    }
  }

  return (
    <div className="alter">
      <NavBar />   
    <div class="container">
      <form className="alter-form" onSubmit={handlerFormSubmit}>
      <h2>Atualizar</h2>
        <input
          placeholder='Nome'
          type="text"
          value={user.name}
          required
          onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
        </input>
        <input
          placeholder='E-mail'
          type="email"
          value={user.email}
          required
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          value={user.password}
          required
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="button-submit">Atualizar</button>
      </form>
      <ToastContainer />
    </div>
    </div>
  )
}