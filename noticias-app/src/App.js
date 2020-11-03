import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticia from './components/ListadoNoticias';

function App() {

  const [categoria, guardarCategoria] = useState(''); 
  const [noticias, guardarNoticias] = useState([]);

  useEffect( () =>{
    const consultarAPI = async () => {
      const url=`https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=84de8a609bc243e0a22b9f6c5d6d5791`
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      
      
      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria])

  return (
    <>
      <Header
        titulo= 'Buscador de noticias'
      />

      <div className=" container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticia 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
