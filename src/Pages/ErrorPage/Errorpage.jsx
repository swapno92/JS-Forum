// import React from 'react';

import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError
    return (
        <div className=" h-screen text-center flex flex-col justify-center items-center space-y-4 px-6">
            <h1 className="text-7xl font-serif font-black">
                <span className="text-red-600">4</span>
                <span className="text-red-400">0</span>
                <span className="text-red-600">4</span>
            </h1>
            <h2 className="text-4xl font-semibold">Oops! </h2>
            <p className="text-3xl">Sorry, an unexpected error has occurred !!!</p>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    );
};

export default ErrorPage;