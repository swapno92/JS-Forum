// import React from 'react';
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyPost = ({ post, myPosts, setMyPosts }) => {
    const { authorImage, title, postTime, tag, _id, vote, } = post

    const handleDelete = _id => {
        // if (email === user?.email) {
            // console.log(true)
            // console.log(_id)
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/posts/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                const remainingMyPosts = myPosts.filter(posts => posts._id !== _id)
                                setMyPosts(remainingMyPosts)
                            }
                        })

                    console.log('delete confirmed')
                }
            });
        // }
        // else {
        //     // console.log(false)
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "You can only delete assignments you have created!",
        //         footer: '<a href="#">Why do I have this issue?</a>'
        //     });
        // }
    }



    return (
        <div className="flex">
            <div className=" border border-gray-500 w-[40%] py-2 px-3">{title.slice(0, 42)}..</div>
            <div className=" border border-gray-500 w-1/4 py-2 font-semibold">votes : {vote}</div>
            <Link to={`/dashboard/myPosts/comments/${_id}`} className=" border border-gray-500 w-1/4 py-2 flex justify-center items-center"><button className='bg-violet-100 border border-violet-700 px-4 py-2 rounded-lg   font-semibold'>Comment</button></Link>
            <div className=" border border-gray-500 w-1/4 py-2 flex justify-center items-center"><RiDeleteBinFill onClick={() => handleDelete(_id)} className="text-4xl text-red-700 border border-red-800 rounded-full p-1"></RiDeleteBinFill></div>
        </div>
    );
};

export default MyPost;