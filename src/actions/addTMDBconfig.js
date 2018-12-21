export const ADD_TMDB_CONFIG = 'ADD_TMDB_CONFIG';

export default function addTMDBconfig(payload) {
    return {
        type: ADD_TMDB_CONFIG,
        payload
    }
}