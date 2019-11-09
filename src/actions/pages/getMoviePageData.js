import addMoviePageData from './addMoviePageData';
import { API_KEY } from '../../APIconfig';

export default function getMoviePageData(pageID) {
		const appendToResponse = ['credits', 'videos', 'similar'];
    return dispatch => {

			const URL = `https://api.themoviedb.org/3/movie/${pageID}?api_key=${API_KEY}&language=en-US&append_to_response=${appendToResponse}`;
			fetch(URL)
				.then( response => response.json() )
				.then( data => {
					dispatch(addMoviePageData(data))
				} )	
    }
}


