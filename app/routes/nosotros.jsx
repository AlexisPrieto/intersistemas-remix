import img from '../../public/img/Nosotros_background_1.png'
import img2 from '../../public/img/Nosotros_background_1.png'
import styles from '~/styles/nosotros.css'

export function meta(){
    return(
        {title: 'InterSistemas - Sobre Nosotros'
        }
    )
}

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: img,
      as: 'image'
    }

  ]
}

function Nosotros() {
  return (

    <main className="contenedor nosotros">

        <h2 className="heading">Nosotros</h2>

        <div className="contenido"> 
            <div className='text'>
              <strong>Lorem Ipsum:</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
        </div>

        <div className="contenido2"> 
            <div className='text2'>
              <strong>Lorem Ipsum:</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
        </div>
    </main>

  )
}

export default Nosotros