import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../utils/types"
import { Action, performQuery } from "./actions"

const initialQuery: RootState["currentQueryString"] = ""

export const querySlice = createSlice({
    name: "queryIndex",
    initialState: initialQuery,
    reducers: {
        performQuery: (state, action: PayloadAction<string>) => {
            state = action.payload
        }
    }
})

// Selectors
export const currentQueryString = (state: RootState) => state.currentQueryString 
