'use client'
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "@/app/componentes/NavBar";
import { putUser, getOneUser } from "@/app/functions/handlerAcessAPI";
import './estilo.css';

export default function Alterar({ params }) {
  let id = parseInt(params.id);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const findUser = async () => {
      const userFind = await getOneUser(id);
      setUser({ ...user, name: userFind.name, email: userFind.email,  })
    }
  }, [])

  const handlerFormSubmit = async (event) => {
    event.preventDefault();
    try{
      await putUser(user, id);
      await new Promise((resolve) => {
        toast.success("Usuário atualizado com sucesso!!");
        setTimeout(resolve, 5000);
      });
      return push("/pages/dashboard/");
    } catch {
      toast.error("Erro ao atualizar usuario!!");
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
        <button>Atualizar</button>
      </form>
      <ToastContainer />
    </div>
    </div>
  )
}
