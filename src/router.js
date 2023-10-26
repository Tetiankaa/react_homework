import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([{

    path:'',element:<MainLayout/>,children:[
        {index:true, element:<Navigate to={'todos'}/>},
        {path:'todos', element: <TodosPage/>},
        {path:'albums', element:<AlbumsPage/>},
        {path:'comments', element: <CommentsPage/>},
        {path:'comments/post', element:<PostPage/>}
    ]

}])
export {router}