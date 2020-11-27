import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Credits from './Credits';
import {getDataMovie} from '../utils/getData';


const MovieScreen = () => {
   
    const {id} = useParams();

    const [movies, saveMovie] = useState([]);

    useEffect( () => {

        const consultarAPI = async () => {
            saveMovie (await getDataMovie(id));
        }

        consultarAPI();
    }, []);
    
    return (
        <section className="container">
            <div class="col s12 m4 l8">
                <div class="card horizontal">
                    <div class="card-image">
                        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <h3>{movies.title}</h3>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><b>Original title: </b> {movies.original_title}</li>
                                <li className="list-group-item"><b>Tagline: </b> {movies.tagline}</li>
                                <li className="list-group-item"><b>Overview: </b> {movies.overview}</li>
                                <li className="list-group-item"><b>Release date</b> {movies.release_date}</li>
                            </ul>
                        </div>
                    </div>
                <Credits id={id}/>
                </div>
            </div>
        </section>
    );
}
 
export default MovieScreen;