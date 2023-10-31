import './estilo.css';

const ListarUsuarios = async ({usuarios}) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)) 
    return(
        <div className="containerMestre">
              {
                usuarios?.map((user, index) => {
                    return(
                    <div className="containerUsers">
                        <img src="data:image/png;base64,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"/>
                         <h3>Nome: <span>{user.nome}</span></h3>
                         <h3>Email: <span>{user.email}</span></h3>
                         <h3>password: <span>{user.password}</span></h3>
                     </div>)
                })
               }
            </div>
    )
}

export default ListarUsuarios;