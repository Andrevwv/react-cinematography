import { ADD_SEARCH_RESPONSE } from '../actions/addSearchResponse';
const initialState = {
    searchResponse: []
}

export default function searchResponse(state = initialState, action) {
    switch(action.type) {
        case ADD_SEARCH_RESPONSE:
            return {
                searchResponse: action.payload
            }

        default: 
            return state
    }
}