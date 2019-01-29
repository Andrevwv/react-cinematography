import { ADD_ACTOR_PAGE_DATA } from '../../actions/pages/addActorPageData'
const initialState = {
    actorPage: {},
}
export default function actorPageData(state = initialState, action) {
    switch(action.type) {
        case ADD_ACTOR_PAGE_DATA:
            return {
                ...action.payload
            }
        default: 
            return state;
    }
}