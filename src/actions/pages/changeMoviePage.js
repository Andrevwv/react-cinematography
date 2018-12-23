export const CHANGE_MOVIE_PAGE = 'CHANGE_MOVIE_PAGE';

export default function changeMoviePage(payload) {
    return {
        type: CHANGE_MOVIE_PAGE,
        payload
    }
}