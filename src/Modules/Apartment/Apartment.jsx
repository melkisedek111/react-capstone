import { Button } from "@mui/material";
import React, { useRef } from "react";
import {
	AboutApartmentContainer,
	ApartmentContainer,
	ApartmentHeading,
	ApartmentHeadingSection,
	ApartmentMediaSection,
	ImageContainer,
	VideoContainer,
} from "./apartment.styled.jsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VideoJs from "./Components/VideoJs.jsx";
import PhotoViewer from "./Components/PhotoViewer.jsx";
const Apartment = () => {
	const playerRef = useRef(null);

	const videoJsOptions = {
		autoplay: false,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [
			{
				src: "https://player.vimeo.com/video/384133819",
				type: "video/vimeo",
			},
		],
		techOrder: ["Vimeo"],
	};

	const handlePlayerReady = (player) => {
		playerRef.current = player;

		// You can handle player events here, for example:
		player.on("waiting", () => {
			videojs.log("player is waiting");
		});

		player.on("dispose", () => {
			videojs.log("player will dispose");
		});
	};
	return (
		<ApartmentContainer>
			<ApartmentHeadingSection>
				<ApartmentHeading>
					<div>
						<div>
							<h6>Agent</h6>
							<h6>Kaydan Travers</h6>
						</div>
						<h1>St. Katharine Docks</h1>
						<h5>Hackney, London</h5>
					</div>
					<div>
						<div>
							<h5>Price</h5>
							<h4>₱3,392,100</h4>
						</div>
						<button>
							Quick Booking <ArrowRightAltIcon />
						</button>
					</div>
				</ApartmentHeading>
			</ApartmentHeadingSection>
			<ApartmentMediaSection>
				<VideoContainer>
					<VideoJs options={videoJsOptions} onReady={handlePlayerReady} />
				</VideoContainer>
				<ImageContainer>
					<PhotoViewer />
				</ImageContainer>
			</ApartmentMediaSection>
			<AboutApartmentContainer>
				<div>
					<h1>About Apartment</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
				</div>
			</AboutApartmentContainer>
		</ApartmentContainer>
	);
};

export default Apartment;
