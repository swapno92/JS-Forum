import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/Home/Home/Home";
import PostDetails from "../Pages/PostsDetails/PostDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/postDetails/:id',
                element: <PostDetails></PostDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // {
            //     path: <Dashboard
            // }
        ]
    }
]);