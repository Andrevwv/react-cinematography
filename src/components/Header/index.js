import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Search from '../Search'
import homeIcon from './home.svg'
import userIcon from './user.svg'
import logo from './logo.svg'

const Header = () => {
  return (
  <div>
    <header className="header">
      <div className="header__container container"> 
        <Link to="/">
          <img className="logo" src={logo} alt="logo icon"></img>
        </Link>
        <Search />
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

export default Header
