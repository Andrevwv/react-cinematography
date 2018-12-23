
import React, { Component } from 'react';
import './MoviePage.scss';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom';
import { API_KEY } from '../../APIconfig'

class MoviePage extends Component {
    constructor() {
        super();
        this.pageData = {};
    }

    componentDidMount() {
        const pageID = this.props.location.pathname.split('/')[2];
        const URL = `https://api.themoviedb.org/3/movie/${pageID}?api_key=${API_KEY}&language=en-US`;
        fetch(URL)
            .then( response => response.json() )
            .then( data => {
                this.pageData = data;
                console.log(this.pageData)
            } )
        console.log()
        
    }
    render() {
        return (
            <div>
                <h1>{this.props.page}</h1>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        page: store.moviePage.moviePage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // moviePage: id => dispatch(changeMoviePage(id)),
        // changeSearchInput: input => dispatch(changeSearchInput(input))
    }
}


export default withRouter(connect(mapStateToProps)(MoviePage));