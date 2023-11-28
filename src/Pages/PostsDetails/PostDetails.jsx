// import React from 'react';

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsCaretUpSquareFill } from "react-icons/bs";
import { BsCaretDownSquareFill } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostDetails = () => {
    const posts = useLoaderData()
    const { title, description, authorImage, authorName, tag, postTime, _id, vote } = posts
    const { user } = useContext(AuthContext)

    const [upButtonDisabled, setUpButtonDisabled] = useState(false);
    const [downButtonDisabled, setDownButtonDisabled] = useState(true);

    const handleUpVote = () => {
        console.log('up')
        const countStringBefore = document.getElementById('count')
        const countString = document.getElementById('count').innerText
        const count = parseInt(countString)
        const afterCount = count + 1
        countStringBefore.innerText = afterCount
        setUpButtonDisabled(true);
        setDownButtonDisabled(false)
        const status = 'true';
        const cartId = _id
        const newVotes = { afterCount, status, cartId }

        fetch('http://localhost:5000/votes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVotes)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('You Have Up Voted')
                }
            })

            const vote = afterCount
            const updatePosts = {vote}
        fetch(`http://localhost:5000/posts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePosts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('update vote')
            })
    }

    const handleDownVote = () => {
        console.log('down')
        const countStringBefore = document.getElementById('count')
        const countString = document.getElementById('count').innerText
        const count = parseInt(countString)
        const afterCount = count - 1
        countStringBefore.innerText = afterCount
        setDownButtonDisabled(true);
        setUpButtonDisabled(false)
        const cartId = _id
        const status = 'false';
        const newVotes = { afterCount, status,cartId }

        fetch('http://localhost:5000/votes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newVotes)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast('You Have Down Voted')
                }
            })

        const vote = afterCount
        const updatePosts = { vote }
        fetch(`http://localhost:5000/posts/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePosts)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('update vote')
            })
    }

    const handleComment = () => [
        console.log('click')
    ]
    

    return (
        <div>
            <div className="w-[60%] mx-auto gap-4 grid grid-cols-3 bg-slate-100">
                <div className="border border-purple-600 rounded-lg bg-teal-50 py-4 flex flex-col justify-center">
                    <div className="flex justify-center"><img className="w-32 rounded-full" src={authorImage} alt="" /></div>
                    <h1 className="text-xl font-bold text-center mt-4">{authorName}</h1>
                </div>
                <div className=" border border-purple-600 rounded-lg p-4 space-y-4 bg-teal-50 col-span-2">
                    <li className="text-xl font-semibold">{title}</li>
                    <ToastContainer></ToastContainer>
                    <p className="font-semibold">-- {description}</p>
                    <div className="flex justify-around mt-3">
                        <button className=" px-4 py-2 rounded-lg bg-emerald-100 border border-emerald-500 font-semibold">{tag}</button>
                        <button className=" px-1 py-2 rounded-lg bg-fuchsia-200 font-semibold border border-fuchsia-500"><span className="font-bold">{postTime}</span> min</button>
                    </div>
                </div>
                <div className=' col-span-3 rounded-lg bg-teal-50 border border-purple-600 p-4 '>
                    <div className="flex justify-center rounded-lg p-4 ">
                        <textarea className="line rounded-lg pt-4 px-7" placeholder="Comment here..." name="" id="" cols={100} rows="3"></textarea>
                    </div>
                    <div className=" flex justify-around">
                        <div className="line flex items-center gap-2 px-4 rounded-lg py-1 bg-violet-100 border border-violet-700">
                            <div className=""><h1 id="count" className="font-bold text-xl">{vote}</h1></div>
                            <div className=" space-y-1 flex flex-col">
                                <button disabled={upButtonDisabled}>
                                    <BsCaretUpSquareFill onClick={handleUpVote} className={`${upButtonDisabled ? 'text-gray-500' : 'text-purple-700'} text-xl `}></BsCaretUpSquareFill>
                                </button>
                                <button disabled={downButtonDisabled}>
                                    <BsCaretDownSquareFill onClick={handleDownVote} className={`${downButtonDisabled ? 'text-gray-500' : 'text-purple-700'} text-xl `}></BsCaretDownSquareFill>
                                </button>
                            </div>
                        </div>
                        <button disabled={!user} onClick={handleComment} className={`${user ? 'bg-violet-100 border border-violet-700' : 'bg-gray-100 text-gray-400'} px-4 py-2 rounded-lg   font-semibold`}>Comment</button>
                        <div className={`${user ? 'bg-violet-100 border border-violet-700' : 'bg-gray-100 text-gray-400'} flex items-center rounded-lg  font-semibold px-4`}>
                            <FacebookShareButton disabled={!user} url={`localhost:5173/postDetails/${_id}`}
                                className=" flex items-center gap-x-3">
                                <FacebookIcon className="  w-10 h-10 rounded-full"></FacebookIcon>Share
                            </FacebookShareButton>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default PostDetails;








// const [isButtonDisabled, setButtonDisabled] = useState(false);
// const handleClick = () => {
//     setButtonDisabled(true);
//     console.log('click')
// }

// <button id="btn " style={{ backgroundColor: isButtonDisabled ? 'gray' : 'green' }} disabled={isButtonDisabled} className="p-4 line" onClick={handleClick} > click</button>