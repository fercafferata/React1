import React, { useEffect, useState } from 'react';
import {getCredits} from '../utils/getData';
import Actor from './Actor';

const Credits = ({id}) => {

    const [cred, saveCredits] = useState([]);

    useEffect( () => {

        const consultarAPI = async () => {
            const resp = await getCredits(id);
            saveCredits(resp.cast);
            console.log(saveCredits);
        };

        consultarAPI();
    }, [id])

    return (
        <div>
            <b>Actors: </b>
            {cred.map(actor => 
            <Actor 
            key = {actor.id} 
            infoActor = {actor}
            />)}
        </div>
    );
}
 
export default Credits;