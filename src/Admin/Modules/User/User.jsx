import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Typography } from "@mui/material";
import UserFormModal from "./components/UserFormModal.jsx";
import { useRegisterNewUserMutation, useGetUsersQuery, useGetPostUsersMutation } from "../../../redux/api/user.api.js";
import Loading from "../../../Modules/Loading/Loading.jsx";
import SnackbarAlert from "../../../Modules/Snackbar/SnackbarAlert.jsx";

const columns = [
	{ id: "firstName", label: "First Name", minWidth: 170 },
	{ id: "lastName", label: "Last Name", minWidth: 100 },
	{ id: "username", label: "Username", minWidth: 170 },
	{ id: "role", label: "Role", minWidth: 50 },
	{ id: "isActive", label: "Active", minWidth: 50 },
];

const User = () => {
    const [registerNewUser, registerNewUserResponse] = useRegisterNewUserMutation();
    const getUsers = useGetUsersQuery();
    const [getPostUsers, getPostUsersResponse] = useGetPostUsersMutation();

    const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openModal, setOpenModal] = useState(false);
    const [users, setUsers] = useState([]);
    const handleOpen = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	const [isMessage, setIsMessage] = useState(false);
	const [apiData, setApiData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

    useEffect(() => {
		if (registerNewUserResponse?.isSuccess) {
			const { data } = registerNewUserResponse;
			getPostUsers();
			setTimeout(() => {
				setIsMessage(true);
				setIsLoading(false);
				setApiData(data);
				handleCloseModal();
			}, 2500);
		}
	}, [registerNewUserResponse]);

	useEffect(() => {
		if(getUsers?.data !== undefined){
			const { result } = getUsers.data;
			setUsers(result);
            console.log(333333)
		}
		
		if(getPostUsersResponse?.isSuccess){
			const { result } = getPostUsersResponse.data;
			if(JSON.stringify(users) !== JSON.stringify(result)){
                console.log(555555)
				setUsers(result);
			}
		}
	}, [getUsers, getPostUsersResponse]);
    
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} sx={{ marginBottom: "20px" }}>
				<Box style={{ display: "flex", justifyContent: "space-between" }}>
					<Typography variant="h3" marginBottom={"20px"}>
						Users
					</Typography>
					<Box>
						<Button variant="contained" onClick={handleOpen}>
							Create new User
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
								{users
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
						count={users.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</Paper>
			</Grid>
			<Grid item sx={12}>
				<UserFormModal
                    registerNewUser={registerNewUser}
                    registerNewUserResponse={registerNewUserResponse}
					handleCloseModal={handleCloseModal}
					openModal={openModal}
					headerName="New Users"
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

export default User;
