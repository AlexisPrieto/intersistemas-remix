
import {Link, useLocation} from '@remix-run/react';

function Navegacion() {

    const location = useLocation();
    console.log('location: ',location);
    
  return (

    <nav className="navegacion">
        <Link  to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
        <Link  to="/desarrollos" className={location.pathname === '/desarrollos' ? 'active' : ''}>Desarrollos</Link>
        <Link  to="/servicios" className={location.pathname === '/servicios' ? 'active' : ''}>Servicios</Link>
        <Link  to="/recursos" className={location.pathname === '/recursos' ? 'active' : ''}>Recursos</Link>
        <Link  to="/nosotros" className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link>
        <Link  to="/contacto" className={location.pathname === '/contacto' ? 'active' : ''}>Contacto</Link>
    </nav>
  )
}

export default Navegacion