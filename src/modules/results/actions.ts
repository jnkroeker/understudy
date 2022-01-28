import { AnyAction, createAction } from "@reduxjs/toolkit"

export type Action =
    | AnyAction
    | ReturnType<typeof setSelected>

export const setSelected = createAction<string>("SET_SELECTED")