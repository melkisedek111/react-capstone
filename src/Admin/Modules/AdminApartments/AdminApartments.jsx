import { Grid } from "@mui/material";
import React from "react";

const AdminApartments = () => {
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sx={{ marginBottom: "20px" }}>
				<Typography variant="h3" marginBottom={"20px"}>
					Apartments
				</Typography>
				<Divider />
			</Grid>
		</Grid>
	);
};

export default AdminApartments;
