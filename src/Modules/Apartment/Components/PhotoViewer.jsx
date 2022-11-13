import React, { useState, useCallback } from 'react';
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';
import { PhotoViewerContainer } from './photoViewer.styled.jsx';

const PhotoViewer = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isViewerOpen, setIsViewerOpen] = useState(false);
	const images = [
		"http://placeimg.com/1200/800/nature",
		"http://placeimg.com/800/1200/nature",
		"http://placeimg.com/1920/1080/nature",
		"http://placeimg.com/1500/500/nature",
	];

	const openImageViewer = useCallback((index) => {
		setCurrentImage(index);
		setIsViewerOpen(true);
	}, []);

	const closeImageViewer = () => {
		setCurrentImage(0);
		setIsViewerOpen(false);
	};

	return (
		<PhotoViewerContainer>
			{images.map((src, index) => (
				<img
					src={src}
					onClick={() => openImageViewer(index)}
					key={index}
					style={{ margin: "2px" }}
					alt=""
				/>
			))}

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
