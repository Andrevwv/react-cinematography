import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Search from '../Search'
import homeIcon from './home.svg'
import userIcon from './user.svg'
import logo from './logo.svg'
import changeSearchInput from '../../actions/changeSearchInput'
import addSearchResponse from '../../actions/addSearchResponse'
import { connect } from 'react-redux'
import { API_KEY } from '../../APIconfig'

class Header extends Component {

  onInputChange = (event) => {
      this.props.changeSearchInput(event.target.value);
  }

  onFormSubmit = () => {
    console.log(this.props.input);

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.props.input}`)
                  .then(response => response.json())
                  .then(data => {
                      this.props.addSearchResponse(data)
                      console.log(data);
                  })
  }


  render() {
    return (
      <div>
        <header className="header">
          <div className="header__container container"> 
            <Link to="/">
              <img className="logo" src={logo} alt="logo icon"></img>
            </Link>
            <Search onInputChange={this.onInputChange} input={this.props.input} onFormSubmit={this.onFormSubmit}/>
            <nav className="nav">
              <Link className="nav-item" to="/">
                <img src={homeIcon} alt="Home icon"></img>
              </Link>
              <Link className="nav-item" to="/about-us">
                <img src={userIcon} alt="user icon"></img>
              </Link>
            </nav>
          </div>
        </header>
      </div>
      )
  }
}

const mapStateToProps = store => {
  return {
    input: store.input.searchInput,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeSearchInput: input => dispatch(changeSearchInput(input)),
    addSearchResponse: data => dispatch(addSearchResponse(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)