import axios from "axios"

const API=axios.create({
    baseURL:"http://localhost:5001/api/auth",
    withCredentials:true,
}
);

export const login=async (data)=>{
    const response= await API.post("/login",data);
    return response.data;
}

export const signup=async (data)=>{
    const response=await API.post("/signup",data);
    return response.data;
}

export const logout=async (data)=>{
    const response=await API.post("/logout",data);
    return response.data;
}

export const updateProfile=async (data)=>{
    const response=await API.put("/update-profile",data,{withCredentials:true});
    return response.data;
}

export const checkAuth=async ()=>{
    const response=await API.get("/check-auth");
    return response.data;
}