export const ADD_MOVIE_PAGE_DATA = 'ADD_MOVIE_PAGE_DATA';

export default function addMoviePageData(data) {
    return {
        type: ADD_MOVIE_PAGE_DATA,
        payload: data
    }
}