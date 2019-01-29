import React from 'react';
import './Slider.scss';
import SlickSlider from "react-slick";

function Slider(props) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5
	};

	return (
		<SlickSlider {...settings}>
		{ props.previewItems }
		</SlickSlider>
	)
}

export default Slider;