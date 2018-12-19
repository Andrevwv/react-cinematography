import React from 'react'
import './Search.scss'
import searchIcon from './search.svg'
import searchRequest from '../../actions/searchRequest'
import changeSearchInput from '../../actions/changeSearchInput'
import { Link } from 'react-router-dom'
import store from '../../store'
import { connect } from 'react-redux'


class Search extends React.Component {

    onInputChange = (event) => {
        this.props.changeSearchInput(event.target.value);
    }

    onFormSubmit = () => {
    }

    render() {
        // const currentPath = `/search-results/${this.state.searchPhrase}`
        const currentPath = `/search-results/${this.props.input}`
        return (
            <form className="search">
                <input className="search__input" placeholder="Search..." type="text" value={this.props.input} onChange={this.onInputChange}></input>
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
const mapStateToProps = store => {
  return {
    phrase: store.phrase.searchPhrase,
    input: store.input.searchInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchRequest: phrase => dispatch(searchRequest(phrase)),
    changeSearchInput: input => dispatch(changeSearchInput(input))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)