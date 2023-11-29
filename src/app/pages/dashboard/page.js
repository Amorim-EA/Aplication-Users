import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListarUsuarios from "@/app/componentes/ListarUsuarios";
import NavBar from "@/app/componentes/NavBar";
import React, { Suspense } from "react";
import './estilo.css';

export default async function Dashboard(){
    let users = await getUsers();
    return(
        <div className="dashboard">
          <NavBar />
            <Suspense fallback={
              <div className="carregando"><img className="mt-20"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2bg.com.br%2Floading.gif&f=1&nofb=1&ipt=40fbb224dcf19d6033bab7cb97d279459be9795c72982b73980aea7b3144e046&ipo=images"/>
            <h1>Aguarde, carregando</h1></div>
            }>
              <div className="container">
                <h2 className="titulo">Usuários Cadastrados</h2>
                <ListarUsuarios usuarios={users} />
              </div>
            </Suspense>
        </div>
    )
} 