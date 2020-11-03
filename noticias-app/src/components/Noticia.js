import React from 'react';

const Noticia = () => {

    //estraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    return ( 
        <div className= "col s12 m6 l4">
            <div className="card">
                <img src={urlToImage}></img>

            </div>
        </div>
     );
}
 
export default Noticia;