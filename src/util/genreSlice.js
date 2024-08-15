import { createSlice } from "@reduxjs/toolkit";

const genre = createSlice({
    initialState:null,
    reducers:{
        addgenre:(state,action)=>{
            state.genre = action.payload;
        }
    }
})