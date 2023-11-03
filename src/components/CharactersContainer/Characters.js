import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Character} from "./Character";
import axios from "axios";
import {useAppContext} from "../../hooks";
const Characters = () => {
    const {state} = useLocation();
   const charactersUrls = state.characters;

   const [characters, setCharacters] = useState([]);
   const navigate = useNavigate();
    const {setEpisode} = useAppContext();

    useEffect(() => {
        const fetchData = async () => {
            const allCharacters = charactersUrls.map(async (url) => {
                const {data} = await axios.get(url);
                return data;
            });

            const characters = await Promise.all(allCharacters);
            setCharacters(characters);
        };

        fetchData();
    }, [charactersUrls]);

    const back = ()=>{
        navigate(-1);
        setEpisode(false);
    }
    return (
        <div>
            <button onClick={back}>Back</button>
            {characters.map(character=><Character character={character} key={character.id}/>)}
        </div>
    );
};

export {Characters};