import { createReducer } from "@reduxjs/toolkit"
import { RootState } from "../../utils/types"
import { Action, performQuery } from "./actions"

const initialQuery: RootState["currentQueryString"] = ""

export const reducer = createReducer(initialQuery, (builder) => {
    builder.addCase(performQuery, (state, action) => {
        state = action.payload
    })
})

// Selectors
export const currentQueryString = (state: RootState) => state.currentQueryString 
