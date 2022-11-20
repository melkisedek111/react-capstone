import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import BarChart from "./components/BarChart.jsx";
import PieChart from "./components/PieChart.jsx";
import Messages from "./components/Messages.jsx";
import Inquiries from "./components/Inquiries.jsx";

const Dashboard = () => {
	return (
		<>
			<Grid container spacing={3} >
				<Grid item xs={12} sx={{ marginBottom: "20px" }}>
					<Typography variant="h3" marginBottom={"20px"}>
						Dashboard
					</Typography>
					<Divider />
				</Grid>
				<Grid item xs={7}>
					<Typography variant="h5">Data Enquiry per Apartment Type</Typography>
					<BarChart />
				</Grid>
				<Grid item xs={5}>
					<Typography variant="h5" marginBottom={"20px"}>
						Data Apartments per Type
					</Typography>
					<Box style={{ width: "100%", height: "40vh" }}>
						<PieChart />
					</Box>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h5" marginBottom={"20px"}>
						List of Inquiries
					</Typography>
					<Inquiries />
				</Grid>
				<Grid item xs={12}>
					<Typography variant="h5" marginBottom={"20px"}>
						List of Messages
					</Typography>
					<Messages />
				</Grid>
			</Grid>
		</>
	);
};

export default Dashboard;
