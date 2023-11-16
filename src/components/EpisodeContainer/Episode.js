import React from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './Episodes.module.css';
import {characterActions, episodeActions} from "../../redux";

const Episode = ({episode}) => {
    const {id, name, episode:chapter,characters} = episode;

    const navigate = useNavigate();
   const dispatch = useDispatch();

   const showInfoEpisode = () =>{
       navigate('/characters');
       dispatch(episodeActions.setEpisodeName(chapter));

       const ids = characters.map(character=> character.split('/').slice(-1)[0]).join(',');
       dispatch(characterActions.setCharactersIds(ids));

   }
    return (
        <div className={css.Episode} onClick={()=>showInfoEpisode()}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};