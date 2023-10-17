import React, {useEffect, useState} from 'react';

import {Character} from "./Character";

const Characters = () => {
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6').then(response => response.json()).then(value => setCharacters(value))
    }, [])

    return (
        <div>
            {characters.map(character => <Character key={character.id} value={character}/>)}
        </div>
    );
};

export {Characters};