import React from 'react';

const PersonCardComp = props => {
        return (
            <div>
                <h3> Name:{props.name}</h3>
                <p> Age:{props.age}</p>
                <p> Hair:{props.hair}</p>
                
            </div>
        );
    }


export default PersonCardComp;