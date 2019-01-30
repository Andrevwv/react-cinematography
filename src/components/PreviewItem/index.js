import React, {Component} from 'react';
import './PreviewItem.scss'
import { Link } from 'react-router-dom'

class PreviewItem extends Component {

	render() {
		if(this.props.thisIsMovie) {
			const { goToPage, imageSrc, title, genres, id } = this.props

			return (
				<Link className="preview-item" to={`/movie/${id}`} onClick={goToPage}>
					<img className="image" 
						src={imageSrc} 
						alt={`${title}`}
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

		if(this.props.thisIsActor) {
			const { imageSrc, title, id } = this.props

			return (
				<Link className="preview-item" to={`/actor/${id}`} >
					<img className="image" 
						src={imageSrc} 
						alt={`${title}`}
						>
					</img>
					<h3 className="name">{ title }</h3>
				</Link>
	
			)
		}
	}
}

export default PreviewItem