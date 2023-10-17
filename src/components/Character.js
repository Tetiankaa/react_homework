import React from 'react';

const Character = (props) => {
    console.log(props)
    let {value:{id,name,status,species,gender,image}} = props;

    return (
        <div>
            <h2>ID:{id}</h2>
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};
