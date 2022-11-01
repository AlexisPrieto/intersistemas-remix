import {Link} from '@remix-run/react';
import Logo from '../../public/img/InterSistemas2.png'
import Navegacion from './navegacion';

function Header() {
    
  return (
   
    <header className="header">
        <div className="contenedor barra">
            <Link to="/" className="logo">
                <img className='logo' src={Logo} alt="Imagen Logo"/>
            </Link>
            <Navegacion/>
        </div>
    </header>
  )
}

export default Header