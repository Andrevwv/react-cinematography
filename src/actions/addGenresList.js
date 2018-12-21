export const ADD_GENRES_LIST = 'ADD_GENRES_LIST';

export default function addGenresList(payload) {
    return {
        type: ADD_GENRES_LIST,
        payload
    }
}