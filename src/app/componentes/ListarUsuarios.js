import React from 'react';
import Link from "next/link";
import './css/estilos.css';

const ListarUsuarios = async ({usuarios}) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return(
        <div className="containerMestre">
              {
                usuarios?.map((user) => {
                    return(
                    <div className="containerUsers">
                         <div className="imagemUser"></div>
                         <h4><span>{user.name}</span></h4>
                         <h4><span>{user.email}</span></h4>
                         <Link className="botaoAlter" href={`/pages/dashboard/alter/${user.id}`}>Alterar</Link>
                     </div>)
                })
               }
            </div>
    )
}

export default ListarUsuarios;