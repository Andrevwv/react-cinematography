import { CHANGE_SEARCH_INPUT } from '../actions/changeSearchInput';
const initialState = {
    searchInput: ''
}

export default function searchInput(state = initialState, action) {
    switch(action.type) {
        case CHANGE_SEARCH_INPUT: 
            return {
                searchInput: action.text
            }
        default: 
            return state;
    }
}