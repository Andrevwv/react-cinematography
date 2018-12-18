import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Home'
import About from '../About'
import Header from '../../components/Header'
import SearchResults from '../../components/SearchResults'
import './App.scss'

const App = () => (
  <div className="body">
    <Header />

    <main className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route path="/search-results" component={SearchResults} />
    </main>
  </div>
)

export default App
