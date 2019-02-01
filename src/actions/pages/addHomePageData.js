export const ADD_HOME_PAGE_DATA = 'ADD_HOME_PAGE_DATA';

export default function addHomePageData(data) {
    return {
        type: ADD_HOME_PAGE_DATA,
        payload: data
    }
}