import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { NavLink } from 'react-router-dom';

const AdmDeshboardNav = () => {
    const { user } = useContext(AuthContext)
    // console.log(email)
    const items = (
        <>
            <li className={` text-lg font-semibold `}>
                <NavLink to="/dashboard/admDashboard/admProfile">Admin Profile</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to="/dashboard/admDashboard/manageUsers">Manage Users</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to={`/dashboard/../`}>Reported Comments</NavLink>
            </li>
            <li className={` text-lg font-semibold`}>
                <NavLink to={`/dashboard/..`}>Make Announcemen</NavLink>
            </li>
        </>
    )

    return (
        <div className="">
            <ul className=" menu menu-horizontal px-1 flex justify-center items-center">{items}</ul>
        </div>
    );
};

export default AdmDeshboardNav;