import axios from "axios";

const API=axios.create({
    baseURL:"/api",
    withCredentials:true
})

export const getAllJob= async ()=>{
    const response=await API.get("/jobs");
    return response.data;
}

export const getOneJob = async (jobId)=>{
    const response=await API.get(`jobs/${jobId}`);
    return response.data;
}