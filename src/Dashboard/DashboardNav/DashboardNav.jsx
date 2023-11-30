// import React from 'react';

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const DashboardNav = () => {
    const {user} = useContext(AuthContext)
    const {email} = user
    // console.log(email)
    const items = (
        <>
            <li className={` text-lg font-semibold `}>
                <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to="/dashboard/addPosts">Add Post</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to={`/dashboard/myPosts/${email}`}>My Posts</NavLink>
            </li>
        </>
    )

    return (
        <div className="">
            <ul className=" menu menu-horizontal px-1 flex justify-center items-center">{items}</ul>
        </div>
    );
};

export default DashboardNav;