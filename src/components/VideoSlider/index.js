import React from 'react';
import './VideoSlider.scss';

function VideoSlider(props) {
  const {results} = props.videos;
  let src = '';

  const sliderItems = results.map((item) => {
    src = `https://www.youtube.com/embed/${item.key}`

      return (
        <iframe key={item.id} width="420" height="315"
          src={src}>
        </iframe>
      )
    }
  )

  return (
    <div className="video-slider">
      { sliderItems }      
    </div>
  )
}

export default VideoSlider;