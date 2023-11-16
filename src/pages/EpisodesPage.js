import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Episodes} from "../components";
import {episodeActions} from "../redux";

const EpisodesPage = () => {
    const {errors,episodeName} = useSelector(state=> state.episodes);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(episodeActions.setEpisodeName(null))
    }, [dispatch, episodeName]);

    return (
        <div>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};