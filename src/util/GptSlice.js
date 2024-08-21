import { createSlice } from "@reduxjs/toolkit";

const gpt = createSlice({
    name:"Gpt",
    initialState:{
        Showgpt:false,
        gptMovies:null,
        gptMovieNames:null,
    },
    reducers:{
        addgpt:(state) =>
        {
            state.Showgpt = !state.Showgpt;
        },
        addgptResult :(state,action) =>
        {
            const {Moviedata,Moviename} = action.payload;
            state.gptMovies = Moviedata;
            state.gptMovieNames = Moviename;
        }
    }
});
export const {addgpt,addgptResult} = gpt.actions;
export default gpt.reducer;