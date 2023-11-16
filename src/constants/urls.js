const baseURL = 'https://rickandmortyapi.com/api';

const episode = '/episode';
const character = '/character';

const urls = {
    episode,
    character:{
        byIds:(ids)=>`${character}/${ids}`
    }
}

export {urls,baseURL}