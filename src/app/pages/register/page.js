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

  const [usuarios, setUsuarios] = useState([]);

  const salvarUsuarios = (usuarios) => {
    const usuarioString = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuarioString);
  }
  const pegarUsuarios = () => {
    const usuarioString = localStorage.getItem('usuarios');
    return JSON.parse(usuarioString) || [];
  }

  useEffect(() => {
    const usuariosNoLocalStorage = pegarUsuarios();
    setUsuarios(usuariosNoLocalStorage);
  }, []);
    
  const registrarUsuario = () => {
    const novoUsuario = { nome: user.name, email: user.email, senha: user.password, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9', };
    const novosUsuarios = [...usuarios, novoUsuario];
    setUsuarios(novosUsuarios);
    salvarUsuarios(novosUsuarios);
    toast.success("Usuário cadastrado com sucesso!!");
  };

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
