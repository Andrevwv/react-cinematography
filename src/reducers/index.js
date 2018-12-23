import { combineReducers } from 'redux';
import searchInput from './searchInput';
import searchResponse from './searchResponse';
import requestTMDBsettings from './requestTMDBsettings'
import genresList from './genresList'
import moviePage from './pages/moviePage'

export default combineReducers({
  input: searchInput,
  searchResponse,
  settings: requestTMDBsettings,
  genres: genresList,
  moviePage
})
