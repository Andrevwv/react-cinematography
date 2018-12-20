import { combineReducers } from 'redux';
import searchPhrase from './searchPhrase';
import searchInput from './searchInput';
import searchResponse from './searchResponse';

export default combineReducers({
  phrase: searchPhrase,
  input: searchInput,
  searchResponse
})
