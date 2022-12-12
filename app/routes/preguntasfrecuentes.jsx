import footerImg from '../../public/img/PreguntasFrecuentes_footer.png';
//import ImgIlu from '../../public/img/AMedida_ilu.png';
import styles from '~/styles/preguntasfrecuentes.css';

export function meta(){
    return(
        {title: 'InterSistemas - Preguntas Frecuentes'
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

function PreguntasFrecuentes(props) {
  return (
        
    <main className="contenedor">

    <h2 className="heading">Preguntas Frecuentes</h2>

    <div className="contenidoPregF"> 
        <div className='textPregF'>

        + ¿Lorem Ipsum is simply dummy text of the printing and typesetting industry?<br/>
        + ¿Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took?<br/>

        + ¿A galley of type and scrambled it to make a type specimen book. I, but also the leap into electronic typesetting?<br/>

        + ¿Temaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing?<br/>

        + ¿Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum?<br/>

        + ¿A galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but allectronic typesetting?<br/>

        + ¿Temaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing?<br/>
        </div>
    </div>

    <img src={footerImg}/>
</main>
  )
}

export default PreguntasFrecuentes
