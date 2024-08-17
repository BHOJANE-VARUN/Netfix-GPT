import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import movieReducer from "./movieSlice.js";
import gptReducer from "./GptSlice.js"
import langReducer from "./LangSlice.js"
const appStore = configureStore(
    {
        reducer:{
            user:userReducer,
            movie:movieReducer,
            gpt:gptReducer,
            lang:langReducer,
        }
    }
)
export default appStore;