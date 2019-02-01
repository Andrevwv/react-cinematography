import { combineReducers } from 'redux';
import searchInput from './searchInput';
import searchResponse from './searchResponse';
import requestTMDBsettings from './requestTMDBsettings'
import genresList from './genresList'
import moviePageData from './pages/moviePageData'
import actorPageData from './pages/actorPageData'
import homePageData from './pages/homePageData'

export default combineReducers({
	input: searchInput,
	searchResponse,
	settings: requestTMDBsettings,
	genres: genresList,
	moviePageData,
	actorPageData,
	homePageData
})
