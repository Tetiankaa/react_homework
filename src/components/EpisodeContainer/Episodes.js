import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Episode} from "./Episode";
import {episodeActions} from "../../redux";
import css from './Episodes.module.css';

const Episodes = () => {
    const {episodes, isLoading, prev, next} = useSelector(state => state.episodes);
    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page, dispatch]);

    const prevPage = () => {
        setQuery(prev => {
            prev.set('page', `${+page - 1}`);
            return prev;
        })
    }

    const nextPage = () => {
        setQuery(prev => {
            prev.set('page', `${+page + 1}`);
            return prev;
        })
    }

    return (
        <div>
            {isLoading && <h1>loading....</h1>}

            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>

            <div className={css.Buttons}>
                <button onClick={prevPage} disabled={!prev}>prev</button>
                <button onClick={nextPage} disabled={!next}>next</button>
            </div>
        </div>
    );
};

export {Episodes};