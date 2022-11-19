import { Apartment } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetApartmentByTypeMutation } from "../../redux/api/apartment.api.js";
import CommonBooking from "../Commons/CommonBooking.jsx";
import CommonHeader from "../Commons/CommonHeader.jsx";
import Loading from "../Loading/Loading.jsx";
import SnackbarAlert from "../Snackbar/SnackbarAlert.jsx";
import {
	ApartmentCards,
	ApartmentsContainer,
	ApartmentsHeading,
	ApartmentsList,
	ApartmentsSection,
	HowsItWorkSection,
	WorkCardLists,
} from "./apartments.styled.jsx";
import ApartmentCard from "./Components/ApartmentCard.jsx";
import WorkCard from "./Components/WorkCard.jsx";

const Apartments = () => {
	const [getApartmentByType, getApartmentByTypeResponse] =
		useGetApartmentByTypeMutation();
	const [apartments, setApartments] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleNavigate = (id) => {
		navigate(`/apartments/${id}`)
	}

	useEffect(() => {
		getApartmentByType();
	}, []);

	useEffect(() => {
		if (getApartmentByTypeResponse.isLoading) {
			setIsLoading(true);
		}

		if (getApartmentByTypeResponse?.isSuccess) {
			const { result } = getApartmentByTypeResponse.data;
			if (result?.data) {
				const data = Object.values(result.data);
				if (JSON.stringify(apartments) !== JSON.stringify(result)) {
					setTimeout(() => {
						setIsLoading(false);
						setApartments(data);
					}, 2500);
				}
			}
		}
	}, [getApartmentByTypeResponse]);
	return (
		<ApartmentsContainer>
			<CommonHeader text="Our Apartments" />
			<ApartmentsSection>
				{apartments.length ? (
					apartments.map((apartment) => (
						<ApartmentCards>
							<ApartmentsHeading>
								<h5>Apartments</h5>
								<h1>{apartment.type}</h1>
							</ApartmentsHeading>
							<ApartmentsList>
								{apartment.data.length
									? apartment.data.map((data) => <ApartmentCard data={data} handleNavigate={handleNavigate}/>)
									: null}
							</ApartmentsList>
						</ApartmentCards>
					))
				) : (
					<ApartmentsHeading>
						<h5>Apartments</h5>
						<h1>No Apartments available.</h1>
					</ApartmentsHeading>
				)}
			</ApartmentsSection>
			<HowsItWorkSection>
				<ApartmentsHeading>
					<h1>How it work.</h1>
				</ApartmentsHeading>
				<WorkCardLists>
					<WorkCard
						title="Search your apartment"
						subtitle="Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod."
						src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/search.png"
					/>
					<WorkCard
						title="Choose your apartment"
						subtitle="Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod."
						src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/icon-choose.png"
					/>
					<WorkCard
						title="Close the deal"
						subtitle="Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod."
						src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/icon-deal.png"
					/>
				</WorkCardLists>
			</HowsItWorkSection>
			<CommonBooking />
			<Loading isOpen={isLoading} />
		</ApartmentsContainer>
	);
};

export default Apartments;
