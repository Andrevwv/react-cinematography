
import React, { Component } from 'react';
import './ActorPage.scss';
import { withRouter } from 'react-router-dom';
import { API_KEY } from '../../APIconfig';
import { connect } from 'react-redux';
import addActorPageData from '../../actions/pages/addActorPageData';
import Slider from '../Slider'
import VideoSlider from '../VideoSlider'
import PreviewItem from '../PreviewItem'
import noPoster from './no-poster.jpg'
import noPhoto from './no-photo.png';


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
		const { base_url, profile_sizes } = this.props.settings.images;
		const { profile_path, name, biography, genres, relese_date } = this.props.pageData;

		const imageSrc = !!profile_path && !!profile_sizes 
			? base_url + profile_sizes[2] + profile_path 
			: noPoster;

		const genresItem = !!genres ? genres.map((item) => <li key={item.id} className="genres__item">{item.name}</li>) : null

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
				<div className="additional-info">

				</div>

			</div>
		)
	}
}

const mapStateToProps = (store) => {
return {
	settings: store.settings,
	pageData: store.actorPageData
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