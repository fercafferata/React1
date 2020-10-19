import React, { Fragment } from 'react';
import Formulario from './Componentes/Formulario';
import Header from './Componentes/Header'


function App() {
  return (
    <Fragment>
      <Header titulo='Clima App'/>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">

            <div className="col m6 s12">
              <Formulario/>
            </div>

            <div className="col m6 s12">
              
            </div>

          </div>

          
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;