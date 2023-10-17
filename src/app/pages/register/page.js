'use client'
import { useState,useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../../componentes/NavBar";
import './estilo.css';

export default function Register() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registrarUsuario = (e) => {
    e.preventDefault()
    const url = "https://api-na-vercel-ptac4.vercel.app/";
    const userJson = JSON.stringify(user);
    fetch(`${url}/user`, {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: userJson
    }).then(function(){ route.push("/dashboard")}).catch(()=> console.log("Não foi possível cadastrar!"));
}

  return (
    <div className="register">
      <NavBar />
    <div className="container">
      <form className="register-form" onSubmit={registrarUsuario}>
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
        <button>Salvar</button>
      </form>
      <ToastContainer />
    </div>
  </div>
  )
}
