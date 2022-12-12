import React from 'react'
import Footer from '~/components/footer'
import styles from '~/styles/contacto.css';
import img from '../../public/img/Contacto_background.png'

export function meta(){
    return(
        {title: 'InterSistemas - Contacto'
        }
    )
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    ,
    {
      rel: 'preload',
      href: img,
      as: 'image'
    }
  ]
}

const handleChange = e => { 
  console.log(e.target)
 };


 const handleSubmit = e =>{
  e.preventDefault();

}


function Contacto() {
  return (
    
    <main className="contenedor">

        <h2 className="heading">Contacto</h2>

        <div className="contenidoContacto"> 
          <form onSubmit={handleSubmit} style={{color: 'rgb(150, 152, 154)'}}>
            <div className="row col-md-7 mx-auto">
              <h3 className="font-weight-bold container" style={{color: 'black'}}> Formulario de Contacto </h3>		 
              
                  <div  style={{margin: '0% 0% 5% 0%', color: 'black'}} className="text-secondary"> Enviénos un un mensaje y un asesor se contactará con usted!</div> 
              

                  <div className="text-left mx-auto"> <b>Nombre<b style={{color: 'red'}}> * </b></b> <br/>
                    <input equired type="text" name="nombre" onChange={handleChange}  className="input-group form-control" placeholder="Nombre" />
                  </div>

                  <div className="text-left mx-auto"> <b>Email <b style={{color: 'red'}}> * </b></b> <br/>
                    <input  required type="text" name="email" onChange={handleChange}  className="input-group form-control" placeholder="Email" />
                  </div>

                  <div className="text-left mx-auto"> <b>Mensaje <b style={{color: 'red'}}> * </b></b> <br/>
                    <textarea required type="text" name="mensaje" onChange={handleChange}  className="input-group form-control" placeholder="Text" />
                  </div>
              </div>

              <div className="pt-3 mx-auto text-center">
                 <button className="btn btn-primary btn-enviar">Enviar</button>
              </div>
              
          </form>	
        </div>

     <Footer/>
    </main>
  )
}

export default Contacto