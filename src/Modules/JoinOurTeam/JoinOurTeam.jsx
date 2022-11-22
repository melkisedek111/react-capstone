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
						<Grid item xs={12} md={6} style={{ textAlign: "justify" }}>
							<div>
								<h3>Incentives</h3>
								<p>
									If you are looking for a company that offers great incentives
									to join, then look no further! Our company offers a variety of
									incentive programs that are designed to help you save money
									and make the most of your membership. From discounts on
									products and services to exclusive access to special events,
									we have something for everyone.
								</p>
							</div>
							<div>
								<h3>Benefits</h3>
								<p>
									The benefits of joining our company are many and varied, but
									most importantly, you will be joining a team of passionate,
									driven individuals who are committed to making a difference.
									We offer competitive salaries and benefits packages, as well
									as a supportive and collaborative work environment. You will
									also have the opportunity to work on cutting-edge projects
									that are making a positive impact in the world. If you are
									looking for a place to grow and make a difference, then our
									company is the right fit for you.
								</p>
							</div>
							<div>
								<h3>Insurance</h3>
								<p>
									There are many reasons to join our company, but one of the
									most important is our insurance benefits. We offer a
									comprehensive package that includes health, dental, and life
									insurance, as well as a retirement savings plan. Our insurance
									is top-quality and affordable, so you can rest assured that
									you and your family are covered.
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
							<FormStepper
								addNewJoiner={addNewJoiner}
								addNewJoinerResponse={addNewJoinerResponse}
								setIsLoading={setIsLoading}
							/>
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
