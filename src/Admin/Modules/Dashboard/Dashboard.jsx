import { Box, Divider, Grid, Typography } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import React from "react";
import { faker } from "@faker-js/faker";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";

ChartJS.register(
	ArcElement,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
const pieData = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Apartment Data by Types",
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			label: "Dataset 1",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Dataset 2",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
	{ id: "name", label: "Name", minWidth: 170 },
	{ id: "code", label: "ISO\u00a0Code", minWidth: 100 },
	{
		id: "population",
		label: "Population",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "size",
		label: "Size\u00a0(km\u00b2)",
		minWidth: 170,
		align: "right",
		format: (value) => value.toLocaleString("en-US"),
	},
	{
		id: "density",
		label: "Density",
		minWidth: 170,
		align: "right",
		format: (value) => value.toFixed(2),
	},
];

function createData(name, code, population, size) {
	const density = population / size;
	return { name, code, population, size, density };
}

const rows = [
	createData("India", "IN", 1324171354, 3287263),
	createData("China", "CN", 1403500365, 9596961),
	createData("Italy", "IT", 60483973, 301340),
	createData("United States", "US", 327167434, 9833520),
	createData("Canada", "CA", 37602103, 9984670),
	createData("Australia", "AU", 25475400, 7692024),
	createData("Germany", "DE", 83019200, 357578),
	createData("Ireland", "IE", 4857000, 70273),
	createData("Mexico", "MX", 126577691, 1972550),
	createData("Japan", "JP", 126317000, 377973),
	createData("France", "FR", 67022000, 640679),
	createData("United Kingdom", "GB", 67545757, 242495),
	createData("Russia", "RU", 146793744, 17098246),
	createData("Nigeria", "NG", 200962417, 923768),
	createData("Brazil", "BR", 210147125, 8515767),
];
const Dashboard = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sx={{ marginBottom: "20px" }}>
				<Typography variant="h3" marginBottom={"20px"}>Dashboard</Typography>
				<Divider />
			</Grid>
			<Grid item xs={7}>
				<Typography variant="h5">Data Enquiry per Apartment Type</Typography>
				<Bar options={options} data={data} />;
			</Grid>
			<Grid item xs={5}>
				<Typography variant="h5" marginBottom={"20px"}>Data Apartments per Type</Typography>
				<Box style={{width: "100%", height: "40vh"}}>
					<Pie
						data={pieData}
						width={"20%"}
						options={{ maintainAspectRatio: false }}
					/>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h5" marginBottom={"20px"}>List of Enquiries</Typography>
				<Paper sx={{ width: "100%", overflow: "hidden" }}>
					<TableContainer sx={{ maxHeight: 440 }}>
						<Table stickyHeader aria-label="sticky table">
							<TableHead>
								<TableRow>
									{columns.map((column) => (
										<TableCell
											key={column.id}
											align={column.align}
											style={{ minWidth: column.minWidth }}
										>
											{column.label}
										</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{rows
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => {
										return (
											<TableRow
												hover
												role="checkbox"
												tabIndex={-1}
												key={row.code}
											>
												{columns.map((column) => {
													const value = row[column.id];
													return (
														<TableCell key={column.id} align={column.align}>
															{column.format && typeof value === "number"
																? column.format(value)
																: value}
														</TableCell>
													);
												})}
											</TableRow>
										);
									})}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[10, 25, 100]}
						component="div"
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
