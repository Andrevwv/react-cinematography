import React, {Component} from 'react';
import './PreviewItem.scss'
import noPoster from './no-poster.jpg'
import { Link } from 'react-router-dom'

class PreviewItem extends Component {

	render() {
		// const { base_url, poster_sizes } = this.props.settings.images;
		// const { poster_path, genre_ids, id, title } = this.props.object;
		// const imageSrc = !!poster_path && !!poster_sizes
		// 	? `${base_url}${poster_sizes[1]}${poster_path}` 
		// 	: noPoster;

		// const genres = !!this.props.genres.genres
		// 	? this.props.genres.genres.filter((item) => {
		// 			return genre_ids.some((arrival) => item.id === arrival)
		// 		} )
		// 	: null
		const { goToPage, imageSrc, title, genres, id } = this.props

		return (
			<Link className="preview-item" to={`/movie/${id}`} onClick={goToPage}>
				<img className="image" 
					src={imageSrc} 
					alt={`Poster for ${title}`}
					>
				</img>
				<h3 className="name">{ title }</h3>
				<p className="genre">{ 
					!!genres
					? `${genres[0] ? genres[0].name : null} / ${genres[1] ? genres[1].name : null}`
					: null
				}</p>
			</Link>

		)
	}
}

export default PreviewItem