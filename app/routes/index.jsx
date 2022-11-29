import {Link} from '@remix-run/react';
import Nosotros from './nosotros';
import Amedida from './amedida';
import Servicios from './servicios';
import Contacto from './contacto';

function Index() {
  return (
      <div className=''>
          <div className="index">
            
              <h1>Soluciones informáticas</h1>
              somos parte de tu crecimiento
          </div>

          <Nosotros/>
          <Servicios/>
          <Amedida/>
          <Contacto/>
      </div>

    

  )
}

export default Index