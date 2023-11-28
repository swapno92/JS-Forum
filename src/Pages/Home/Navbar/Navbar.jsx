// import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdNotificationsActive } from "react-icons/md";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    // const { user } = useContext(AuthContext)
    const { user } = useContext(AuthContext);
    // console.log(user.email)

   

    const items = (
        // {`${user ? 'block' : "hidden"}`}
        // {`${user ? 'hidden' : "block"}`}
        <>
            <li className={` text-lg font-semibold `}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to="/membership">Membership</NavLink>
            </li>
            <li className="">
                <MdNotificationsActive className="text-6xl" />
            </li>
            <li className={` text-lg font-semibold `}>
                <NavLink to="/login">Join US</NavLink>
            </li>
        </>
    );
    return (
        <div className="navbar bg-base-100 lg:px-10 px-3 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
                    >
                        {items}
                    </ul>
                </div>
                <img
                    src="https://i.ibb.co/zHsDt41/logo.jpg"
                    className=" w-12  rounded-full"
                    alt=""
                />
                <a className="btn btn-ghost normal-case text-3xl font-bold font-serif">
                    JS Forum
                </a>
            </div>
            <div className="navbar-center hidden lg:flex ml-32 ">
                <ul className="menu menu-horizontal px-1 flex items-center">{items}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <Link to='/dashboard'>
                            <img className="w-10 mr-2 h-10 rounded-full" title={user.displayName} src={user.photoURL} />
                        </Link>
                        {/* <span className="mx-3 bg-gray-300 px-2 py-3 rounded lg">
                            {user.displayName}
                        </span> */}
                    </>
                ) : (
                    <>
                        <Link to="/login">
                            <button className={` text-lg font-semibold `}>Login</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
