import React from 'react';

const Actor = ({infoActor}) => {
    
    const {name, character} = infoActor;
    
    return (
        <div>
            <div className="col s12 m4 l2">
                
                <li>{name} - {character}</li>
            </div>
        </div>
        
    );
}
 
export default Actor;