import React from 'react';
import './Slider.scss';
import noPhoto from './no-photo.png';

function Slider(props) {
  const {cast} = props.dataObject;
  const {base_url, profile_sizes } = props.imagesSettings;
  let src = '';

  const sliderItems = cast.map((item) => {
    src = !!item.profile_path
      ? base_url + profile_sizes[1] + item.profile_path
      : noPhoto

      return (
        <a key={item.id} >
          <img src={src} alt={item.name}/>
          <span>{item.name}</span>
        </a>
      )
    }
  )

  return (
    <div>
      { sliderItems }      
    </div>
  )
}

export default Slider;