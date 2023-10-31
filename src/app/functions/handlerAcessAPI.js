const url = "https://api-na-vercel-ptac4.vercel.app";

const getUserAuthenticated = async (userLogin) => {
  try{    
    const responseOfAPI = await fetch(`${url}/user/authenticated`, {
        method: 'POST',
        headers: { "content-Type":"application/json" },
        body: JSON.stringify(userLogin)
    });
    let userAuthenticated = await responseOfAPI.json();
    return userAuthenticated;
  } catch (error) {
        console.error(`Error: ${error}`);
    }
}

const getUsers = async () => {
    try{
      const responseOfAPI = await fetch(`${url}/users`, {
        cache: "no-cache"
      });
      let usuarios = await responseOfAPI.json();
      return  usuarios;
    } catch (error) {
      console.error(`Error: ${error}`);
    }
}

export { getUsers, getUserAuthenticated };
