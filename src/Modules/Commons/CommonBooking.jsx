import { Button, Grid } from "@mui/material";
import React from "react";
import { BookingContainer, BookingSection } from "./commonBooking.styled.jsx";
import BookIcon from "@mui/icons-material/Book";

const CommonBooking = () => {
	return (
		<BookingSection>
			<BookingContainer>
				<Grid container spacing={1}>
					<Grid item xs={12} md={5}>
						<h1>Ready to book the property?</h1>
						<h6>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</h6>
						<Button variant="contained" endIcon={<BookIcon />}>
							Book Now
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
