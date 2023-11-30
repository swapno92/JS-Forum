import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://y-two-azure.vercel.app'
})

const useAxiosPublick = () => {
    return axiosPublic;
};

export default useAxiosPublick;