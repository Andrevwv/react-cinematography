import addActorPageData from './addActorPageData';
import { API_KEY } from '../../APIconfig';

export default function getActorPageData(pageID) {
    const appendToResponse = ['images', 'movie_credits'];
    return dispatch => {
		const URL = `https://api.themoviedb.org/3/person/${pageID}?api_key=${API_KEY}&language=en-US&append_to_response=${appendToResponse}`;
		fetch(URL)
			.then( response => response.json() )
			.then( data => {
				dispatch(addActorPageData(data))
			} )
    }
}


