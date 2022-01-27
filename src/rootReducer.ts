import { PERFORM_QUERY, SET_SELECTED } from "./actions"
import { Action, RootState } from "./utils/types"

const initialState: RootState = {
    currentQueryResults: [],
    selectedVideo: ''
}

export const rootReducer = (
    state: RootState = initialState,
    action: Action 
) => {
    switch (action.type){
        case PERFORM_QUERY: {
            return {
                ...state,
                selectedVideo: ''
            }
        }
        case SET_SELECTED: {
            return {
                ...state,
                selectedVideo: action.payload
            }
        }
        default:
            return state
    }
}