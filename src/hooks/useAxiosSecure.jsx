// import React from 'react';

import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://y-two-azure.vercel.app'
})
const UseAxiosSecure = () => {
    return axiosSecure
}

export default UseAxiosSecure;