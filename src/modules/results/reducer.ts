import { createReducer } from "@reduxjs/toolkit"
import { RootState } from "../../utils/types"
import { Action, setSelected } from "./actions"

const initialSelectedState: RootState["selectedVideo"] = ""

export const reducer = createReducer(initialSelectedState, (builder) => {
    builder.addCase(setSelected, (state, action) => {
        state = action.payload
    })
})