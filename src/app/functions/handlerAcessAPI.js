//const url = "localhost:3003";
const url = "https://api-na-vercel-ptac4.vercel.app";

const getUserAuthenticated = async (userLogin) => {
  'use server'
  console.log(userLogin);
  try{    
    
    const responseOfAPI = await fetch(`${url}/user/authenticated`, {
        method: 'POST',
        headers: { "Content-Type":"Application/json" },
        body: JSON.stringify(userLogin)
    });
    let userAuthenticated = await responseOfAPI.json();
    return userAuthenticated;
  } catch {
    return null;
  }
}

const getUsers = async () => {
    try{
      const responseOfAPI = await fetch(`${url}/users`, {
        cache: "no-cache"
      });
      let usuarios = await responseOfAPI.json();
      return  usuarios;
    } catch {
      return null;
    }
}

const getOneUser = async (id) => {
  try{
    const responseOfAPI = await fetch(`${url}/user/${id}`, {
      method: "POST",
      cache: "no-cache",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(id)
    });
    let usuario = await responseOfAPI.json();
    return  usuario;
  } catch {
    return null;
  }
}

const postUser = async (user) => {
  try{
    const responseOfAPI = await fetch(`${url}/user`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(user)
    });
    const userSaved = await responseOfAPI.json();
    return userSaved;
  } catch {
    return null;
  }
}

const putUser = async (user, id) => {
  try{
    const responseOfAPI = await fetch(`${url}/user/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(user)
    });
    const userUpdated = await responseOfAPI.json();
    return userUpdated;
  } catch {
    return null;
  }
}

export { getUsers, getUserAuthenticated, postUser, putUser, getOneUser };