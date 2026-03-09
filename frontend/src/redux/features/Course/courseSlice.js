import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getAllCoursesApi,
  getAllmoduleApi,
  getAllLessonApi,
} from "./courseApi";
import axios from "axios";

export const fetchCourse = createAsyncThunk(
  "courses/fetchAll",
  async () => {
    return await getAllCoursesApi();
  }
);

export const fetchAllModules = createAsyncThunk(
  "courses/fetchModules",
  async (courseId) => {
    return await getAllmoduleApi(courseId);
  }
);

export const fetchAllLesson = createAsyncThunk(
  "courses/fetchLessons",
  async (moduleId) => {
    return await getAllLessonApi(moduleId);
  }
);

export const applyToJob=createAsyncThunk("jobs/applyToJob",async (jobId)=>{
  const response=await axios.post(`http://localhost:5001/api/jobs/${jobId}/apply`,{},{withCredentials:true});
 return response.data;
})

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courseList: [],
    moduleList: [],
    lessonList: [],
    courseIsLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourse.pending, (state) => {
        state.courseIsLoading = true;
      })
      .addCase(fetchCourse.fulfilled, (state, action) => {
        state.courseIsLoading = false;
        state.courseList = action.payload;
      })
      .addCase(fetchAllModules.fulfilled, (state, action) => {
        state.moduleList = action.payload;
      })
      .addCase(fetchAllLesson.fulfilled, (state, action) => {
        state.lessonList = action.payload;
      });
  },
});

export default courseSlice.reducer;