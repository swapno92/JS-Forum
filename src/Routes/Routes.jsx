import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Home from "../Pages/Home/Home/Home";
import PostDetails from "../Pages/PostsDetails/PostDetails";
import MyProfile from "../Dashboard/MyProfile/MyProfile";
import Membership from "../Pages/Membership/Membership";
import PrivateRoute from "../components/PrivateRoute";
import Myposts from "../Dashboard/MyPosts/Myposts";
import AddPosts from "../Dashboard/AddPosts/AddPosts";
import Comments from "../Pages/Comments/Comments";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import ManageUsers from "../Dashboard/ManageUsers/ManageUsers";
import ErrorPage from "../Pages/ErrorPage/Errorpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,

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
                path: '/membership',
                element: <PrivateRoute><Membership></Membership></PrivateRoute>
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/addPosts',
                element: <AddPosts></AddPosts>
            },
            {
                path: '/dashboard/myPosts/:email',
                element: <PrivateRoute><Myposts></Myposts></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/post/${params.email}`)

            },
            {
                path: '/dashboard/myPosts/comments/:title',
                element: <Comments></Comments>,
                loader: ({ params }) => fetch(`http://localhost:5000/comments/${params.title}`)

            },
            {
                path:'/dashboard/admDashboard/admProfile',
                element: <PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>
            },
            {
                path: '/dashboard/admDashboard/manageUsers',
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
]);