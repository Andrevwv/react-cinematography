import { combineReducers } from 'redux';
import searchInput from './searchInput';
import searchResponse from './searchResponse';
import requestTMDBsettings from './requestTMDBsettings'

export default combineReducers({
  input: searchInput,
  searchResponse,
  settings: requestTMDBsettings
})
