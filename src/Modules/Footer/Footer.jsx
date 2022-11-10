import React from "react";
import { Grid } from "@mui/material";
import {
	FooterContainer,
	FooterSection,
	SubscriberFormContainer,
} from "./footer.styled.jsx";
import Logo from "../Navbar/Components/Logo.jsx";

const Footer = () => {
	return (
		<FooterSection>
			<FooterContainer>
				<Grid container spacing={2}>
					<Grid item xs={12} md={2}>
						<Logo inverted={true} />
						<p>Be sure to take a look at our Terms of Use and Privacy Policy</p>
					</Grid>
					<Grid item xs={12} md={2}>
						<h6>Address</h6>
						<p>
							1321 Apolinario Street, Bangkal, Makati City, Metro Manila, PH
							1233
						</p>
						<p>+63 930 543 1343</p>
					</Grid>
					<Grid item xs={12} md={2}>
						<h6>Services</h6>
						<p>Rent an Apartment</p>
						<p>Buy an Apartment</p>
					</Grid>
					<Grid item xs={12} md={2}>
						<h6>About</h6>
						<p>Contact Us</p>
						<p>About the Government</p>
					</Grid>
					<Grid item xs={12} md={4}>
						<h6>Subscribe Our Newsletter</h6>
						<SubscriberFormContainer>
							<input placeholder="Your email" />
							<button>Send</button>
						</SubscriberFormContainer>
						<div></div>
					</Grid>
				</Grid>
			</FooterContainer>
		</FooterSection>
	);
};

export default Footer;
