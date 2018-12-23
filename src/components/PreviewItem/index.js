import React, {Component} from 'react';
import './PreviewItem.scss'
import noPoster from './no-poster.jpg'
import { Link } from 'react-router-dom'

class PreviewItem extends Component {

    render() {
        const { base_url, poster_sizes} = this.props.settings.images;
        const { poster_path, genre_ids, id, title, original_title } = this.props.object;
        const imageSrc = poster_path !== null 
            ? `${base_url}${poster_sizes[1]}${poster_path}` 
            : noPoster;

        const genres = this.props.genres.genres.filter((item) => {
            return genre_ids.some((arrval) => item.id === arrval)
        } )

        return (
            <Link className="preview-item" to={`/movie/${id}`} onClick={this.props.goToPage}>
                <img className="image" 
                    src={imageSrc} 
                    alt={`Poster for ${title}`}
                    >
                </img>
                <h3 className="name">{ original_title }</h3>
                <p className="genre">{ `${genres[0] ? genres[0].name : null} / ${genres[1] ? genres[1].name : null}` }</p>
            </Link>

        )
    }
}

export default PreviewItem