import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({movie}) => {

    const {backdrop_path, title, overview, id, original_title} = movie;
    const foto = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
    return (
            <div className="col s12 m4 l4">
                <Link to={`/${id}`}>
                <div className="card green darken-1">
                    <div className="card-image">
                        <img src={foto}></img>
                        <span className="card-title">{title}</span>
                    </div>
                    <div className="card-content">
                        <span className="white-text">
                        <h6><b>{original_title}</b></h6>
                        <b>Overview: </b><p>{overview}</p>
                        </span>
                    </div>
                </div>
                </Link>
            </div>
    );

}
 
export default Movie;

