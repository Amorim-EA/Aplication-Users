'use client'
import { getUsers } from "../../functions/handlerAcessAPI";
import ListarUsuarios from "../../componentes/ListarUsuarios";
import NavBar from "../../componentes/NavBar";
import { useEffect } from "react";
import './estilo.css';

export default function Dashboard(){
    let users = getUsers();

    useEffect(() => {
        let usuarioString = localStorage.getItem('usuarios');
        let usuariosArmazenados = JSON.parse(usuarioString) || [];
        users = [...users, ...usuariosArmazenados];
      }, [users]);

    return(
    <div>
        <div className="dashboard">
            <NavBar />
            <div className="container">
                <h2>Usuários Cadastrados</h2>
                <ListarUsuarios usuarios={users} />
            </div>
        </div>
    </div>
    )
} 