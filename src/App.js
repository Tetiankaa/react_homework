import React from 'react';
import {Cars, Comments, Posts} from "./components";

const App = () => {
    return (
        <div>
          <Cars/>
          <Posts/>
          <Comments/>
        </div>
    );
};

export {App};