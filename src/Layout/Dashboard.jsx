// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import DashboardNav from "../Dashboard/DashboardNav/DashboardNav";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("user looged out"))
            .catch((error) => console.error(error));
        navigate('/')
    };
    return (
        <div className="flex">
            {/* left */}
            <div className="lg:w-4/5 line bg-gray-100">
                <DashboardNav></DashboardNav>
                <Outlet></Outlet>
            </div>

            {/* right */}
            <div className="lg:w-1/5 line bg-teal-300 px-3 py-8 ">
                <div className="w-full line pl-5 py-4 rounded-lg h-screen bg-gray-200 space-y-8">
                    <p><span className="font-bold text-xl">User : </span>
                        <span className="font-medium text-xl">{user?.displayName}</span>
                    </p>
                    <p className="font-bold text-xl">
                        <NavLink to='/dashboard' className=' p-2 bg-gray-300 border border-gray-500 rounded-lg'>Dashboard</NavLink>
                    </p>

                    <div className=" mr-5 text-center">
                        <a onClick={handleLogOut} className="btn font-extrabold line bg-teal-300">
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;