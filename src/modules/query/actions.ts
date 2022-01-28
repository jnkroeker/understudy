import { AnyAction, createAction } from "@reduxjs/toolkit"

export type Action = 
| AnyAction 
| ReturnType<typeof performQuery>

export const performQuery = createAction<string>("PERFORM_QUERY")