import footerImg from '../../public/img/Servicios_footer.png'
import styles from '~/styles/servicios.css'

export function meta(){
    return(
        {title: 'InterSistemas - Servicios'
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
      href: footerImg,
      as: 'image'
    }

  ]
}

function Servicios() {
  return (
    
        <main className="contenedor">

            <h2 className="heading">Servicios</h2>

            <div className="contenidoServicios"> 
                <div className='textServicios'>
                    <strong>Lorem Ipsum 1:</strong> is simply dummy text of the printing a500s<br/>
                    when an f Letraset shm Ipsum passtry.
                    waset sheets conorem Ipsum passages, and mor
                    <p/>
                    <strong>Lorem Ipsum 2:</strong> is simply dummy text ond typesetting industry. Lorem
                    when an f Letraset sheets containing Lorem Ipsum passages, and morsumnd typesetting industry.
                    sheets containing Lorem Ipsum passages, and more recently with de tex

                    <p/>
                    <strong>Lorem Ipsum 3:</strong> is simply dummy text ond typesetting industry. Lorem
                    when an f Letraset sheets containing Lorem Ipsum passages, and morsumnd typesetting industry.
                    sheets containing Lorem Ipsum passages, and more recently with de tex

                    <p/>
                    <strong>Lorem Ipsum 4:</strong> is simply dummy text ond typesetting industry. Lorem
                    when an f Letraset sheets containing Lorem Ipsum passages, and morsumnd typesetting industry.
                    sheets containing Lorem Ipsum passages, and more recently with de tex

                  </div>
            </div>

            <img src={footerImg}/>
        </main>
  )
}

export default Servicios