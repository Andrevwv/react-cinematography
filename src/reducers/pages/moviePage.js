import { CHANGE_MOVIE_PAGE } from '../../actions/pages/changeMoviePage'
const initialState = {
    moviePage: '',
}
export default function moviePage(state = initialState, action) {
    switch(action.type) {
        case CHANGE_MOVIE_PAGE:
            return {
                ...state,
                moviePage: action.payload
            }
        default: 
            return state;
    }
}