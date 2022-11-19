import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import { FormContainer, FormSection } from "../AboutUs/aboutUs.styled.jsx";
import CommonBooking from "../Commons/CommonBooking.jsx";
import CommonHeader from "../Commons/CommonHeader.jsx";
import TeamCard from "./Components/TeamCard.jsx";

import {
	JoinNowContainer,
	JoinNowSection,
	JoinOurTeamContainer,
	MeetTheTeamSection,
	TeamContainer,
} from "./joinOurTeam.styled.jsx";

import { useAddNewJoinerMutation } from "../../redux/api/joiner.api.js";
import Loading from "../Loading/Loading.jsx";
import SnackbarAlert from "../Snackbar/SnackbarAlert.jsx";
import FormStepper from "./Components/FormStepper.jsx";


const JoinOurTeam = () => {
	const [addNewJoiner, addNewJoinerResponse] = useAddNewJoinerMutation();
	const [isMessage, setIsMessage] = useState(false);
	const [apiData, setApiData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (addNewJoinerResponse?.isSuccess) {
			const { data } = addNewJoinerResponse;
			setTimeout(() => {
				setIsMessage(true);
				setIsLoading(false);
				setApiData(data);
			}, 2500);
		}
	}, [addNewJoinerResponse]);

	return (
		<JoinOurTeamContainer>
			<CommonHeader
				text="Join our Team"
				subtext="Make your life easier as you joined in our team."
			/>
			<MeetTheTeamSection>
				<h1>Meet the team.</h1>
				<TeamContainer>
					<TeamCard
						name="Brandan Greene"
						position="Founder & CEO"
						imageUrl="http://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/attractive-young-man-smiling-with-arms-crossed-PF8HN7L.jpg"
					/>
					<TeamCard
						name="Celia Huffman"
						position="Creative Director"
						imageUrl="http://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/beautiful-woman-smiling-at-home-S2DVGUT.jpg"
					/>
					<TeamCard
						name="Finnian Alvarado"
						position="Sales & Partnerships"
						imageUrl="http://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/woman-smile-to-camera-UB63N28.jpg"
					/>
				</TeamContainer>
			</MeetTheTeamSection>
			<JoinNowSection>
				<JoinNowContainer>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<h1>Join the Utopia.gov team now.</h1>
						</Grid>
						<Grid item xs={12} md={6}>
							<div>
								<h3>Incentives</h3>
								<p>
									Praesent sapien massa, convallis a pellentesque nec, egestas
									non nisi. Nulla porttitor accumsan tincidunt. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar a.
								</p>
							</div>
							<div>
								<h3>Benefits</h3>
								<p>
									Praesent sapien massa, convallis a pellentesque nec, egestas
									non nisi. Nulla porttitor accumsan tincidunt. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar a.
								</p>
							</div>
							<div>
								<h3>Insurance</h3>
								<p>
									Praesent sapien massa, convallis a pellentesque nec, egestas
									non nisi. Nulla porttitor accumsan tincidunt. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar a.
								</p>
							</div>
						</Grid>
					</Grid>
				</JoinNowContainer>
			</JoinNowSection>
			<FormSection>
				<FormContainer>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<h1>Fill up the form now to join.</h1>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormStepper addNewJoiner={addNewJoiner} addNewJoinerResponse={addNewJoinerResponse} setIsLoading={setIsLoading}/>
						</Grid>
					</Grid>
				</FormContainer>
			</FormSection>
			<CommonBooking />
			<Loading isOpen={isLoading} />
			<SnackbarAlert
				isOpen={isMessage}
				message={apiData?.message}
				responseType={apiData?.responseType}
				setIsMessage={setIsMessage}
			/>
		</JoinOurTeamContainer>
	);
};

export default JoinOurTeam;
