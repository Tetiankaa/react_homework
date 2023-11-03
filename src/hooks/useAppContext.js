import {useContext} from 'react';

import {Context} from "../hoc";

const useAppContext = () => {
    const [episodeName, setEpisodeName] = useContext(Context);
    return {
        episodeName:episodeName.name,
        setEpisode:(value)=>setEpisodeName(prev=>({...prev,name:value}))
    }
};

export {useAppContext};