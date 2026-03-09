import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getAllJob, getOneJob } from "./jobApi";

// Fetch all jobs
export const fetchAllJob = createAsyncThunk("jobs/fetchAllJob", async () =>
  getAllJob(),
);
export const fetchOneJob = createAsyncThunk("jobs/fetchOneJob", async (jobId) =>
  getOneJob(jobId),
);

// ✅ New thunk to apply to a job
export const applyToJob = createAsyncThunk("jobs/applyToJob", async (jobId,{ rejectWithValue }) => {
 
  try {
     const response = await axios.post(
    `http://localhost:5001/api/jobs/${jobId}/apply`,
    {},
    { withCredentials: true },
  );
  return response.data;

  } catch (error) {
    return rejectWithValue(error.response.data.message);
  }
});

export const fetchAppliedJobs = createAsyncThunk(
  "job/fetchAppliedJobs",
  async (_, { getState }) => {
    const token = getState().auth.token; // get token from redux

    const res = await axios.get("http://localhost:5001/api/jobs/applied", {
      withCredentials: true,
    });

    return res.data;
  },
);

const jobSlice = createSlice({
  name: "job",
  initialState: {
    jobList: [],
    current: null,
    isLoading: false,
    appliedJobs: [],
  },
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchAllJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobList = action.payload;
      })
      // fetch one
      .addCase(fetchOneJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOneJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.current = action.payload;
      })
      // apply
      .addCase(applyToJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(applyToJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appliedJobs = action.payload.jobs;
        alert("Applied successfully!");
      })
      .addCase(applyToJob.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(fetchAppliedJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAppliedJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appliedJobs = action.payload;
      });
  },
});

export default jobSlice.reducer;
