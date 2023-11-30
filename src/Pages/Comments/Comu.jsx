// import React from 'react';

import { useEffect, useState } from "react";
import { axiosSecure } from "../../hooks/UseAxiosSecure";


const Comu = ({com}) => {
    // console.log(com)
    // const {_id} = com

    const [commm, setComm] = useState()
    
    // const showComments = (_id) =>{
        useEffect(() => {
            axiosSecure.get(`/com/${com._id}`)
                .then(res => {
                    setComm(res.data)
                })
        }, [])
    // }
    console.log(commm?.comment)

    return (
        <div className="flex">
            <div className=" border border-gray-500 w-[40%] py-2 px-3">{com.title}</div>
            <div  className=" flex items-center justify-center border border-gray-500 w-1/4 py-2 font-semibold"> {com.comment.slice(0, 42)} <small onClick={() => document.getElementById('my_modal_1').showModal(com._id)} className="text-purple-700"> read more</small></div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">{commm?.comment}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <div className=" border border-gray-500 w-1/4 py-2 flex justify-center items-center">
                <span>Feedback</span>
                <select id="" name="tag" defaultValue={'000'} className="input input-bordered w-[85%]  pl-8 md:ml-0 ml-4 ">
                    <option value="event-loop">The post is very good</option>
                    <option value="variable-declarations">Very important post,great to see it</option>
                    <option value="fetch-api" >The post could gave been modified more nicely</option>
                </select>
            </div>
            <div className=" border border-gray-500 w-1/4 py-2 flex justify-center items-center"><button disabled className='bg-violet-100 border border-violet-700 px-4 py-2 rounded-lg   font-semibold'>Report</button></div>

        </div>
    );
};

export default Comu;