import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import {getMovie} from '../utils/getData';

const Home = () => {
    
    const [movies, saveMovie] = useState([]);

    useEffect( () => {

        const consultarAPI = async () => {
            const resp = await getMovie();
            saveMovie(resp.results)
        }

        consultarAPI();
    }, [])

    return ( 
        <div className="green lighten-3">
            {movies.map(movie => (
                <Movie
                    key= {movie.id}
                    movie={movie}
                />
            ))}
        </div>
     );
}
 
export default Home;