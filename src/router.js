import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsTitlesPage} from "./pages/PostsTitlesPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {postService} from "./services/postService";
import {commentService} from "./services/commentService";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users',element:<UsersPage/>, loader:()=>userService.getAll()},
            {path:'users/:userId', element:<UserDetailsPage/>, loader:({params:{userId}})=>userService.getUserById(userId),children:[
                    {path:'posts',element:<PostsTitlesPage/>, loader:({params:{userId}})=>postService.getPostsByUserId(userId)}
                ]},
            {path:'users/:userId/posts/:postId', element:<PostDetailsPage/>,
                loader:async ({params:{postId}})=>{
                 const post = await postService.getPostById(postId);
                 const comments = await commentService.getCommentsByPostId(postId);
                 return {post,comments}
                }}
        ]}
])

export {router}