import{
    Scripts,
    Meta,
    Links,
    Outlet, 
    LiveReload,
    ScrollRestoration
} from "@remix-run/react";


import styles from '~/styles/index.css';
import nosotros from '~/styles/nosotros.css';
import servicios from '~/styles/servicios.css';
import amedida from '~/styles/amedida.css';
import recursos from '~/styles/recursos.css';
import preguntasfrecuentes from '~/styles/preguntasfrecuentes.css';
import contacto from '~/styles/contacto.css';

import Header from '~/components/header';
import Footer from "~/components/footer";



export function meta(){
    return(
        {
            charset: 'utf-8',
            title: 'InterSistemas',
            viewpor: "width=device-width,initial-scale=1"
        }
    )
}

export function links(){
    return[
        {
            ref: 'stylesheet',
            href:'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
     
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: "true"
      },
      {
        rel: 'stylesheet',
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
      }, 
      {
        rel: 'stylesheet',
        href: styles
       },
       {
        rel: 'stylesheet',
        href: nosotros
       },
       {
        rel: 'stylesheet',
        href: amedida
       },
       {
        rel: 'stylesheet',
        href: servicios
       },
       {
        rel: 'stylesheet',
        href: recursos
       },
       {
        rel: 'stylesheet',
        href: preguntasfrecuentes
       },
       {
        rel: 'stylesheet',
        href: contacto
       }
       
       
    ]
  }

export default function App(){

    return(
        <Layout>
            <Outlet/>
        </Layout>
    )
}

function Layout ({children}){
return (
    <html lang="es">
        <head>
           <Meta></Meta>
           <Links/>
        </head>
       
    <body>
        <Header/>
        {children}
        
        <ScrollRestoration />
        
        <LiveReload/>

        
    </body>
    </html>
)

}