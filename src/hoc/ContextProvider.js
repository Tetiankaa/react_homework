import React, {createContext, useState} from 'react';

const Context = createContext(null);
const ContextProvider = ({children}) => {
    const episodeName = useState({name:null});
    return (
        <div>
            <Context.Provider value={episodeName}>
                {children}
            </Context.Provider>
        </div>
    );
};

export {ContextProvider, Context};