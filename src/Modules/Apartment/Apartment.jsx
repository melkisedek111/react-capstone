import React, { useEffect, useRef, useState } from "react";
import CurrencyFormatter from "currency-formatter";
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
	ChartContainer,
	ChartSection,
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
import { useNavigate, useParams } from "react-router-dom";
import { useGetApartmentByIdMutation } from "../../redux/api/apartment.api.js";
import Loading from "../Loading/Loading.jsx";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { AMENITIES } from "./constants/amenities.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Bar Chart",
		},
	},
};

const labels = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const Apartment = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [getApartmentById, getApartmentByIdResponse] =
		useGetApartmentByIdMutation();
	const [apartment, setApartment] = useState(undefined);
	const [similarApartments, setSimilarApartments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const playerRef = useRef(null);
	const [chartData, setChartData] = useState([]);

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

	const handleNavigateToInquiry = () => {
		navigate("/inquire", {
			state: { id: params.apartmentId, type: apartment.type },
		});
	};

	useEffect(() => {
		getApartmentById({ id: params.apartmentId });
	}, []);

	useEffect(() => {
		if (getApartmentByIdResponse.isLoading) {
			setIsLoading(true);
		}
		if (getApartmentByIdResponse?.isSuccess) {
			const { result } = getApartmentByIdResponse.data;
			if (result?.data) {
				if (
					JSON.stringify(apartment) !==
					JSON.stringify(result.data.selectedApartment)
				) {
					setTimeout(() => {
						const { selectedApartment, similarApartments, inquiryData } =
							result.data;
						setIsLoading(false);
						setApartment(selectedApartment);
						setSimilarApartments(similarApartments);
						setChartData(labels.map((month) => inquiryData[month]));
					}, 2500);
				}
			} else {
				navigate("/apartments");
			}
		}
	}, [getApartmentByIdResponse]);

	const handleNavigate = (id) => {
		navigate(`/apartments/${id}`);
		setIsLoading(true);
		setApartment(undefined);
		setSimilarApartments([]);
		getApartmentById({ id });
	};

	return (
		<ApartmentContainer>
			{apartment?.name ? (
				<>
					<ApartmentHeadingSection>
						<ApartmentHeading>
							<div>
								<div>
									<h6>Agent</h6>
									<h6>Kaydan Travers</h6>
								</div>
								<h1>{apartment.name}</h1>
								<h5>{apartment.location}</h5>
							</div>
							<div>
								<div>
									<h5>Price </h5>
									<h4>
										{CurrencyFormatter.format(apartment.price, { code: "PHP" })}
									</h4>
								</div>
								<button onClick={handleNavigateToInquiry}>
									Quick Booking <ArrowRightAltIcon />
								</button>
							</div>
						</ApartmentHeading>
					</ApartmentHeadingSection>
					<ApartmentMediaSection>
						<VideoContainer>
							<VideoJs
								options={{
									autoplay: false,
									controls: true,
									responsive: true,
									fluid: true,
									sources: [
										{
											src: apartment.video,
											type: "video/vimeo",
										},
									],
									techOrder: ["Vimeo"],
								}}
								onReady={handlePlayerReady}
							/>
						</VideoContainer>
						<ImageContainer>
							<PhotoViewer images={apartment.images} />
						</ImageContainer>
					</ApartmentMediaSection>
					<AboutApartmentContainer>
						<div>
							<h1>About Apartment</h1>
							<p>{apartment.description}</p>
						</div>
						<div>
							<div>
								<h6>Bedroom</h6>
								<h5>{apartment.bedroom || 0}</h5>
							</div>
							<div>
								<h6>Bathroom</h6>
								<h5>{apartment.bathroom || 0}</h5>
							</div>
							<div>
								<h6>Balcony</h6>
								<h5>{apartment.balcony || 0}</h5>
							</div>
							<div>
								<h6>Servant room</h6>
								<h5>{apartment.servantRoom || 0}</h5>
							</div>
							<div>
								<h6>Super area</h6>
								<h5>{apartment.superArea || 0} m2</h5>
							</div>
							<div>
								<h6>Carpet area</h6>
								<h5>{apartment.carpetArea || 0} m2</h5>
							</div>
							<div>
								<h6>Unit on floor</h6>
								<h5>{apartment.unitFloor || 0}</h5>
							</div>
						</div>
					</AboutApartmentContainer>
					<ApartmentAmenitiesSection>
						<ApartmentAmenitiesContainer>
							<h1>Amenities</h1>
							<div>
								{apartment.amenities.map((amenity) => (
									<>{AMENITIES[amenity.value]}</>
								))}
							</div>
						</ApartmentAmenitiesContainer>
					</ApartmentAmenitiesSection>
					<ApartmentLocationSection>
						<ApartmentLocationContainer>
							<h1>Location</h1>
							<GoogleMap lat={apartment.latitude} lng={apartment.longitude} />
						</ApartmentLocationContainer>
					</ApartmentLocationSection>
					<ChartSection>
						<ChartContainer>
							<h1>Inquiries Chart</h1>
							<Line
								options={options}
								data={{
									labels,
									datasets: [
										{
											fill: true,
											label: "Number of Inquiries",
											data: chartData,
											borderColor: 'rgba(59, 52, 134)',
											backgroundColor: "rgba(59, 52, 134, 0.5)",
										},
									],
								}}
							/>
						</ChartContainer>
					</ChartSection>
					<CommonBooking />
					<SimilarApartmentSection>
						<SimilarApartmentContainer>
							<h1>Similar Apartments</h1>
							<ApartmentsList>
								{similarApartments.map((data) => (
									<ApartmentCard data={data} handleNavigate={handleNavigate} />
								))}
							</ApartmentsList>
						</SimilarApartmentContainer>
					</SimilarApartmentSection>
				</>
			) : null}
			<Loading isOpen={isLoading} />
		</ApartmentContainer>
	);
};

export default Apartment;
