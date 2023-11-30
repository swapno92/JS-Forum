// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import MyPost from "./MyPost";
import { useLoaderData } from "react-router-dom";



const Myposts = () => {

    // const { user } = useContext(AuthContext)
    // console.log(user)
    const loadMyPosts = useLoaderData()
    // console.log(myPosts)
    const [ myPosts, setMyPosts] = useState(loadMyPosts)

    // const [myPosts, setMyPosts] = useState([])
    // console.log(myPosts)
    // const axiosSecure = UseAxiosSecure()
    // useEffect(() => {
    //     axiosSecure.get(`/post/${user?.email}`)
    //         .then(res => {
    //             setMyPosts(res.data)
    //         })
    // }, [])

    return (
        <div className=" w-4/5 mx-auto text-center text-xl mt-16">
            {
                myPosts?.map(post => <MyPost setMyPosts={setMyPosts} myPosts={myPosts} key={post._id} post={post}></MyPost>)
            }
        </div>
    );
};

export default Myposts;