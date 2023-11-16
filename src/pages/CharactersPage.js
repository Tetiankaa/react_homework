import {useSelector} from "react-redux";

import {Characters} from "../components";


const CharactersPage = () => {
    const {errors} = useSelector(state=> state.characters);

    return (
        <div>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <Characters/>
        </div>
    );
};

export {CharactersPage};