import { createSlice } from "@reduxjs/toolkit";
import Lang from "./LangConstants";

const lang = createSlice({
    name:"lang",
    initialState:{
        obj:Lang.eng,
    },
    reducers:{
        addlang:(state,action) =>{
            state.obj = action.payload;
        }
    },
});
export const {addlang} = lang.actions;
export default lang.reducer;