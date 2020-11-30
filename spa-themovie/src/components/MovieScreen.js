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
            <div className="col s12 m4 l8">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}></img>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h3>{movies.title}</h3>
                            <ul className="list-group list-group-flush">
                                <h5><li className="list-group-item"><b>{movies.tagline}</b></li></h5>
                                <br></br>
                                <li className="list-group-item"><b>Original title: </b> {movies.original_title}</li>
                                <br></br>
                                <li className="list-group-item"><b>Overview: </b> {movies.overview}</li>
                                <br></br>
                                <li className="list-group-item"><b>Release date: </b> {movies.release_date}</li>
                                <br></br>
                                <li className="list-group-item"><b>Runtime: </b> {movies.runtime} minutes</li>
                                <br></br>
                                <li className="list-group-item"> 
                                    <Credits 
                                        id={id}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                
                </div>
            </div>
        </section>
    );
}
 
export default MovieScreen;