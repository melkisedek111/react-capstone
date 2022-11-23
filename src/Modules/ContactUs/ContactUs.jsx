import React, { useState, useEffect } from "react";
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
import ContactUsForm from "./Components/ContactUsForm.jsx";
import Loading from "../Loading/Loading.jsx";
import SnackbarAlert from "../Snackbar/SnackbarAlert.jsx";
import { useAddNewMessageMutation } from "../../redux/api/contactUs.api.js";

const ContactUs = () => {
	const [addNewMessage, addNewMessageResponse] = useAddNewMessageMutation();
	const [isMessage, setIsMessage] = useState(false);
	const [apiData, setApiData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (addNewMessageResponse?.isSuccess) {
			const { data } = addNewMessageResponse;
			setTimeout(() => {
				setIsMessage(true);
				setIsLoading(false);
				setApiData(data);
			}, 2500);
		}
	}, [addNewMessageResponse]);
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
									<ContactUsForm
										addNewMessage={addNewMessage}
										addNewMessageResponse={addNewMessageResponse}
										setIsLoading={setIsLoading}
									/>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={5}>
							<Card sx={{ padding: "30px 20px", minHeight: "630px" }}>
								<CardContent>
									<GetInTouchContainer>
										<h2>Get in touch.</h2>
										<p>
											If you're interested in buying or selling a home, we'd
											love to help! Please give us a call or send us an email
											and we'll be happy to answer any of your questions.
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
			<Loading isOpen={isLoading} />
			<SnackbarAlert
				isOpen={isMessage}
				message={apiData?.message}
				responseType={apiData?.responseType}
				setIsMessage={setIsMessage}
			/>
		</ContactUsContainer>
	);
};

export default ContactUs;
