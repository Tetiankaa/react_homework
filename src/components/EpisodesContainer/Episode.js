import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";
import css from './Episode.module.css';
const Episode = ({episod}) => {
    const {id, name, episode,characters} = episod;
    const {setEpisode} = useAppContext();

    const navigate = useNavigate();

    const showInfoEpisode = ()=>{
        navigate('/characters', {state:{characters}});
        setEpisode(name);
    }

    return (
        <div onClick={showInfoEpisode} className={css.Episode}>
            <p>id:{id}</p>
            <p>name:{name}</p>
            <p>chapter:{episode}</p>
        </div>
    );
};

export {Episode};