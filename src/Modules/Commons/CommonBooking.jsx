import { Button, Grid } from "@mui/material";
import React from "react";
import { BookingContainer, BookingSection } from "./commonBooking.styled.jsx";
import BookIcon from "@mui/icons-material/Book";
import { Link } from "react-router-dom";

const CommonBooking = () => {
	return (
		<BookingSection>
			<BookingContainer>
				<Grid container spacing={1}>
					<Grid item xs={12} md={5}>
						<h1>Ready to book the apartment?</h1>
						<h6>
							Do you have the type of apartment on your mind? Let us know.
						</h6>
						<Button variant="contained" endIcon={<BookIcon />}>
							<Link to="/enquire">Inquire Now</Link>
						</Button>
					</Grid>
					<Grid item xs={12} md={7}>
						<img src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/aset-04.png" />
					</Grid>
				</Grid>
			</BookingContainer>
		</BookingSection>
	);
};

export default CommonBooking;
