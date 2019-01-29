import React, { Component } from 'react';
import './SearchPage.scss';
import PreviewItem from '../../components/PreviewItem';
import { connect } from 'react-redux'
import store from '../../store'
import changeSearchInput from '../../actions/changeSearchInput'

class SearchPage extends Component {
	goToPage = (event) => {
		this.props.changeSearchInput('');
	}

	render() {
		const prevArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 128L192 256l128 128z"></path></svg>;
		const nextArrow = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 128l128 128-128 128z"></path></svg>;
		let testRender;
	
		if(this.props.searchResponse) {
			testRender = this.props.searchResponse.map( item => {
				const { base_url, poster_sizes } = this.props.settings.images;
				const { poster_path, genre_ids, id, title } = item;
				const imageSrc = `${base_url}${poster_sizes[1]}${poster_path}`;
				const genres = this.props.genres.genres.filter((item) => {
						return genre_ids.some((arrival) => item.id === arrival)
					} )
				return (
					<PreviewItem 
						imageSrc={imageSrc}
						id={id}
						title={title}
						genres={genres}
						goToPage={this.goToPage}
						thisIsMovie={true}
					/>
				)
			}) 
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
   
}

const mapStateToProps = store => {
	return {
		searchResponse: store.searchResponse.results,
		settings: store.settings,
		genres: store.genres
	}
}

const mapDispatchToProps = dispatch => {
	return {
		changeSearchInput: input => dispatch(changeSearchInput(input))
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(SearchPage)