// import React from 'react';

const ThreePost = ({ post }) => {
    const { authorImage, title, postTime, tag, _id, vote } = post

    return (
        <div  className="shadow-lg p-4 rounded-lg bg-yellow-50 space-y-3">
            <div className="flex justify-center"><img src={authorImage} alt="" className="w-28 rounded-full border-2 border-black" /></div>
            <p className=" font-semibold text-xl">{title.slice(0, 72)}..</p>
            <div className="flex justify-between">
                <button className=" px-4 py-2 rounded-lg bg-emerald-100 border border-emerald-500 font-semibold">{tag}</button>
                <button className=" px-1 py-2 rounded-lg bg-fuchsia-200 font-semibold border border-fuchsia-500"><span className="font-bold">{postTime}</span> min</button>
            </div>
            <div className=" flex justify-between">
                <button className=" px-4 py-2 rounded-lg bg-red-200 font-semibold border border-red-500">Comments : 23</button>
                <button className=" px-4 py-2 rounded-lg bg-yellow-100 font-semibold border border-yellow-500">Votes : {vote}</button>
            </div>
        </div>
    );
};

export default ThreePost;