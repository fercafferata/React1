import React from 'react';

const Actor = ({infoActor}) => {
    
    const {name, character} = infoActor;
    
    return (
        <h5>{name} ({character})</h5>
    );
}
 
export default Actor;