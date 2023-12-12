import { getUsers } from "@/app/functions/handlerAcessAPI";
import ListarUsuarios from "@/app/componentes/ListarUsuarios";
import NavBar from "@/app/componentes/NavBar";
import React, { Suspense } from "react";
import './estilo.css';

export default async function Dashboard(){
    return(
        <div className="dashboard">
          <NavBar linkAtivo={0} />
            <Suspense fallback={
              <div className="carregando"><img className="mt-20"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2bg.com.br%2Floading.gif&f=1&nofb=1&ipt=40fbb224dcf19d6033bab7cb97d279459be9795c72982b73980aea7b3144e046&ipo=images"/>
            <h1>Aguarde, carregando</h1></div>
            }>
              <div className="container">
                <ListarUsuarios usuarios={await getUsers()} />
              </div>
            </Suspense>
        </div>
    )
} 