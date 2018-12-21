import React, {Component} from 'react';
import './PreviewItem.scss'
import noPoster from './no-poster.jpg'

class PreviewItem extends Component {
    render() {
        const imageSrc = this.props.object.poster_path !== null 
            ? `${this.props.settings.images.base_url}${this.props.settings.images.poster_sizes[1]}${this.props.object.poster_path}` 
            : noPoster;
        console.log(this.props.object.poster_path);
        return (
            <div className="previev-item">
                <img className="image" 
                    src={imageSrc} 
                    alt={`Poster for ${this.props.object.title}`}
                    >
                </img>
                <h3 className="name">{ this.props.object.original_title }</h3>
                <p className="genre">{ this.props.object.original_language }</p>
            </div>
        )
    }
}

export default PreviewItem