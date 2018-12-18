import React from 'react'
import './Search.scss'
import searchIcon from './search.svg'
import { Link } from 'react-router-dom'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchPhrase: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    onFormSubmit = () => {
        console.log(this.state.searchPhrase);
    }

    render() {
        const currentPath = `/search-results/${this.state.searchPhrase}`
        return (
            <form className="search">
                <input className="search__input" placeholder="Search..." type="text" value={this.state.searchPhrase} onChange={this.onInputChange}></input>
                <Link className="nav-item" to={currentPath}>
                    <button className="search__btn" onClick={this.onFormSubmit}>
                        <img src={searchIcon} alt="search icon">
                        </img>
                    </button>
                </Link>
            </form>
        )
    }
}

export default Search
