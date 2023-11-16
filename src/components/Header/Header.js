import React from 'react';
import {useSelector} from "react-redux";

import css from './Header.module.css';


const Header = () => {
    const {episodeName} = useSelector(state=> state.episodes);

    return (
        <div className={css.Header}>
            {
                episodeName
            ? <h1>{episodeName}</h1>
            :  <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};