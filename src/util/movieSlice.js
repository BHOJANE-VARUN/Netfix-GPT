import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        talierVideo:null,
        kdrama:null,
        anime:null,
        actio:null,
        comedy:null,
    },
    reducers:{
        addmovies: (state,action) =>{
            state.nowPlayingMovies =  action.payload;
        },
        addTrailerVideo : (state,action)=>{
            state.talierVideo = action.payload;
        },
        addkdrama : (state,action)=>{
            state.kdrama = action.payload;
        },
        addanime : (state,action)=>{
            state.anime = action.payload;
        },
        addactio : (state,action)=>{
            state.actio = action.payload;
        },
        addcomedy : (state,action)=>{
            state.comedy = action.payload;
        },
    }
})
export const {addmovies, addTrailerVideo,addkdrama,addanime,addactio,addcomedy} = movieSlice.actions;
export default movieSlice.reducer;