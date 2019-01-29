export const ADD_ACTOR_PAGE_DATA = 'ADD_ACTOR_PAGE_DATA';

export default function addActorPageData(data) {
    return {
        type: ADD_ACTOR_PAGE_DATA,
        payload: data
    }
}