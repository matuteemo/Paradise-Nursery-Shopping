import { configureStore } from "@reduxjs/toolkit";
import plantReducer from "./plantSlice";

export default configureStore({
    reducer: {
        plants: plantReducer
    }
});

// The main purpose of this file is to allow us to create a Redux store that holds the state of our application. By exporting the configured store, we can then use it in our application to provide access to the Redux state and dispatch actions to update that state.