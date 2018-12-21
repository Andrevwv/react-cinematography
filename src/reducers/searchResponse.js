import { ADD_SEARCH_RESPONSE } from '../actions/addSearchResponse';
const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
}

export default function searchResponse(state = initialState, action) {
    switch(action.type) {
        case ADD_SEARCH_RESPONSE:
            return {
                ...action.payload
            }

        default: 
            return state
    }
}