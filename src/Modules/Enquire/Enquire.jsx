import React from "react";
import {
	Card,
	CardContent,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Button,
} from "@mui/material";
import WorkCard from "../Apartments/Components/WorkCard.jsx";
import {
	EnquireContainer,
	EnquireDetailsAndFormContainer,
	EnquireDetailsAndFormSection,
} from "./enquire.styled.jsx";
import CommonHeader from "../Commons/CommonHeader.jsx";

const Enquire = () => {
	return (
		<EnquireContainer>
			<CommonHeader
				text="Enquire to us."
				subtext="Give us your enquiry and booking of your future place to be."
			/>
			<EnquireDetailsAndFormSection>
				<EnquireDetailsAndFormContainer>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
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
						</Grid>
						<Grid item xs={12} md={7}>
							<Card sx={{ padding: "30px 20px" }}>
								<CardContent>
									<h2>Fill - up the enquiry form.</h2>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<TextField
												id="filled-basic"
												label="First Name"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												id="filled-basic"
												label="Last Name"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												id="filled-basic"
												label="Contact Number"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												id="filled-basic"
												label="Email Address"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={12}>
											<TextField
												id="filled-basic"
												label="Home Address"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<FormControl fullWidth>
												<InputLabel id="apartmentType">Apartment Type</InputLabel>
												<Select
													labelId="apartmentType"
													id="apartmentType"
													name="apartmentType"
													label="Apartment Type"
												>
													<MenuItem value={10}>Ten</MenuItem>
													<MenuItem value={20}>Twenty</MenuItem>
													<MenuItem value={30}>Thirty</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} md={6}>
											<FormControl fullWidth>
												<InputLabel id="apartmentName">Apartment Name</InputLabel>
												<Select
													labelId="apartmentName"
													id="apartmentName"
													name="apartmentName"
													label="Apartment Name"
												>
													<MenuItem value={10}>Ten</MenuItem>
													<MenuItem value={20}>Twenty</MenuItem>
													<MenuItem value={30}>Thirty</MenuItem>
												</Select>
											</FormControl>
										</Grid>
										<Grid item xs={12} md={12}>
											<TextField
												id="filled-basic"
												label="Message"
												variant="outlined"
												fullWidth
												rows={5}
												multiline
											/>
										</Grid>
										<Grid item xs={12}>
											<Button fullWidth variant="contained">
												Submit Enquiry
											</Button>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</EnquireDetailsAndFormContainer>
			</EnquireDetailsAndFormSection>
		</EnquireContainer>
	);
};

export default Enquire;
