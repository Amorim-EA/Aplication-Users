import React from 'react';
import './estilo.css';

const ListarUsuarios = async ({usuarios}) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return(
        <div className="containerMestre">
              {
                usuarios?.map((user, index) => {
                    return(
                    <div className="containerUsers">
                         <div className="imagemUser"></div>
                         <h4>Nome: <span>{user.name}</span></h4>
                         <h4>Email: <span>{user.email}</span></h4>
                     </div>)
                })
               }
            </div>
    )
}

export default ListarUsuarios;