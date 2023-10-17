import React from 'react';

const Simpson = ({simpson}) => {

    return (
        <div>
            <h1>{simpson.name}</h1>
            <p>Gender: {simpson.gender}</p>
            <img src={simpson.img} alt={simpson.name}/>
        </div>
    );
};

export {Simpson};