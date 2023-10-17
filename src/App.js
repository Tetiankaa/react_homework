import React from 'react';

import {Simpsons} from "./components/Simpsons";
import {Characters} from "./components/Characters";

const App = () => {
    return (
        <div >
            <Simpsons/>
            <Characters/>
        </div>
    );
};

export {App};