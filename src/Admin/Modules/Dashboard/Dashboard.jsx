import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableData from "../TableData/TableData.jsx";
import { useGetInquiriesQuery } from "../../../redux/api/inquire.api.js";
import moment from "moment/moment.js";

import BarChart from "./components/Barchart.jsx";
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
