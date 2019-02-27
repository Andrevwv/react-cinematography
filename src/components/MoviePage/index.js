
import React, { Component } from 'react';
import './MoviePage.scss';
import { withRouter } from 'react-router-dom';
import { API_KEY } from '../../APIconfig';
import { connect } from 'react-redux';
import addMoviePageData from '../../actions/pages/addMoviePageData';
import noBackdrop from '../../images/no-backdrop.jpg'
import Slider from '../Slider'
import VideoSlider from '../VideoSlider'
import PreviewItem from '../PreviewItem'
import noPoster from '../../images/no-poster.jpg'
import noPhoto from '../../images/no-photo.png';


class MoviePage extends Component {
	goToPage = (event) => {
		this.props.changeSearchInput('');
	}

	componentDidMount() {
		const pageID = this.props.location.pathname.split('/')[2];
		const appendToResponse = ['credits', 'videos', 'similar'];

		const URL = `https://api.themoviedb.org/3/movie/${pageID}?api_key=${API_KEY}&language=en-US&append_to_response=${appendToResponse}`;
		fetch(URL)
			.then( response => response.json() )
			.then( data => {
				console.log(data);
				this.props.addMoviePageData(data)
			} )
			
		
	}
	render() {
		const { base_url, backdrop_sizes, poster_sizes, profile_sizes } = this.props.settings.images;
		const { poster_path, title, vote_average, genres, relese_date, overview, credits, backdrop_path, videos, similar } = this.props.pageData;

		const backdropImage = !!backdrop_sizes && !!backdrop_path
			? base_url + backdrop_sizes[3] + backdrop_path
			: noBackdrop

		const imageSrc = !!poster_path && !!poster_sizes 
			? base_url + poster_sizes[1] + poster_path 
			: noPoster;

		const genresItem = !!genres ? genres.map((item) => <li key={item.id} className="genres__item">{item.name}</li>) : null

		const cast = !!credits && !!this.props.settings
			? credits.cast.map((item) => {
				const src = !!item.profile_path && !!profile_sizes
					? base_url + profile_sizes[1] + item.profile_path
					: noPhoto
			
				return <PreviewItem 
							key={item.id} 
							id={item.id}
							title={item.name}
							imageSrc={src}
							goToPage={this.goToPage}
							previewType="actor"
						/>
				}
			)
			: null

		const similarMovies = !!similar && !!genres && !!this.props.settings
			? similar.results.map( item => {
				const src = !!poster_path && !!poster_sizes 
					? base_url + poster_sizes[1] + item.poster_path 
					: noPoster;

				return <PreviewItem 
						genres={genres} 
						key={item.id} 
						id={item.id}
						title={item.title}
						imageSrc={src}
						goToPage={this.goToPage}
						voteAverage={item.vote_average}
						previewType="movie"
					/>

			}) 
			: null

		return (
			<div className="movie-page">
				<div className="backdrop" style={{backgroundImage: `url(${backdropImage})`}}></div>
				<div className="info-container container">
					<img className="poster" src={imageSrc} alt={`${title}`}
					/>
					<div className="info-content">
						<h1 className="title">{title}</h1>
						<ul className="genres">{genresItem}</ul>

						<span className="vote">{vote_average}</span>
						<div className="relese-date">{relese_date}</div>
					</div>
				</div>
				<div className="summary-container container">
					<div className="summary__title">
						Summary
					</div>
					<div className="summary__text">
						{overview}
					</div>
					<div>
						<h3>Cast</h3>
						{ cast ? <Slider previewItems={cast} /> : null }
					</div>
					<div>
						<h3>Trailers</h3>
						{ videos ? <VideoSlider results={videos.results} /> : null }
					</div>
					<div>
						<h3>Similar movies</h3>
						{ similarMovies ? <Slider previewItems={similarMovies} /> : null }
					</div>
				</div>

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