
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { completeLessons, fetchProgress } from "./progressApi";

// Pass payload as object {courseId, lessonId}
export const markLessonComplete = createAsyncThunk(
  "progress/markLessonComplete",
  async ({ courseId, lessonId }) => {
    const data = await completeLessons(courseId, lessonId);
    return data;
  }
);

export const getProgress = createAsyncThunk(
  "progress/getProgress",
  async () => {
    const data = await fetchProgress();
    return data;
  }
);

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    progressList: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(markLessonComplete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markLessonComplete.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.progressList.findIndex(
          (p) => p.course._id === action.payload.course._id
        );
        if (index >= 0) {
          state.progressList[index] = action.payload;
        } else {
          state.progressList.push(action.payload);
        }
      })
      .addCase(getProgress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProgress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.progressList = action.payload;
      });
  },
});

export default progressSlice.reducer;