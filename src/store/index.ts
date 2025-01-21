// This file configures Redux store and defines types for RootState & AppDispatch.

import {configureStore} from "@reduxjs/toolkit";
import loaderReducer from "./features/LoaderSlice";

// Configure Redux store with reducers
export const store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
});

// Define RootState type as the return type of store.getState
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type as the dispatch function of the store
export type AppDispatch = typeof store.dispatch;
