export const SEARCH_REQUEST = 'SEARCH_REQUEST'

export function searchRequest(text) {
    return {
        type: SEARCH_REQUEST,
        text
    }
}