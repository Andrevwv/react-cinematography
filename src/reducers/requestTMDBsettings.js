import { ADD_TMDB_CONFIG } from '../actions/addTMDBconfig'
const initialState = {
    change_keys: [],
    images: {}
}
export default function requestTMDBsettings(state = initialState, action) {
    switch(action.type) {
        case ADD_TMDB_CONFIG:
            return {
                ...action.payload
            }
        default: 
            return state;
    }
}