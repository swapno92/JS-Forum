// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import AdmDeshboardNav from "../AdmDeshboardNav/AdmDeshboardNav";
import ManageUser from "./ManageUser";

const ManageUsers = () => {
    const axiosSecure = UseAxiosSecure()
    
    const {data : users = [],refetch} = useQuery({
        queryKey : ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    return (
        <>
            <AdmDeshboardNav></AdmDeshboardNav>
            <div>
                <div className=" w-4/5 mx-auto text-center text-xl mt-16">
                    {
                        users?.map(user => <ManageUser key={user._id} refetch={refetch} user={user}   ></ManageUser>)
                    }
                    
                </div>
            </div>
        </>
    );
};

export default ManageUsers;