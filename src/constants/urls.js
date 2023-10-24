const baseUrlCars = 'http://owu.linkpc.net/carsAPI/v1';

const baseUrlJson = 'https://jsonplaceholder.typicode.com';

const cars = '/cars';

const users = '/users';

const comments = '/comments';

const urls ={
    cars:{
        base:cars,
        byId:(id)=>`${cars}/${id}`
    },
    users,
    comments
}

export {baseUrlCars,baseUrlJson, urls}