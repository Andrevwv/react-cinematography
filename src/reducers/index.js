import { combineReducers } from 'redux';
import searchInput from './searchInput';
import searchResponse from './searchResponse';
import requestTMDBsettings from './requestTMDBsettings'
import genresList from './genresList'

export default combineReducers({
  input: searchInput,
  searchResponse,
  settings: requestTMDBsettings,
  genres: genresList
})
