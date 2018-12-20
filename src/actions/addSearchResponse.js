export const ADD_SEARCH_RESPONSE = 'ADD_SEARCH_RESPONSE';

export default function addSearchResponse(data) {
    return {
        type: ADD_SEARCH_RESPONSE,
        payload: data
    }
}