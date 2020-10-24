import React, { Fragment, useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Clima from './components/Clima'


function App() {

    //state del formulario
    const [busqueda, guardarBusqueda] = useState({
      ciudad:'',
      pais:''
    })

    const [consultar, guardarConsulta] = useState(false)

    const [resultado, guardarResultado] = useState({})

    const {ciudad, pais} = busqueda



    useEffect( () => {
      // consulta de API
      const consultarAPI = async() => {
        if (consultar) {
          const appId = 'cd26d0807b3428b974f1657ca3329966'
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`
        
          const respuesta = await fetch(url);
          const resultado = await respuesta.json()

          guardarResultado(resultado);
          guardarConsulta(false)
        }
      }
      consultarAPI()
    }, [consultar]) //las dependencia se pasan como un arreglo vacio


    return (
      <Fragment>
        <Header titulo='Clima React App'/>

        <div className="contenedor-form">
          <div className="container">
            <div className="row">

              <div className="col m6 s12">
                <Formulario
                  busqueda={busqueda}
                  guardarBusqueda={guardarBusqueda}
                  guardarConsulta={guardarConsulta}
                />
              </div>

              <div className="col m6 s12">
                <Clima
                  resultado={resultado}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default App;