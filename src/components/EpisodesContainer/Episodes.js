import React, {useEffect, useState} from 'react';
import {episodeServices} from "../../services";
import {useSearchParams} from "react-router-dom";
import {Episode} from "./Episode";
import css from './Episodes.module.css';

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page:'1'});
    const [prevNext, setPrevNext] = useState({prev:null, next:null});

    useEffect(() => {
        episodeServices.getAll(query.get('page')).then(({data})=>{
            console.log(data);
            setEpisodes(data.results);
            setPrevNext({prev: data.info.prev, next: data.info.next});
        })
    }, [query]);

    const prev = ()=>{
        setQuery(prev=>{
            prev.set('page',`${+prev.get('page')-1}`);
            return prev;
        })
    }

    const next = () =>{
        setQuery(prev=>{
            prev.set('page', `${+prev.get('page') + 1}`);
            return prev;
        })
    }
    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episod={episode}/>)}
            </div>

            <div className={css.Buttons}>
                <button onClick={prev} disabled={!prevNext.prev}>prev</button>
                <button onClick={next} disabled={!prevNext.next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};