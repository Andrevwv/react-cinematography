import React from 'react';
import './SearchPage.scss';
import PreviewItem from '../../components/PreviewItem';
import { connect } from 'react-redux'
import store from '../../store'
const SearchPage = (props) => {
    const prevArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z"></path></svg>;
    const nextArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"></path></svg>;
    let testRender;
    
    if(props.searchResponse) {
        testRender = props.searchResponse.map(item => <PreviewItem genres={props.genres} key={item.id} object={item} settings={props.settings}/>) 
    }
    console.log(store.getState())
    return (
        <div className="page-container">
            <section className="search-results">
             { testRender }
            </section>
            <div className="search-results-pagination">
                <button className="search-results-main-pagination__button">
                    {prevArrow}
                    Previous
                </button>
                <button className="search-results-main-pagination__button">
                    Next
                    {nextArrow}
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = store => {
    return {
        searchResponse: store.searchResponse.results,
        settings: store.settings,
        genres: store.genres
    }
}

export default connect(mapStateToProps)(SearchPage)