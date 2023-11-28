// import React from 'react';

import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Post from "../Post/Post";

const Postes = () => {
    const [posts, setPosts] = useState([])
    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        axiosSecure.get('/posts')
            .then(res => {
                setPosts(res.data)
            })
    }, [])
    // console.log(posts)


    const handleSorting = () => {
    //     console.log('click')
    //     const me = document.getElementById('hidden')
    //     me.innerHTML = ``

        // useEffect(() => {
        //     axiosSecure.get('/posts?sort=length&order = desc')
        //         // GET / songs ? sort = length & order=desc
        //         .then(res => {
        //             setPosts(res.data)
        //         })
        // }, [])
    }


    return (
        <div className="mx-auto w-[95%] rounded-lg  bg-slate-200 border border-slate-400">
            <div className="flex justify-center pt-4 "><button onClick={handleSorting} className="btn btn-info">Sort by Popularity</button></div>
            <div id="hidden" className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 p-4">

                {
                    posts.map(post => <Post key={post._id} post={post}></Post>)
                }

            </div>
        </div>
    );
};

export default Postes;