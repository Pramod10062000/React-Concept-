import { createSlice } from "@reduxjs/toolkit";

 const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        email: "",
        password:"",
        username:"",
        token: false,
        error:''
    },
    reducers:{
        registerSuccess:(state,action)=>{
            
            console.log(action.payload);
            
        },
        registerFailure:(state,action)=>{
            console.log(action.payload);
        },
        LoginSuccess:(state,action)=>{
            console.log(action.payload);
            
        },
        LoginFailure:(state,action)=>{
            console.log(action.payload);
        },

    }


});
export const{registerSuccess,registerFailure,LoginSuccess,LoginFailure}=authSlice.actions;
export default authSlice.reducer;