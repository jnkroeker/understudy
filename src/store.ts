import { configureStore } from "@reduxjs/toolkit";
import { reducer as queryReducer } from "./modules/query/reducer";
import { reducer as resultsReducer } from "./modules/results/reducer"

export const store = configureStore({
    reducer: {
        queryReducer,
        resultsReducer
    }
})
