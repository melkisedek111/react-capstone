import React from "react";
import {
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CommonHeader from "../Commons/CommonHeader.jsx";
import {
	ContactFormContainer,
	ContactFormSection,
	ContactUsContainer,
	GetInTouchContainer,
} from "./contactUs.styled.jsx";
import CommonBooking from "../Commons/CommonBooking.jsx";

const ContactUs = () => {
	return (
		<ContactUsContainer>
			<CommonHeader
				text="Contact Us"
				subtext="For questions and concerns let us know."
			/>
			<ContactFormSection>
				<ContactFormContainer>
					<Grid container spacing={2}>
						<Grid item xs={12} md={7}>
							<Card sx={{ padding: "30px 20px", minHeight: "630px" }}>
								<CardContent>
									<h2>Fill-up the form.</h2>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<TextField
												id="filled-basic"
												label="Name"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												id="filled-basic"
												label="Email"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												id="filled-basic"
												label="Contact Number"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												id="filled-basic"
												label="Subject"
												variant="outlined"
												fullWidth
											/>
										</Grid>
										<Grid item xs={12}>
											<TextField
												id="filled-basic"
												label="Message"
												variant="outlined"
												fullWidth
												multiline
												rows={6}
											/>
										</Grid>
										<Grid item xs={12}>
											<Button fullWidth variant="contained">
												Submit Request
											</Button>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={5}>
							<Card sx={{ padding: "30px 20px", minHeight: "630px" }}>
								<CardContent>
									<GetInTouchContainer>
										<h2>Get in touch.</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt.
										</p>
										<div>
											<div>
												<MapIcon />
												<div>
													<h4>Reach Us</h4>
													<h6>
														124, Xavier Niewers, Nujino Street, Tokyou 80 TA
														Japan.
													</h6>
												</div>
											</div>
											<div>
												<EmailIcon />
												<div>
													<h4>Drop A Mail</h4>
													<h6>Support@utopia.gov.com</h6>
													<h6>call.us@utopia.gov.com</h6>
												</div>
											</div>
											<div>
												<LocalPhoneIcon />
												<div>
													<h4>Call Us</h4>
													<h6>(2412) 123 456 789 +241 222 218 4112</h6>
												</div>
											</div>
										</div>
									</GetInTouchContainer>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</ContactFormContainer>
			</ContactFormSection>
			<CommonBooking />
		</ContactUsContainer>
	);
};

export default ContactUs;
