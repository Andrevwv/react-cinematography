
import React, { Component } from 'react';
import './ActorPage.scss';
import { withRouter } from 'react-router-dom';
import { API_KEY } from '../../APIconfig';
import { connect } from 'react-redux';
import addActorPageData from '../../actions/pages/addActorPageData';
import Slider from '../Slider'
import VideoSlider from '../VideoSlider'
import PreviewItem from '../PreviewItem'
import noPoster from '../../images/no-poster.jpg'
import noPhoto from '../../images/no-photo.png';


class ActorPage extends Component {
	goToPage = (event) => {
		this.props.changeSearchInput('');
	}

	componentDidMount() {
		const pageID = this.props.location.pathname.split('/')[2];
		const appendToResponse = ['images', 'movie_credits'];

		const URL = `https://api.themoviedb.org/3/person/${pageID}?api_key=${API_KEY}&language=en-US&append_to_response=${appendToResponse}`;
		fetch(URL)
			.then( response => response.json() )
			.then( data => {
				console.log(data);
				this.props.addActorPageData(data)
			} )
	}

	render() {
		const { base_url, profile_sizes, poster_sizes } = this.props.settings.images;
		const { profile_path, name, biography, gender, birthday, place_of_birth, homepage, also_known_as, known_for_department, movie_credits } = this.props.pageData;
		const { genres } =  this.props.genres;
		const actorGender = gender == 1 ? "Female" : "Male";
		const imageSrc = !!profile_path && !!profile_sizes 
			? base_url + profile_sizes[2] + profile_path 
			: noPoster;
		const actorKnownAs = also_known_as
			? also_known_as.map(item => <li key={item}>{item}</li>)
			: null

		const popularMovies = movie_credits && movie_credits.cast && base_url
			? ( 
				movie_credits.cast.sort(function (a, b) {
					return b.popularity - a.popularity;
				})
				.slice(0, 40)
				.map(item => {
					const movieGenres = genres.filter((genreItem) => {
						return item.genre_ids.some((arrival) => genreItem.id === arrival)
					} )
					const src = !!poster_sizes && item.poster_path
					? base_url + poster_sizes[1] + item.poster_path 
					: noPoster;

					return (
						<PreviewItem 
							genres={movieGenres} 
							key={item.id} 
							id={item.id}
							title={item.title}
							imageSrc={src}
							goToPage={this.goToPage}
							voteAverage={item.vote_average}
							previewType="movie"
						/>
					)
				})
			)
			: null
		const unpopularMovies = movie_credits && movie_credits.cast && base_url
			? ( 
				movie_credits.cast.sort(function (a, b) {
					return a.popularity - b.popularity;
				})
				.slice(0, 40)
				.map(item => {
					const src = !!poster_sizes && item.poster_path
					? base_url + poster_sizes[1] + item.poster_path 
					: noPoster;

					return (
						<PreviewItem 
							genres={item.genres} 
							key={item.id} 
							id={item.id}
							title={item.title}
							imageSrc={src}
							goToPage={this.goToPage}
							voteAverage={item.vote_average}
							previewType="movie"
						/>
					)
				})
			)
			: null

		return (
			<div className="actor-page">
				<div className="info-container container">
					<img className="poster" src={imageSrc} alt={`${name}`}
					/>
					<div className="info-content">
						<h1 className="title">{name}</h1>
						<h3>Biography</h3>
						<div className="biography">{biography}</div>
					</div>
				</div>
				<div className="more-info container">
					<div className="additional-info">
						<h2>Personal Info</h2>
						{ known_for_department
							? (<div className="gender"><h3>Known For:</h3><span>{known_for_department}</span></div>)
							: null
						}
						{ gender
							? (<div className="gender"><h3>Gender:</h3><span>{actorGender}</span></div>)
							: null
						}
						{ birthday
							? (<div className="gender"><h3>Birthday:</h3><span>{birthday}</span></div>)
							: null
						}
						{ place_of_birth
							? (<div className="gender"><h3>Place of Birth:</h3><span>{place_of_birth}</span></div>)
							: null
						}
						{ homepage
							? (<div className="gender"><h3>Official Site:</h3><a href={homepage}>{homepage}</a></div>)
							: null
						}
						{ also_known_as && also_known_as.length
							? (<div className="gender"><h3>Also Known Ass:</h3><ul>{actorKnownAs}</ul></div>)
							: null
						}
					</div>
					<div className="movies">
						{ 
							popularMovies 
							? (<div className="popularMovies"><h3>Popular movies:</h3><Slider previewItems={popularMovies}/></div>) 
							: null
						}
						{ 
							unpopularMovies 
							? (<div className="unpopularMovies"><h3>Unpopular movies:</h3><Slider previewItems={unpopularMovies}/></div>) 
							: null
						}
						
					</div>	
				</div>
				
			</div>
		)
	}
}

const mapStateToProps = (store) => {
return {
	settings: store.settings,
	pageData: store.actorPageData,
	genres: store.genres
}
}

const mapDispatchToProps = dispatch => {
return {
	addActorPageData: input => dispatch(addActorPageData(input))
}
}


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)
	(ActorPage)
);