export const SET_SEARCH_REQUEST = 'SET_SEARCH_REQUEST'

export default function searchRequest(text) {
    return {
        type: SET_SEARCH_REQUEST,
        text
    }
}