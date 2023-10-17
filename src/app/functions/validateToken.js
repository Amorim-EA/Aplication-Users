import { decode } from "jsonwebtoken";
const validateToken = (token)=>{
    const isTokenValidate = decode(token);
    if(isTokenValidate){
        return true
    }
    return true;
}   
export {validateToken};