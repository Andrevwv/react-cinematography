import { SET_SEARCH_REQUEST } from '../actions/searchRequest';
const initialState = {
    searchPhrase: ''
}

export default function searchPhrase(state = initialState, action) {
    switch(action.type) {
        case SET_SEARCH_REQUEST: 
            return {
                searchPhrase: action.text
            }
            
        default: 
            return state;
    }
}