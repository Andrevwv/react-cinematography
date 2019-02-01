import React, { Component } from 'react'
import { API_KEY } from '../../APIconfig';
import Loader from '../../components/Loader'
import PreviewItem from '../../components/PreviewItem'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import addHomePageData from '../../actions/pages/addHomePageData';
import noPoster from './no-poster.jpg'
import noPhoto from './no-photo.png';
import Slider from '../../components/Slider'

class Home extends Component {
	componentDidMount() {
		const URLarray = [
			`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
			`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`,
			`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US`
		];

		Promise.all(URLarray.map(url =>
			fetch(url)
			.then( response => response.json() )
		))
		.then(data => {
			const responses = {
				upcomingMovies: data[0],
				popularMovies: data[1],
				movieTopRated: data[2],
				nowPlayingMovies: data[3],
				popularPeople: data[4]
			}
			this.props.addHomePageData(responses)
			console.log(responses)
		})
	}
	render() {
		console.log(this.props.pageData)
		console.log(this.props.settings)

		if(this.props.pageData.upcomingMovies.page && this.props.settings.images.poster_sizes){
			const { upcomingMovies, popularMovies, movieTopRated, nowPlayingMovies, popularPeople } = this.props.pageData;
			const { base_url, backdrop_sizes, poster_sizes, profile_sizes } = this.props.settings.images;
			function returnPreviewItem(object) {
				object.results.map(item => {
					let src = ''
					if (item.title) {
						src = item.poster_path
							? base_url + poster_sizes[1] + item.poster_path 
							: noPoster;
						return <PreviewItem 
							key={item.id} 
							id={item.id}
							title={item.title}
							imageSrc={src}
							thisIsMovie={true}
						/>
					}
					else if (item.name) {
						src = item.profile_path 
							? base_url + profile_sizes[1] + item.profile_path
							: noPhoto
						return <PreviewItem 
							key={item.id} 
							id={item.id}
							title={item.name}
							imageSrc={src}
							thisIsActor={true}
						/>
					} else return '111';
				})
			}
			console.log(1111111)
			console.log(returnPreviewItem(upcomingMovies))

			return (
			<div>
				<h1>Home</h1>
				<Loader />
				<Slider previewItems={ returnPreviewItem(upcomingMovies) }/>
			</div>
			)
		} else return null
	}
}

const mapStateToProps = (store) => {
	return {
		settings: store.settings,
		pageData: store.homePageData
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