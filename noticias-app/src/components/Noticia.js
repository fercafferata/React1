import React from 'react';

const Noticia = ({noticia}) => {

    //estraer los datos
    const {urlToImage, url, title, description, source} = noticia;

    return ( 
        <div className= "col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage}/>
                    <span src={urlToImage} alt={title}></span>
                </div>
            
                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href= {url}
                        target="_blank"
                        rel="nooper noreferrer"
                        className="waves-effect waves-light btn"
                    >
                        Ir a la noticia completa
                    </a>

                </div>
            </div>
        </div>
     );
}
 
export default Noticia;