import React, { useState } from "react";
import {
	Checkbox,
	FormGroup,
	FormHelperText,
	Grid,
	TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
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

const RemoveIcon = () => <RemoveCircleIcon sx={{ color: "lightgray" }} />;

const JoinOurTeam = () => {
	const [activeStep, setActiveStep] = useState(0);
	const [selectedCitizenship, setSelectedCitizenship] = useState(undefined);
	const [errors, setErrors] = useState({});
	const [skipSteps, setSkipSteps] = useState({});

	const handleSelectedCitizenship = (event) => {
		setSelectedCitizenship(event.target.value);
	};

	const handleNext = (index) => {
		let isFulfill = false;
		let nextStep = 0;

		if (index === 0) {
			if (selectedCitizenship !== undefined) {
				isFulfill = true;
				setErrors({ selectedCitizenship: false });
				if (selectedCitizenship == 1) {
					nextStep = 1;
					setSkipSteps({["2"]: true});
				} else {
					nextStep = 2;
					setSkipSteps({["1"]: true});
				}
			} else {
				setErrors({ selectedCitizenship: true });
			}
		} else if (index === 1 || index === 2) {
			isFulfill = true;
			nextStep = 3;
		}
		if (isFulfill) {
			setActiveStep((prevActiveStep) => {
				return nextStep;
			});
		}
	};

	const handleBack = (index) => {
		let step = 0;
		if(index === 1){
			step = index - 1
		} else if (index === 2){
			step = index - 2;
		}
		setActiveStep((prevActiveStep) => {
			if(index === 1 || index === 2){
				prevActiveStep = step;
			} else if (index === 3) {
				if (selectedCitizenship == 1) {
					prevActiveStep -= 2 
				} else {
					prevActiveStep -= 1 
				}
			}


			console.log({prevActiveStep, step, index})
			return prevActiveStep;
		});
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	const steps = [
		{
			label: "Citizenship",
			description: "",
			component: (
				<FormControl error={errors?.selectedCitizenship || false}>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						defaultValue={selectedCitizenship}
					>
						<FormControlLabel
							value={1}
							onChange={handleSelectedCitizenship}
							control={<Radio />}
							label="Filipino"
						/>
						<FormControlLabel
							value={0}
							onChange={handleSelectedCitizenship}
							control={<Radio />}
							label="Non - Filipino"
						/>
					</RadioGroup>
					{errors?.selectedCitizenship ? (
						<FormHelperText>Please select your citizenship.</FormHelperText>
					) : null}
				</FormControl>
			),
		},
		{
			label: "Filipino Citizen",
			description: `For each ad campaign that you create, you can control how much
					you're willing to spend on clicks and conversions, which networks
					and geographical locations you want your ads to show on, and more.`,
			component: (
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<TextField
							id="outlined-basic"
							label="National ID Number"
							variant="outlined"
							fullWidth
						/>
					</Grid>
				</Grid>
			),
		},
		{
			label: "Non - Filipino Citizen",
			description:
				"An ad group contains one or more ads which target a shared set of keywords.",
			component: (
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="First Name"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Last Name"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Date of Birth"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Home Address"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Country"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Zip Code"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Contact Number"
							variant="outlined"
							fullWidth
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="outlined-basic"
							label="Email Address"
							variant="outlined"
							fullWidth
						/>
					</Grid>
				</Grid>
			),
		},
		{
			label: "Terms and Condition",
			description: `Try out different ad text to see what brings in the most customers,
					and learn how to enhance your ads using features like ad extensions.
					If you run into any problems with your ads, find out how to tell if
					they're running and how to resolve approval issues.`,
			component: (
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Box
							sx={{
								height: "300px",
								overflow: "scroll",
								overflowX: "hidden",
								textAlign: "justify",
								padding: "15px"
							}}
						>
							<Typography variant="body1">
								Praesent sapien massa, convallis a pellentesque nec, egestas non
								nisi. Vestibulum ante ipsum primis in faucibus orci luctus et
								ultrices posuere cubilia Curae; Donec velit neque, auctor sit
								amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem
								ut libero malesuada feugiat. Sed porttitor lectus nibh.
								Curabitur aliquet quam id dui posuere blandit. Donec
								sollicitudin molestie malesuada. Proin eget tortor risus. Cras
								ultricies ligula sed magna dictum porta. Cras ultricies ligula
								sed magna dictum porta.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<FormControl component="fieldset" sx={{ margin: "10px 0" }}>
							<FormGroup aria-label="position" row>
								<FormControlLabel
									value="end"
									control={<Checkbox />}
									label="I Accept the terms and condition"
									labelPlacement="end"
								/>
							</FormGroup>
						</FormControl>
					</Grid>
				</Grid>
			),
		},
	];

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
							<Stepper activeStep={activeStep} orientation="vertical">
								{steps.map((step, index) => {
									let otherOptions = {};

									if(skipSteps[index]){
										otherOptions.StepIconComponent = RemoveIcon
									}
									return (
										<Step key={step.label}>
											<StepLabel
												{...otherOptions}
												optional={
													index === 3 ? (
														<Typography variant="caption">Last step</Typography>
													) : null
												}
											>
												<h5>{step.label}</h5>
											</StepLabel>
											<StepContent>
												{step.component}
												<Box sx={{ mb: 2 }}>
													<div>
														<Button
															variant="contained"
															onClick={() => handleNext(index)}
															sx={{ mt: 1, mr: 1 }}
														>
															{index === steps.length - 1
																? "Finish"
																: "Continue"}
														</Button>
														<Button
															disabled={index === 0}
															onClick={() => handleBack(index)}
															sx={{ mt: 1, mr: 1 }}
														>
															Back
														</Button>
													</div>
												</Box>
											</StepContent>
										</Step>
									);
								})}
							</Stepper>
							{activeStep === steps.length && (
								<Paper square elevation={0} sx={{ p: 3 }}>
									<Typography>
										All steps completed - you&apos;re finished
									</Typography>
									<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
										Reset
									</Button>
								</Paper>
							)}
						</Grid>
					</Grid>
				</FormContainer>
			</FormSection>
			<CommonBooking />
		</JoinOurTeamContainer>
	);
};

export default JoinOurTeam;
