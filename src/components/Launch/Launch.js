import React from 'react';

import css from './Launch.module.css';

const Launch = ({launch}) => {
    const {mission_name, launch_year,links:{mission_patch_small}} = launch;

    return (
        <div className={css.Launch}>
            <h1>{mission_name}</h1>
            <h1>{launch_year} year</h1>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {Launch};