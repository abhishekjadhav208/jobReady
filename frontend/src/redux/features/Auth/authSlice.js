import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import { checkAuth, login, logout, signup,updateProfile } from "./authApi"

export const getLogin=createAsyncThunk("auth/login",
    async (data)=>{
        return await login(data)
    }
)

export const getSignup=createAsyncThunk("auth/signup",
    async (data)=>{
        return await signup(data);
    }
)

export const getlogout=createAsyncThunk("auth/logout",
    async (data)=>{
        return await logout(data);
    }
)

export const getProfileUpadated=createAsyncThunk("auth/profile-update",
    async (data)=>{
        return await updateProfile(data);
    }
)

export const getCurrentUser=createAsyncThunk("auth/check-auth", async ()=>{
    return await checkAuth();
})

const authSlice= createSlice({
    name:"auth",
    initialState:{
    userData:null,
        isLoading:true,
    },

    extraReducers:(builder)=>{
        builder.
        addCase(getLogin.pending,
            (state)=>{
                state.isLoading=true;
            }
        )
        .addCase(getLogin.fulfilled,
            (state,action)=>{
                state.isLoading=false;
                state.userData=action.payload;
            }
        )
        .addCase(getSignup.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userData=action.payload;
        })

        .addCase(getlogout.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userData=null;
        })

        .addCase(getProfileUpadated.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userData=action.payload;
        })
    
        .addCase(getCurrentUser.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userData = action.payload;
    })
    .addCase(getCurrentUser.rejected, (state) => {
      state.isLoading = false;
      state.userData = null;
    }
    )
    }
})

export default authSlice.reducer;