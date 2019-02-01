import { ADD_HOME_PAGE_DATA } from '../../actions/pages/addHomePageData'
const initialState = {
    homePage: {},
}
export default function homePageData(state = initialState, action) {
    switch(action.type) {
        case ADD_HOME_PAGE_DATA:
            return {
                ...action.payload
            }
        default: 
            return state;
    }
}