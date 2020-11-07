import React from 'react';

const HeroCard = ({    
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters
}) => {

    return ( 
        <div className="card ms-3" style={{ maxWidth: 540}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
                </div>
                <div className="col-md-8">
                    <h5 className="card-title">{superhero}</h5>
                    <p className="card-text">{alter_ego}</p>
                </div>
            </div>
        </div>
     );
}
 
export default HeroCard;