import React, { useState, useEffect } from "react";
import {
	Divider,
	Grid,
	Typography,
	Button,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	TablePagination,
	TableContainer,
} from "@mui/material";
import { Box } from "@mui/system";
import ApartmentFormModal from "./components/ApartmentFormModal.jsx";
import {
	useAddNewApartmentMutation,
	useGetApartmentsQuery,
	useGetPostApartmentsMutation,
} from "../../../redux/api/apartment.api.js";
import Loading from "../../../Modules/Loading/Loading.jsx";
import SnackbarAlert from "../../../Modules/Snackbar/SnackbarAlert.jsx";

const columns = [
	{ id: "name", label: "Name", minWidth: 170 },
	{ id: "type", label: "Type", minWidth: 100 },
	{ id: "location", label: "Location", minWidth: 170 },
	{ id: "bedroom", label: "Bedroom", minWidth: 50 },
	{ id: "bathroom", label: "Bathroom", minWidth: 50 },
	{ id: "balcony", label: "Balcony", minWidth: 50 },
	{ id: "servantRoom", label: "Servant Room", minWidth: 50 },
	{ id: "superArea", label: "Super Area", minWidth: 50 },
	{ id: "carpetArea", label: "Carpet Area", minWidth: 50 },
	{ id: "unitFloor", label: "Unit Floor", minWidth: 50 },
	{ id: "price", label: "Price", minWidth: 80 },
];

const AdminApartments = () => {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const [openModal, setOpenModal] = React.useState(false);
	const [isMessage, setIsMessage] = useState(false);
	const [apiData, setApiData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [addNewApartment, addNewApartmentResponse] =
		useAddNewApartmentMutation();
	const [apartments, setApartments] = useState([]);
	const [getPostApartments, getPostApartmentsResponse] =
		useGetPostApartmentsMutation();
	const getApartments = useGetApartmentsQuery();
	const handleOpen = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	useEffect(() => {
		if (addNewApartmentResponse?.isSuccess) {
			const { data } = addNewApartmentResponse;
			getPostApartments();
			setTimeout(() => {
				setIsMessage(true);
				setIsLoading(false);
				setApiData(data);
				handleCloseModal();
			}, 2500);
		}
	}, [addNewApartmentResponse]);

	useEffect(() => {
		if (getApartments?.data !== undefined) {
			const { result } = getApartments.data;
			setApartments(result);
		}

		if (getPostApartmentsResponse?.isSuccess) {
			const { result } = getPostApartmentsResponse.data;
			if (JSON.stringify(apartments) !== JSON.stringify(result)) {
				setApartments(result);
			}
		}
	}, [getApartments, getPostApartmentsResponse]);

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sx={{ marginBottom: "20px" }}>
				<Box style={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="h3" marginBottom={"20px"}>
						Apartments
					</Typography>
					<Box>
						<Button variant="contained" onClick={handleOpen}>
							Create new Apartment
						</Button>
					</Box>
				</Box>
				<Divider />
			</Grid>
			<Grid item xs={12}>
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
								{apartments
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
						count={apartments.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
			</Grid>
			<Grid item sx={12}>
				<ApartmentFormModal
					addNewApartment={addNewApartment}
					addNewApartmentResponse={addNewApartmentResponse}
					handleCloseModal={handleCloseModal}
					openModal={openModal}
					headerName="New Apartment"
					setIsLoading={setIsLoading}
				/>
				<Loading isOpen={isLoading} />
				<SnackbarAlert
					isOpen={isMessage}
					message={apiData?.message}
					responseType={apiData?.responseType}
					setIsMessage={setIsMessage}
				/>
			</Grid>
		</Grid>
	);
};

export default AdminApartments;
