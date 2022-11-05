import footerImg from '../../public/img/Servicios_footer.png'

function Servicios() {
  return (
    
        <main className="contenedor">

            <h2 className="heading">Servicios</h2>

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
            <img src={footerImg}/>
        </main>
  )
}

export default Servicios