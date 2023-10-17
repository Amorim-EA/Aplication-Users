const url = "https://api-na-vercel-ptac4.vercel.app/";

const getUserAuthenticated = async (userLogin) => {
    const responseOfAPI = await fetch(`${url}/user/authenticated`, {
        method: 'POST',
        headers: { "content-Type":"aplication/json" },
        body: JSON.stringify(userLogin)
    });
    let userAuthenticated = await responseOfAPI.json();
    return userAuthenticated;
}

const getUsers = async () => {
    const req = await fetch(`${url}/users`, {
        cache: "no-cache",
    });
    const usuarios = await req.json();
    return  usuarios;
}

export { getUsers, getUserAuthenticated };
