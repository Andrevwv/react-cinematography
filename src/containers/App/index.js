import React, {Component} from 'react'
import { Route, withRouter } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Header from '../../components/Header'
import SearchPage from '../../components/SearchPage'
import './App.scss'
import { connect } from 'react-redux'
import addTMDBconfig from '../../actions/addTMDBconfig'
import addGenresList from '../../actions/addGenresList'
import { API_KEY } from '../../APIconfig'


class App extends Component {
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`)
      .then( response => response.json() )
      .then( data => this.props.settings(data) )
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then( response => response.json() )
      .then( data => this.props.genres(data) )
  }
  
  render() {
    return (
      <div className="body">
        <Header />

        <main className="main">
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route path="/search-results" component={SearchPage} />
        </main>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    settings: data => dispatch(addTMDBconfig(data)),
    genres: data => dispatch(addGenresList(data))
  }
}

export default withRouter(
  connect(
  undefined,
  mapDispatchToProps
  )(App)
)
