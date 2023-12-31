// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { GiGoldStack } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import ThreePost from "./ThreePost";
import DashboardNav from "../DashboardNav/DashboardNav";
import Myposts from "../MyPosts/Myposts";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    // console.log(user)

    const [myPosts, setMyPosts] = useState([])
    // console.log(myPosts)
    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/post/${user?.email}`)
            .then(res => {
                setMyPosts(res.data.slice(0, 3))
            })
    }, [])

    return (
        <>
            <DashboardNav></DashboardNav>
            <div className="lg:w-[50%] md:w-[80%] mt-4 mx-auto line space-y-4 py-4 rounded-lg bg-green-100">
                <div className="flex justify-center"><img src={user?.photoURL} alt="" className="w-28 rounded-full border-2 border-black" /></div>
                <h2 className="text-xl font-bold text-center">{user?.displayName}</h2>
                <h2 className="text-lg font-semibold text-center">{user?.email}</h2>
                <div className=" flex justify-center gap-20">
                    <div className=" border border-gray-400 rounded-lg bg-gray-200 px-3 py-1 flex flex-col items-center">
                        <GiGoldStack className="text-3xl"></GiGoldStack>
                        <h2 className="font-bold text-xl">Bronze Badge</h2>
                    </div>
                    <div className=" border border-gray-400 rounded-lg bg-gray-200 px-3 py-1 flex flex-col items-center">
                        <FaMedal className="text-3xl"></FaMedal>
                        <h2 className="font-bold text-xl">Gold Badge</h2>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-6 w-[95%] rounded-lg  bg-slate-200 border border-slate-400">
                <div id="hidden" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 md:p-4">

                    {
                        myPosts?.map(post => <ThreePost key={post._id} post={post}></ThreePost>)
                    }

                </div>
                <div className={` ${Myposts.length === 0 ? 'block' : 'hidden'} flex flex-col justify-center py-4 mb-4 items-center `}>
                    <button className="btn line bg-yellow-200 text-xl">You have no Post</button>
                </div>
            </div>
        </>
    );
};

export default MyProfile;