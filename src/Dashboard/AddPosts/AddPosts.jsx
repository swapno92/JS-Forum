// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { Link } from "react-router-dom";
import DashboardNav from "../DashboardNav/DashboardNav";

const AddPosts = () => {

    const { user } = useContext(AuthContext)
    console.log(user)
    const handleAdded = (e) => {
        // e.preventDefault();
        const form = e.target;
        const authorName = form.authorName.value;
        const authorImage = form.authorImage.value;
        const authorEmail = form.authorEmail.value;
        const title = form.title.value;
        const tag = form.tag.value;
        const description = form.description.value;
        const postTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        const vote = 0;
        const author = { authorName, authorImage, authorEmail, title, tag, description, postTime, vote };
        console.log(author)

        fetch("https://y-two-azure.vercel.app/posts", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(author),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                swal('Added Posts Successfully')
            });
    }

    const [myPosts, setMyPosts] = useState([])
    // console.log(myPosts)
    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        axiosSecure.get(`/post/${user?.email}`)
            .then(res => {
                setMyPosts(res.data)
            })
    }, [])

    console.log(myPosts.length)

    return (
        <>
        <DashboardNav></DashboardNav>

            {/* add to card */}
            <form className={` ${myPosts.length > 4 ? 'hidden' : 'block'} `} onSubmit={handleAdded}>
                <div className="my-4  py-3 rounded-lg border border-purple-500 ">
                    <h2 className="text-center text-3xl font-bold font-serif text-gray-600">
                        Add Posts
                    </h2>
                    <div className="grid md:grid-cols-2 grid-cols-1  md:px-16 ">
                        <div className="space-y-1 mt-8 ">
                            <h3 className="text-lg font-semibold ml-4">Author Name...</h3>
                            <input
                                className="border border-gray-500 input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                type="text"
                                name="authorName"
                                id=""
                                placeholder="Name"
                                defaultValue={user?.displayName}
                            />
                        </div>
                        <div className="space-y-1 mt-8 ">
                            <h3 className="text-lg font-semibold ml-4">Author Email...</h3>
                            <input
                                type="text"
                                name="authorEmail"
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                id=""
                                placeholder="email"
                                defaultValue={user?.email}
                            />
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Post Title...</h3>
                            <input
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                type="text"
                                name="title"
                                id=""
                                placeholder="title"
                            />
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Author Image...</h3>
                            <input
                                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                                type="url"
                                name="authorImage"
                                id=""
                                defaultValue={user?.photoURL}
                            />
                        </div>
                        <div className="space-y-1 mt-8 md:col-span-2  mr-16">
                            <h3 className="text-lg font-semibold ml-4">Description</h3>
                            <textarea
                                className="border  border-gray-300 rounded-lg pt-8 w-full   pl-8 md:ml-0 ml-4 "
                                name="description"
                                id=""
                                // cols="lg:65"
                                rows="4"
                                placeholder="Short Description"
                            ></textarea>
                        </div>
                        <div className="space-y-1 mt-8">
                            <h3 className="text-lg font-semibold ml-4">Posts Tags :</h3>
                            <select id="" name="tag" defaultValue={'000'} className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4 ">
                                <option value="event-loop">event-loop </option>
                                <option value="variable-declarations">variable-declarations</option>
                                <option value="fetch-api" >fetch-api</option>
                                <option value="async-await" >async-await</option>
                                <option value="arrow-function" >arrow-function</option>
                            </select>
                        </div>
                        <div className=" mt-8 flex gap-4 justify-center items-center">
                            <div className=" flex flex-col text-center  w-[40%] space-y-3">
                                <span className="text-xl font-bold">Up vote</span>
                                <input disabled type="text" defaultValue='00' className=" rounded-lg font-bold text-center border  border-gray-500" />
                            </div>
                            <div className=" flex flex-col text-center w-[40%] space-y-3">
                                <span className="text-xl font-bold">Down vote</span>
                                <input disabled type="text" defaultValue='00' className=" rounded-lg font-bold text-center border border-gray-500" />
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center mt-8">
                        <button className=" bg-gray-700 text-white rounded-lg px-12 py-3">
                            Add Product
                        </button>
                    </div>
                </div>
            </form>

            <div className={` ${myPosts.length > 4 ? 'block' : 'hidden'} flex flex-col justify-center mt-20 items-center space-y-4`}>
                <h1 className=" lg:w-2/3 text-center text-xl font-semibold">You have made 5 posts, Please add as a meber, and collect the gold badge, then you can post more than five...</h1>
                <Link to='http://localhost:5173/membership'  className="btn line bg-yellow-200 text-xl">Become a Member</Link>
            </div>
        </>
    );
};
export default AddPosts;
