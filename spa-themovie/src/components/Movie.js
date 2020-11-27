import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({movie}) => {

    const {backdrop_path, title, overview, id, original_title} = movie;
    const foto = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
    return (
        <div class="row">
            <div class="col s6">
                <Link to={`/${id}`}>
                <div class="card green darken-1">
                    <div class="card-image">
                        <img src={foto}></img>
                        <span class="card-title">{title}</span>
                    </div>
                    <div class="card-content">
                        <span class="white-text">
                        <h6><b>{original_title}</b></h6>
                        <b>Overview: </b><p>{overview}</p>
                        </span>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );

}
 
export default Movie;