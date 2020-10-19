import React, { Fragment } from 'react';

//sfc funcional component
const Formulario = () => {
    return ( 
        <form>
           <div className="input-field col s12">
               <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
               />
                <label htmlFor="Ciudad"> Ciudad: </label>
            </div> 

            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais">
                    <option value=""> --Seleccione un pais--</option>
                    <option value="US"> Estados Unidos</option>
                    <option value="AR"> Argentina</option>
                    <option value="MS"> Mexico </option>
                    <option value="UR"> Uruguay </option>
                </select>
                <label htmlFor="pais">Pais: </label>
            </div>


        </form>
     );
}
 
export default Formulario;