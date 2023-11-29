// import React from 'react';
import './Banner.css'

const Banner = () => {

    return (
        <>
            <div className="relative mx-auto md:w-[95%] line w-full rounded-lg banner border  border-amber-300 shadow-lg ">
                <div className='  text-purple-800  mt-10 font-serif md:px-5 px-8  w-[95%]'>
                    <div className='border-b-4 border-black rounded-lg md:text-6xl text-4xl md:px-0 px-10 text-center lg:w-[55%] mx-auto'>Welcome to the Forum</div>
                    <div className=' md:text-2xl text-xl flex justify-center mt-4 '>
                        <input type="text" name="" id="searchInput" placeholder="Search here..." className="border border-[rgba(11,11,11,0.40)] px-10 py-1 rounded-l text-xl md:w-[35%] w-2/3" />
                        <button className="bg-[#FF444A] px-5 py-1 border border-[#ff444a] rounded-r text-white">Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;