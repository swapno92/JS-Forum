// import React from 'react';
import './Banner.css'

const Banner = () => {
   
    return (
        <>
            <div className="relative mx-auto w-[95%] rounded-lg banner border  border-amber-300 shadow-lg ">
                <div className='text-6xl text-purple-800  mt-10 font-serif px-5 bggra'>
                    <div className='border-b-4 border-black rounded-lg '>Welcome to the Forum</div>
                    <div className='div text-2xl flex justify-center mt-4'>
                        <input type="text" name="" id="searchInput" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l text-xl" />
                        <button className="bg-[#FF444A] px-5 py-1 border border-[#ff444a] rounded-r text-white">Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;