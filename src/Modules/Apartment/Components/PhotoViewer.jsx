import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import ImageViewer from "react-simple-image-viewer";
import Slider from "react-styled-carousel";
import { PhotoViewerContainer } from "./photoViewer.styled.jsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PhotoViewer = ({ images }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	const responsive = [
		{ breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
		{ breakPoint: 760, cardsToShow: 2 },
	];
	return (
		<PhotoViewerContainer>
			<Slider responsive={responsive}>
				{images.map((src, index) => (
					<LazyLoadImage
						effect="blur"
						src={src}
						onClick={() => openImageViewer(index)}
						key={index}
						style={{ margin: "2px" }}
						alt=""
						className="image-slider"
					/>
				))}
			</Slider>
			{isViewerOpen && (
				<ImageViewer
					src={images}
					currentIndex={currentImage}
					disableScroll={false}
					closeOnClickOutside={true}
					onClose={closeImageViewer}
				/>
			)}
		</PhotoViewerContainer>
	);
};

export default PhotoViewer;
