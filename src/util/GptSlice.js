import { createSlice } from "@reduxjs/toolkit";

const gpt = createSlice({
    name:"Gpt",
    initialState:{
        Showgpt:false,
    },
    reducers:{
        addgpt:(state) =>
        {
            state.Showgpt = !state.Showgpt;
        },
    }
});
export const {addgpt} = gpt.actions;
export default gpt.reducer;