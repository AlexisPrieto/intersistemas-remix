import footerImg from '../../public/img/AMedida_footer.png';
import ImgIlu from '../../public/img/AMedida_ilu.png';
import styles from '~/styles/amedida.css';

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
      href: ImgIlu,
      as: 'image'
    }

  ]
}

function Amedida() {
  return (
    
        <main className="contenedor">

            <h2 className="heading">A Medida</h2>

            <div className="contenido"> 
                <div className='text'>
                    <strong>Lorem Ipsum:</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an f Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
            </div>

            <img src={footerImg}/>
        </main>
  )
}

export default Amedida