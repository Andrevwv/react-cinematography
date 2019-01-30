import React from 'react';
import './Slider.scss';
import SlickSlider from "react-slick";

function Slider(props) {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: props.previewItems.length > 4 ? 5 : props.previewItems.length,
		slidesToScroll: props.previewItems.length > 4 ? 5 : props.previewItems.length
	};

	return (
		<SlickSlider {...settings}>
		{ props.previewItems }
		</SlickSlider>
	)
}

export default Slider;