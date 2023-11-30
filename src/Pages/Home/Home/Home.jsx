// import React from 'react';

import { useEffect, useState } from "react";
import AllTages from "../AllTages/AllTages";
// import Banner from "../Banner/Banner";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import Post from "../Post/Post";
// import Postes from "../Postes/Postes";
import './Banner.css'


const Home = () => {

    const [posts, setPosts] = useState([])
    const axiosSecure = UseAxiosSecure()
    const [searchItem, setSearchItem] = useState('')

    useEffect(() => {
        axiosSecure.get('/posts')
            .then(res => {
                setPosts(res.data)
            })
    }, [])

    const filterData = posts?.filter((item) => {
        if (item && item.tag) {
            return item.tag.toLowerCase().includes(searchItem.toLowerCase())
        }
        return false
    })

    const handleSearch = () => {
        const searchValue = document.getElementById('searchInput').value
        setSearchItem(searchValue)
    }
    const handleSorting = () =>{
        console.log('shorting click')
    }
    

    return (
        <div>
            {/* <Banner></Banner> */}
            <div className="relative mx-auto md:w-[95%] line w-full rounded-lg banner border  border-amber-300 shadow-lg ">
                <div className='  text-purple-800  mt-10 font-serif md:px-5 px-8  w-[95%]'>
                    <div className='border-b-4 border-black rounded-lg md:text-6xl text-4xl md:px-0 px-10 text-center lg:w-[55%] mx-auto'>Welcome to the Forum</div>
                    <div className=' md:text-2xl text-xl flex justify-center mt-4 '>
                        <input type="text" name="" id="searchInput" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l text-xl md:w-[35%] w-2/3" />
                        <button onClick={handleSearch} className="bg-[#FF444A] px-5 py-1 border border-[#ff444a] rounded-r text-white">Search</button>
                    </div>
                </div>
            </div>
            <AllTages></AllTages>
            {/* <Postes></Postes> */}
            <div className="mx-auto w-[95%] rounded-lg  bg-slate-200 border border-slate-400">
                <div className="flex justify-center pt-4 "><button onClick={handleSorting} className="btn btn-info">Sort by Popularity</button></div>
                <div id="hidden" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-4">

                    {
                        filterData.map(post => <Post key={post._id} post={post}></Post>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Home;