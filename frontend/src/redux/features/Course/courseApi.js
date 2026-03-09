import axios from "axios"

const API = axios.create({
    baseURL: "/api/courses",
});
export const getAllCoursesApi=async ()=>{
    const response=await API.get("/all-course");
    return response.data;
};

export const getOneCourseApi=async (courseId)=>{
    const response=await API.get(`/${courseId}`);
    return response.data;
}

export const getAllmoduleApi=async (courseId)=>{
    const response=await API.get(`/course/${courseId}`);
    return response.data;
}

export const getAllLessonApi = async (moduleId) => {
    const response = await API.get(`/module/${moduleId}`);
    return response.data;
};

