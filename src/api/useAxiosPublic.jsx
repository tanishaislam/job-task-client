import axios from 'axios';


const axiosPublic = axios.create({
    baseURL: 'https://job-task-server-five-pink.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic; 
};


export default useAxiosPublic;