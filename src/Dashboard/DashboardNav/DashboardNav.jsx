// import React from 'react';

import { NavLink } from "react-router-dom";

const DashboardNav = () => {
    const items = (
        <>
            <li className={` text-lg font-semibold `}>
                <NavLink to="/dashboard">My Profile</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to="/membership">Add Post</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to="/membership">My Posts</NavLink>
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