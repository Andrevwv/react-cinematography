import React, {Component} from 'react';
import './PreviewItem.scss'
import { Link } from 'react-router-dom'

class PreviewItem extends Component {
  render() {
    const { goToPage, imageSrc, title, genres, id, voteAverage } = this.props

    function createMoviePreviewItem() {
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
          <p className="vote-average">{ voteAverage }</p>
        </Link>
      )
    }

    function createActorPreviewItem() {
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

    function createBackdropPreviewItem() {
      return (
        <Link className="backdrop-item" style={{backgroundImage: `url(${imageSrc})`}} to={`/movie/${id}`} onClick={goToPage}>
          <div className="backdrop-item__background">
            <div className="backdrop-item__container">
              <div className="backdrop-item__category">Latest</div>
              <div className="backdrop-item__name">
                { title }
              </div>
                <div className="backdrop-item__genre">
                  { 
                    !!genres
                    ? `${genres[0] ? genres[0].name : ''} / ${genres[1] ? genres[1].name : ''} | ${voteAverage} Rating`
                    : null
                  }
                </div>
              {/* <div className="backdrop-item__vote-average">{ voteAverage } Rating</div> */}
            </div>
          </div>
        </Link>
      )
    }

    switch(this.props.previewType) {
      case 'movie':
        if (this.props.backdrop) {
          return createBackdropPreviewItem();
        } else {
          return createMoviePreviewItem();
        }
      
      case 'actor':
        return createActorPreviewItem();
    }
  }
}

export default PreviewItem