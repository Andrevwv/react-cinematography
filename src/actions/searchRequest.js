import addSearchResponse from './addSearchResponse';
import { API_KEY } from '../APIconfig';

export default function searchRequest(text) {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`)
        .then(response => response.json())
        .then(data => dispatch(addSearchResponse(data)))
    }
}


