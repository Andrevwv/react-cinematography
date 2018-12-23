import { ADD_MOVIE_PAGE_DATA } from '../../actions/pages/addMoviePageData'
const initialState = {
    moviePage: {},
}
export default function moviePageData(state = initialState, action) {
    switch(action.type) {
        case ADD_MOVIE_PAGE_DATA:
            return {
                ...action.payload
            }
        default: 
            return state;
    }
}