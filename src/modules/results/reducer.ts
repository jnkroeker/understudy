import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../utils/types"

const initialSelectedState: RootState["selectedVideo"] = ""

export const resultsSlice = createSlice({
    name: "resultsIndex",
    initialState: initialSelectedState,
    reducers: {
        setSelected: (state, action: PayloadAction<string>) => {
            state = action.payload
        }
    }
})