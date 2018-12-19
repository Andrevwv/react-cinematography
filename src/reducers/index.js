import { combineReducers } from 'redux'
import searchPhrase from './searchPhrase'
import searchInput from './searchInput'

export default combineReducers({
  phrase: searchPhrase,
  input: searchInput
})
