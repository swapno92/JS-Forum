// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("user looged out"))
            .catch((error) => console.error(error));
    };
    // console.log(user)
    return (
        <div className="flex">
            {/* left */}
            <div className="w-4/5 line bg-gray-100"> cart</div>

            {/* right */}
            <div className="w-1/5 line bg-rose-100 px-3 py-8 ">
                <div className="w-full line pl-5 py-4 rounded-lg bg-yellow-50 space-y-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white">
                    <p><span className="font-bold text-xl">User : </span>
                        <span className="font-medium text-xl">{user?.displayName}</span>
                    </p>
                    <p className="font-bold text-xl">Dashboard</p>
                    <div className=" mr-5 text-center">
                        <a onClick={handleLogOut} className="btn font-extrabold ">
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;