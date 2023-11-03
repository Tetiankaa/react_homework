import React from 'react';
import css from './Header.module.css';
import {useAppContext} from "../../hooks";

const Header = () => {
    const {episodeName} = useAppContext();
    return (
        <div className={css.Header}>
            {episodeName
                ? <h1>{episodeName}</h1>
                : <h1>Rick & Morty</h1>
            }
        </div>
    );
};

export {Header};