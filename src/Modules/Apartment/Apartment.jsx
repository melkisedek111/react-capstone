import React, { useRef } from "react";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import VapeFreeOutlinedIcon from "@mui/icons-material/VapeFreeOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import FireExtinguisherOutlinedIcon from "@mui/icons-material/FireExtinguisherOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import {
	AboutApartmentContainer,
	ApartmentAmenitiesContainer,
	ApartmentAmenitiesSection,
	ApartmentContainer,
	ApartmentHeading,
	ApartmentHeadingSection,
	ApartmentLocationContainer,
	ApartmentLocationSection,
	ApartmentMediaSection,
	ImageContainer,
	SimilarApartmentContainer,
	SimilarApartmentSection,
	VideoContainer,
} from "./apartment.styled.jsx";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import VideoJs from "./Components/VideoJs.jsx";
import PhotoViewer from "./Components/PhotoViewer.jsx";
import GoogleMap from "../Home/Components/GoogleMap.jsx";
import CommonBooking from "../Commons/CommonBooking.jsx";
import { ApartmentsList } from "../Apartments/apartments.styled.jsx";
import ApartmentCard from "../Apartments/Components/ApartmentCard.jsx";
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
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex.
					</p>
				</div>
				<div>
					<div>
						<h6>Bedroom</h6>
						<h5>4</h5>
					</div>
					<div>
						<h6>Bathroom</h6>
						<h5>2</h5>
					</div>
					<div>
						<h6>Balcony</h6>
						<h5>2</h5>
					</div>
					<div>
						<h6>Servant room</h6>
						<h5>1</h5>
					</div>
					<div>
						<h6>Super area</h6>
						<h5>2600 sqft</h5>
					</div>
					<div>
						<h6>Carpet area</h6>
						<h5>1400 sqft</h5>
					</div>
					<div>
						<h6>Car parking</h6>
						<h5>2 covered</h5>
					</div>
					<div>
						<h6>Water Availability</h6>
						<h5>24 hours</h5>
					</div>
					<div>
						<h6>Unit on floor</h6>
						<h5>3</h5>
					</div>
				</div>
			</AboutApartmentContainer>
			<ApartmentAmenitiesSection>
				<ApartmentAmenitiesContainer>
					<h1>Amenities</h1>
					<div>
						<div>
							<ChairOutlinedIcon />
							<h6>Fully-furnished</h6>
						</div>
						<div>
							<VapeFreeOutlinedIcon />
							<h6>Non-smoking rooms</h6>
						</div>
						<div>
							<AcUnitOutlinedIcon />
							<h6>AC rooms</h6>
						</div>
						<div>
							<LocalDiningOutlinedIcon />
							<h6>Free breakfast</h6>
						</div>
						<div>
							<FireExtinguisherOutlinedIcon />
							<h6>Fire Extinguisher</h6>
						</div>
						<div>
							<BathtubOutlinedIcon />
							<h6>Bathtub</h6>
						</div>
						<div>
							<SecurityOutlinedIcon />
							<h6>Home Security</h6>
						</div>
						<div>
							<PoolOutlinedIcon />
							<h6>Swimming pool</h6>
						</div>
						<div>
							<WifiOutlinedIcon />
							<h6>Hight speed Wi-Fi</h6>
						</div>
					</div>
				</ApartmentAmenitiesContainer>
			</ApartmentAmenitiesSection>
			<ApartmentLocationSection>
				<ApartmentLocationContainer>
					<h1>Location</h1>
					<GoogleMap />
				</ApartmentLocationContainer>
			</ApartmentLocationSection>
			<CommonBooking />
			<SimilarApartmentSection>
				<SimilarApartmentContainer>
					<h1>Similar Apartments</h1>
					<ApartmentsList>
						<ApartmentCard />
						<ApartmentCard />
						<ApartmentCard />
					</ApartmentsList>
				</SimilarApartmentContainer>
			</SimilarApartmentSection>
		</ApartmentContainer>
	);
};

export default Apartment;
