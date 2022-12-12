import React from 'react';
import { json } from "@remix-run/node";
import footerImg from '../../public/img/NuestrosDesarrollos_footer.png';
import BasicTabs from '../components/BasicTabs.jsx';
import { StyledEngineProvider } from '@mui/material/styles';
import { useLoaderData } from "@remix-run/react";

export function meta(){
  return(
      {title: 'InterSistemas - Servicios'
      }
  )
}

export function links(){
  return[
    {
      rel: 'preload',
      href: footerImg,
      as: 'image'
    }

  ]
}

export let loader = () => {
  return json([
    {id: 0, area: "Comercial", texto: "asdasd"},
    {id: 1, area: "Sanatorial", texto: "asdasd2"},
    {id: 2, area: "Contable", texto: "asdasd3"},
    {id: 3, area: "Administrativo", texto: "asdasd4"},
    {id: 4, area: "Juridico", texto: "asdasd5"},
    {id: 5, area: "Gestión", texto: "asdasd6"}
  ]);
}

function NuestrosDesarrollos(props) {
  return (
        
    <main className="contenedor">
        <h2 className="heading">Nuestros Desarrollos</h2>

        <StyledEngineProvider injectFirst>
            <BasicTabs/>
        </StyledEngineProvider>

        <img src={footerImg}/>
    </main>
  )
}

export default NuestrosDesarrollos
