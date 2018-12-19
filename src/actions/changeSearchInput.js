export const CHANGE_SEARCH_INPUT = 'CHANGE_SEARCH_INPUT'

export default function chengeSearchInput(text) {
    return {
        type: CHANGE_SEARCH_INPUT,
        text
    }
}