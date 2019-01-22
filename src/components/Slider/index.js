import React from 'react';
import './Slider.scss';
import noPhoto from './no-photo.png';
import SlickSlider from "react-slick";
import { Link } from 'react-router-dom'

function Slider(props) {
const {cast} = props.dataObject;
const {base_url, profile_sizes } = props.imagesSettings;
let src = '';

var settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 5
};

const sliderItems = cast.map((item) => {
	src = !!item.profile_path
	? base_url + profile_sizes[1] + item.profile_path
	: noPhoto

	return (
		<Link 
			to={`/actor/${item.id}`}
			key={item.id} 
		>
			<img src={src} alt={item.name}/>
			<span>{item.name}</span>
		</Link>
	)
	}
)

return (
	<SlickSlider {...settings}>
	{ sliderItems }
	</SlickSlider>
)
}

export default Slider;