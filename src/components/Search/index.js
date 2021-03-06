import React from 'react'
import './Search.scss'
import searchIcon from './search.svg'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    render() {
        const currentPath = `/search-results/${this.props.input}`
        return (
            <form className="search">
                <input className="search__input" placeholder="Search..." type="text" value={this.props.input} onChange={this.props.onInputChange}></input>
                <Link className="nav-item" to={currentPath}>
                    <button className="search__btn" onClick={this.props.onFormSubmit}>
                        <img src={searchIcon} alt="search icon">
                        </img>
                    </button>
                </Link>
            </form>
        )
    }
}

export default Search