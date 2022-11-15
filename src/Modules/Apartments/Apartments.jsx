import { Apartment } from "@mui/icons-material";
import React from "react";
import CommonBooking from "../Commons/CommonBooking.jsx";
import CommonHeader from "../Commons/CommonHeader.jsx";
import {
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
	return (
		<ApartmentsContainer>
			<CommonHeader text="Our Apartments" />
			<ApartmentsSection>
				<ApartmentsHeading>
					<h5>Apartments</h5>
					<h1>Apartments for rent.</h1>
				</ApartmentsHeading>
				<ApartmentsList>
					<ApartmentCard />
					<ApartmentCard />
					<ApartmentCard />
					<ApartmentCard />
				</ApartmentsList>
			</ApartmentsSection>
			<ApartmentsSection>
				<ApartmentsHeading>
					<h5>Apartments</h5>
					<h1>Apartments sell.</h1>
				</ApartmentsHeading>
				<ApartmentsList>
					<ApartmentCard />
					<ApartmentCard />
					<ApartmentCard />
					<ApartmentCard />
				</ApartmentsList>
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
		</ApartmentsContainer>
	);
};

export default Apartments;
