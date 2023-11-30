// import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    
    if (loading) {
        return <div className="flex justify-center mt-60">
            <span className="loading loading-infinity loading-lg "></span>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}