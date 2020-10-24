import React, { useState } from 'react';

//sfc funcional component
const Formulario = ({busqueda, guardarBusqueda, guardarConsulta}) => {

    const [error, guardarError] = useState(false)
    
    // extraer ciudad y pais
    const {ciudad, pais} = busqueda;

    //funcion que coloca los elem en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario hace submit al formulario
    const  handleSubmit = e => {
        e.preventDefault()

        //validar los campos
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true)
            return;
        }
        guardarError(false)

        //pasarlo al componente principal
        guardarConsulta(true)

    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4 error">Todos los campos son obligatorios</p>: null}
           <div className="input-field col s12">
               <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
               />
                <label htmlFor="ciudad">Ciudad</label>
            </div> 

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                />
                <label htmlFor="pais">Pais</label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>


        </form>
     );
}
 
export default Formulario;