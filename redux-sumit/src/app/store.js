import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";
//import postsReducer from "../features/posts/postsSlice";
import { apiSlice } from "../features/api/apiSlice";

const store = configureStore({
    reducer:{
        counters: counterReducer,
       [apiSlice.reducerPath]: apiSlice.reducer,
       
    },
    middleware: [],
});

export default store;