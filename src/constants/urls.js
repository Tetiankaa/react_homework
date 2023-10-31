const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users:{
        base:users,
        userById:(userId)=>`${users}/${userId}`
    },
    posts:{
        postById:(postId)=>`${posts}/${postId}`,
        postByUserId:(userId)=>`${users}/${userId}${posts}`,
    },
    comments:{
        commentsByPostId:(postId)=>`${posts}/${postId}${comments}`
    }
}

export {baseURL, urls}