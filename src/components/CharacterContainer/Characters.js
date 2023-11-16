import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {characterActions} from "../../redux";
import {Character} from "./Character";

const Characters = () => {
    const {charactersIds,isLoading,characters} = useSelector(state=> state.characters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(characterActions.getAll({ids:charactersIds}))
    }, [charactersIds,dispatch]);

    return (
        <div>
            {isLoading && <h1>loading...</h1>}
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};