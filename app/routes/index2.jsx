import {Link} from '@remix-run/react';
import Nosotros from './nosotros';
import Amedida from './amedida';
import Servicios from './servicios';
import Contacto from './contacto';
import NuestrosDesarrollos from './nuestrosdesarrollos';
import Recursos from './recursos';
import Novedades from './novedades';
import PreguntasFrecuentes from './preguntasfrecuentes';
import AppsBar from './appsbar'; 
import { AccessAlarm } from '@mui/icons-material';

function Index() {
  return (
      <div className=''>
          <div className="index">
            
              <h1>Soluciones informáticas</h1>
              somos parte de tu crecimiento

             
          </div>
          <div  className="header">
            <div className="index-contacto">
                    <div>
                        <div>Saavedra 669</div>
                        <div>Resistencia - Chaco</div>
                    </div>
                    <div>
                        <div>Lunes a Viernes de 7 a 20hs</div>
                        <div>Sabado: 8 a 12hs</div> 
                    </div>
                    <div>
                        <div>WhatsApp: 362 48 62456</div>
                        <div>Tel: 362 44 33677</div>
                    </div>
                    <div>
                        
                         soporte@intersistemas.com
                    </div>
                    
                    <AppsBar/>
                
                </div>
            </div>
          <Nosotros/>
          <Servicios/>
          <NuestrosDesarrollos/>

          <Amedida/>
          <Recursos/>
          <Novedades/>
          <PreguntasFrecuentes/>
          <Contacto/>
      </div>

    

  )
}

export default Index