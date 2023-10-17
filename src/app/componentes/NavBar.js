import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import './estilo.css';

const NavBar = () => {
    const { push, refresh } = useRouter();
    const removeToken = (e) => {
      e.preventDefault();
      Cookies.remove('token');
      refresh('/');
    }
    return(
        <div className="navigation">
         <ul className="navLinks">
           <li>
            <Link href="../pages/dashboard" className="navLink">Dashboard</Link>
           </li>
           <li>
            <Link href="../pages/register" className="navLink">Cadastrar</Link>
           </li>
           <li>
            <Link href="../pages/alter" className="navLink">Alterar</Link>
           </li>
           <li>
            <button onClick={removeToken} className="navLink logout">Logout</button>
           </li>
         </ul>
       </div>
    )
}

export default NavBar;