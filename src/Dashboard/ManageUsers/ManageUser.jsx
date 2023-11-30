// import React from 'react';

import { RiDeleteBinFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


const ManageUser = ({ user, refetch }) => {
    const axiosSecure = UseAxiosSecure()

    const hanleDeleteUser = (user) => {
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

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="flex">
            <div className=" border border-gray-500 w-1/4 py-2 px-3">{user.name}</div>
            <div className="text-start border border-gray-500 w-[50%] py-2 font-semibold">{user.email}</div>

            <div onClick={() => handleMakeAdmin(user)} className=" border border-gray-500 w-1/4 py-2 flex justify-center items-center">
                {
                    user.role === 'admin' ? 'Admin' :
                        <GrUserAdmin className="text-4xl text-indigo-700 border border-indigo-500 rounded-full p-1"></GrUserAdmin>
                }
            </div>

            <div onClick={() => hanleDeleteUser(user)} className=" border border-gray-500 w-1/4 py-2 flex justify-center items-center"><RiDeleteBinFill className="text-4xl text-red-700 border border-red-800 rounded-full p-1"></RiDeleteBinFill></div>
        </div>
    );
};

export default ManageUser;