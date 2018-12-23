
import React, { Component } from 'react';
import './MoviePage.scss';
import { withRouter } from 'react-router-dom';
import { API_KEY } from '../../APIconfig';
import { connect } from 'react-redux';
import addMoviePageData from '../../actions/pages/addMoviePageData';
import noBackdrop from './no-backdrop.jpg'

class MoviePage extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const pageID = this.props.location.pathname.split('/')[2];
        const appendToResponse = ['credits', 'videos'];
        const URL = `https://api.themoviedb.org/3/movie/${pageID}?api_key=${API_KEY}&language=en-US&append_to_response=${appendToResponse}`;
        fetch(URL)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.props.addMoviePageData(data)
            } )        
    }
    render() {
        const {base_url, backdrop_sizes } = this.props.settings.images;
        const backdropImage = !!backdrop_sizes && !!this.props.pageData.backdrop_path
            ? `${base_url}${backdrop_sizes[3]}${this.props.pageData.backdrop_path}`
            : noBackdrop
        return (
            <div>
                <img src={backdropImage}></img>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        settings: store.settings,
        pageData: store.moviePageData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addMoviePageData: input => dispatch(addMoviePageData(input))
    }
}


export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)
    (MoviePage)
);