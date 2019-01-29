import React from 'react';
import './VideoSlider.scss';
import SlickSlider from "react-slick";

function VideoSlider(props) {
  var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3
	};

  const sliderItems = props.results.map((item) => {
    const src = `https://www.youtube.com/embed/${item.key}`

      return (
        <div key={item.id} className="video-slider">
            <iframe 
              
              title={item.id} 
              width="420" 
              height="315"
              src={src}
              className="video-slider">
            </iframe>
        </div>
      )
    }
  )

  return (
		<SlickSlider {...settings}>
      { sliderItems }
		</SlickSlider>

  )
}

export default VideoSlider;