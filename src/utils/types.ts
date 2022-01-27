import { PERFORM_QUERY, SET_SELECTED } from "../actions"

export type RootState = {
    selectedVideo: string
    currentQueryResults: string[]
}

export type Action = 
    | {
        type: typeof PERFORM_QUERY
        payload: string
    }
    | {
        type: typeof SET_SELECTED
        payload: string
    }

