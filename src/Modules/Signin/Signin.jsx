import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link as MUILink } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Navbar/Components/Logo.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useLoginUserMutation } from "../../redux/api/user.api.js";
import Loading from "../Loading/Loading.jsx";
import SnackbarAlert from "../Snackbar/SnackbarAlert.jsx";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<MUILink color="inherit" href="https://mui.com/">
				Your Website
			</MUILink>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const theme = createTheme();

export default function SignIn() {
	const [loginUser, loginUserResponse] = useLoginUserMutation();
	const [isMessage, setIsMessage] = useState(false);
	const [openModal, setOpenModal] = React.useState(false);
	const [apiData, setApiData] = useState(undefined);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState(null);
	const [formFields, setFormFields] = useState({
		username: "",
		password: "",
	});
	const handleOpen = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	const handleSubmit = (event) => {
		event.preventDefault();
		const username = formFields.username.trim();
		const password = formFields.password.trim();
		const error = {};
		if (username === "") {
			error.username = "Username is required.";
		}
		if (password === "") {
			error.password = "Password is required.";
		}
		if (username !== "" && password !== "") {
			setIsLoading(true);
			setErrors({});
			loginUser({ username, password });
		} else {
			setErrors(error);
		}
	};

	/**
	 * DOCUMENT: This function is used to handle value of each fields. <br>
	 * Triggered: when insert value on the fields <br>
	 * Last Updated Date: November 15, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFieldChange = (event) => {
		let {
			target: { value, name, id },
		} = event;

		setFormFields({ ...formFields, [id || name]: value });
	};

	// useEffect(() => {
	// 	const { data } = loginUserResponse;
	// 	setTimeout(() => {
	// 		setIsMessage(true);
	// 		setIsLoading(false);
	// 		setApiData(data);
	// 		handleCloseModal();
	// 	}, 2500);
	// }, [loginUserResponse]);

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Logo inverted={true} />
					<Typography component="h1" variant="h5">
						Admin Sign in
					</Typography>
					<Box
						component="form"
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							autoComplete="username"
							autoFocus
							id="username"
							name="username"
							label="Username"
							variant="outlined"
							fullWidth
							error={errors?.username ? true : false}
							helperText={errors?.username || ""}
							value={formFields.username}
							onChange={handleFieldChange}
						/>
						<TextField
							margin="normal"
							autoComplete="password"
							autoFocus
							id="password"
							name="password"
							label="Password"
							variant="outlined"
							fullWidth
							error={errors?.password ? true : false}
							helperText={errors?.password || ""}
							value={formFields.password}
							onChange={handleFieldChange}
							type="password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={handleSubmit}
						>
							Sign In
						</Button>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
				<Loading isOpen={isLoading} />
				<SnackbarAlert
					isOpen={isMessage}
					message={apiData?.message}
					responseType={apiData?.responseType}
					setIsMessage={setIsMessage}
				/>
			</Container>
		</ThemeProvider>
	);
}
