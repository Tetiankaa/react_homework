import React, {useEffect, useState} from 'react';

import css from './Launches.module.css';
import {launchService} from "../../services/launchService";
import {Launch} from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(()=>{
        launchService.getAll().then(({data})=>setLaunches(data));

    },[])

    let filteredLaunches = launches.filter(item=>item.launch_year !== "2020");

    return (
        <div className={css.Launches}>
            {filteredLaunches.map(launch=><Launch key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {Launches};