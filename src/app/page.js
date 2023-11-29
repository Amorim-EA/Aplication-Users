'use client'
import React, { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token === undefined){
        toast.error("Erro no e-mail ou senha!");
      }
      toast.success(`Seja Bem-vindo ${userAuth.name}`);
      push("/pages/dashboard");
    } catch {
      toast.error("Erro no servidor.");
      refresh('/');
    }
  }
  return (
    <div className="container-login">
      <form className="login-form" onSubmit={handlerLogin}>
      <h2>Login</h2>
        <input
          className="input-login"
          placeholder='E-mail'
          type="email"
          required
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          className="input-login"
          placeholder='Senha'
          type='password'
          required
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="button-login">Entrar</button>
      </form>
      <ToastContainer />
    </div>
  )
}
