import React, { Component } from 'react'
import { API_KEY } from '../../APIconfig';
import './Home.scss';
import Loader from '../../components/Loader'
import PreviewItem from '../../components/PreviewItem'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import addHomePageData from '../../actions/pages/addHomePageData';
import noPoster from '../../images/no-poster.jpg'
import noPhoto from '../../images/no-photo.png';
import noBackdrop from '../../images/no-backdrop.jpg';
import Slider from '../../components/Slider'
import SlickSlider from "react-slick";

class Home extends Component {
	componentDidMount() {
		const URLarray = [
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&region=us`,
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
			`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US`
		];

		Promise.all(URLarray.map(url =>
			fetch(url)
			.then( response => response.json() )
		))
		.then(data => {
			const responses = {
				nowPlayingMovies: data[0],
				upcomingMovies: data[1],
				popularMovies: data[2],
				movieTopRated: data[3],
				popularPeople: data[4]
			}
			this.props.addHomePageData(responses)
		})
	}
	render() {

		let topSliderSettings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipe: false
		};

		if(this.props.pageData.nowPlayingMovies && this.props.settings.images.poster_sizes && this.props.genres.genres ){
			const { nowPlayingMovies, upcomingMovies, popularMovies, movieTopRated, popularPeople } = this.props.pageData;
			const { base_url, backdrop_sizes, poster_sizes, profile_sizes } = this.props.settings.images;
			const { genres } = this.props.genres

			function returnMovieGenresArray(movie) {
				const movieGenres = genres.filter((genreItem) => {
					return movie.genre_ids.some((arrival) => genreItem.id === arrival)
				} )
				return movieGenres;
			}

			function genereteMoviePreviewItem(movie) {
				let src = movie.poster_path
					? base_url + poster_sizes[1] + movie.poster_path
					: noPoster;
				return <PreviewItem 
					genres={returnMovieGenresArray(movie)} 
					key={movie.id} 
					id={movie.id}
					title={movie.title}
					imageSrc={src}
					previewType="movie"
					voteAverage={movie.vote_average}
				/>
			}
			function genereteActorPreviewItem(actor) {
				let src = actor.profile_path 
					? base_url + profile_sizes[1] + actor.profile_path
					: noPhoto
				return <PreviewItem 
					key={actor.id} 
					id={actor.id}
					title={actor.name}
					imageSrc={src}
					previewType="actor"
				/>
			}

			function genereteMovieBackdropPreviewItem(movie) {
				let src = movie.poster_path
					? base_url + backdrop_sizes[3] + movie.backdrop_path
					: noBackdrop;
				return <PreviewItem 
					genres={returnMovieGenresArray(movie)} 
					key={movie.id} 
					id={movie.id}
					title={movie.title}
					imageSrc={src}
					previewType="movie"
					voteAverage={movie.vote_average}
					backdrop={true}
				/>
			}
			function returnPreviewItemsArray(ratingArray) {
				return ratingArray.results.map(item => {
					if (item.title) {
						return genereteMoviePreviewItem(item);
					}
					else if (item.name) {
						return genereteActorPreviewItem(item);
					} else return null;
				})
			}

			return (
				<div className="home-page">
					<SlickSlider {...topSliderSettings}>
					{ nowPlayingMovies.results.map(item => genereteMovieBackdropPreviewItem(item)) }
					</SlickSlider>
					
					<div className="container">
						<Loader />
						
						<div className="slider">
							<h3 className="slider__category">Now Playing</h3>
							<Slider previewItems={ returnPreviewItemsArray(nowPlayingMovies) }/>
						</div>
						<hr className="carousel-container__separator"/>
						<div className="slider">
							<h3 className="slider__category">Upcoming</h3>
							<Slider previewItems={ returnPreviewItemsArray(upcomingMovies) }/>
						</div>
						<hr className="carousel-container__separator"/>
						<div className="slider">
							<h3 className="slider__category">Popular</h3>
							<Slider previewItems={ returnPreviewItemsArray(popularMovies) }/>
						</div>
						<hr className="carousel-container__separator"/>
						<div className="slider">
							<h3 className="slider__category">Top Rated</h3>
							<Slider previewItems={ returnPreviewItemsArray(movieTopRated) }/>
						</div>
						<hr className="carousel-container__separator"/>
						<div className="slider">
							<h3 className="slider__category">Popular Actors</h3>
							<Slider previewItems={ returnPreviewItemsArray(popularPeople) }/>
						</div>
						
					</div>
				</div>
			)
		} else return null
	}
}

const mapStateToProps = (store) => {
	return {
		settings: store.settings,
		pageData: store.homePageData,
		genres: store.genres
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addHomePageData: input => dispatch(addHomePageData(input))
	}
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)
	(Home)
);