import React from 'react'
import styles from '~/styles/recursos.css'
import {Psychology, HowToReg, Input,PhoneForwarded} from '@mui/icons-material';
export function meta(){
  return(
      {title: 'InterSistemas - Recursos'
      }
  )
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Recursos(props) {
  return (
    
        
    <main className="contenedor">
        <h2 className="heading">Recursos</h2>
      <div className='header'></div>
      <div className="contenidoRecursos">
           <div>
              
              <div> <HowToReg fontSize="large" style={{zoom: '300%'}}/> Registro</div>
              <div> <Input fontSize="large" style={{zoom: '300%'}}/> Acceso</div>
              <div><Psychology fontSize="large" style={{zoom: '300%'}}/> Base de Conocimiento</div>
              <div><PhoneForwarded fontSize="large" style={{zoom: '300%'}}/>Cómo lo atendimos?</div>
             
            </div>
      </div>
    </main>
  )
}

export default Recursos
