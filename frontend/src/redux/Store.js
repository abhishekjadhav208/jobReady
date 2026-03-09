import {configureStore} from "@reduxjs/toolkit"
import courseReducer from "./features/Course/courseSlice"
import authReducer from "./features/Auth/authSlice";
import jobReducer from "./features/Job/jobSlice";
import progressReducer from "./features/Progress/progressSlice"
export const store = configureStore({
    reducer:{
        course:courseReducer,
        auth:authReducer,
        job:jobReducer,
        progress:progressReducer,
    }
})