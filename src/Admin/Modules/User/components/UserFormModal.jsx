import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormHelperText,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	FormControl,
    Box,
    Typography,
    Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PasswordChecklist from "react-password-checklist";

const UserFormModal = ({
	openModal,
	handleCloseModal,
	headerName,
	setIsLoading,
	registerNewUser,
	registerNewUserResponse,
}) => {
	const [errors, setErrors] = useState();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [formFields, setFormFields] = useState({
		firstName: "",
		lastName: "",
		username: "",
		password: "",
		confirmPassword: "",
		role: "",
	});

	/**
	 * DOCUMENT: This function is used to validate all the field on the form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleValidation = () => {
		/* default fields */
		let fields = {
			firstName: {
				type: "letter",
				label: "First Name",
			},
			lastName: {
				type: "mixed",
				label: "Last Name",
			},
			username: {
				type: "mixed",
				label: "Username",
			},
			password: {
				type: "mixed",
				label: "Password",
			},
			confirmPassword: {
				type: "mixed",
				label: "Confirm Password",
			},
			role: {
				type: "text",
				label: "Role",
			},
		};

		/* validation for only letter and spaces */
		const alphabetValidation = /^[a-zA-Z\s]*$/;

		/* validation for email only */
		const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		/* validation for number only */
		const numberValidation = /^[0-9]\d*$/;
		let errors = {};

		/* this loop is used to iterate each of the default fields to check for errors and validations */
		for (const field in fields) {
			const { type, label } = fields[field];
			const value = formFields[field].trim();

			/* check for empty value */
			if (!value) {
				errors[field] = `${label} is empty. Please insert the field.`;
			} else if (type === "letter") {
				/* check if the field is letter only */
				if (!value.match(alphabetValidation)) {
					errors[field] = `${label} must be an alphabet only.`;
				}
			} else if (type === "email") {
				/* check if the field is email only */
				if (!value.match(emailValidation)) {
					errors[
						field
					] = `Your ${label} is invalid, Please provide a valid one.`;
				}
			} else if (field === "confirmPassword") {
				/* check if the field is number only */
				if (formFields.password !== formFields.confirmPassword) {
					errors[field] = `Your ${label} does not matched.`;
				}
			}
		}
		setErrors(errors);

		return errors;
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

	const handleSubmit = async () => {
		const errors = handleValidation();
		setIsSubmitted(true);
		/* checking for error if no, then submit */
		if (!Object.keys(errors).length && isPasswordValid) {
            console.log(12312312)
			registerNewUser({...formFields, role: Number(formFields.role)});
			setIsLoading(true);
		}
	};

	useEffect(() => {
		if (registerNewUserResponse?.isSuccess) {
			const { data } = registerNewUser;

			setTimeout(() => {
				if (data?.responseType === "success") {
					setFormFields({
						firstName: "",
						lastName: "",
						username: "",
						password: "",
						confirmPassword: "",
						role: "",
					});
					handleCloseModal();
				}
			}, 2500);
		}
	}, [registerNewUserResponse]);
	return (
		<Dialog
			open={openModal}
			onClose={handleCloseModal}
			scroll={"body"}
			aria-labelledby="scroll-dialog-title"
			aria-describedby="scroll-dialog-description"
			fullWidth
			maxWidth={"sm"}
		>
			<DialogTitle id="scroll-dialog-title">{headerName}</DialogTitle>
			<DialogContent dividers style={{ margin: "0" }}>
				<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
					<Typography variant="h6">User Details</Typography>
					<Divider />
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							id="firstName"
							name="firstName"
							label="First Name"
							variant="outlined"
							fullWidth
							error={errors?.firstName ? true : false}
							helperText={errors?.firstName || ""}
							value={formFields.name}
							onChange={handleFieldChange}
							size="small"
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="lastName"
							name="lastName"
							label="Last Name"
							variant="outlined"
							fullWidth
							error={errors?.lastName ? true : false}
							helperText={errors?.lastName || ""}
							value={formFields.lastName}
							onChange={handleFieldChange}
							size="small"
						/>
					</Grid>
				</Grid>
				<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
					<Typography variant="h6">Account Details</Typography>
					<Divider />
				</Box>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							id="username"
							name="username"
							label="Username"
							variant="outlined"
							fullWidth
							error={errors?.username ? true : false}
							helperText={errors?.username || ""}
							value={formFields.username}
							onChange={handleFieldChange}
							size="small"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControl
							fullWidth
							size="small"
							error={errors?.role ? true : false}
						>
							<InputLabel id="role-label">Role</InputLabel>
							<Select
								labelId="role-label"
								id="role"
								name="role"
								label="Role"
								variant="outlined"
								fullWidth
								error={errors?.role ? true : false}
								value={formFields.role}
								onChange={handleFieldChange}
								size="small"
							>
								<MenuItem value="10">Admin</MenuItem>
								<MenuItem value="11">Super Admin</MenuItem>
							</Select>
							{errors?.role ? (
								<FormHelperText>{errors?.role}</FormHelperText>
							) : null}
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="password"
							name="password"
							label="Password"
							variant="outlined"
							fullWidth
							error={errors?.password ? true : false}
							helperText={errors?.password || ""}
							value={formFields.password}
							onChange={handleFieldChange}
							size="small"
							type="password"
						/>
						{isSubmitted ? (
							<PasswordChecklist
								rules={["minLength", "specialChar", "number", "capital"]}
								minLength={8}
								value={formFields.password}
								valueAgain={formFields.confirmPassword}
								onChange={(isValid) => {
									setIsPasswordValid(isValid);
								}}
								style={{ fontSize: "12px", fontWeight: "lighter" }}
							/>
						) : null}
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="confirmPassword"
							name="confirmPassword"
							label="Confirm Password"
							variant="outlined"
							fullWidth
							error={errors?.confirmPassword ? true : false}
							helperText={errors?.confirmPassword || ""}
							value={formFields.confirmPassword}
							onChange={handleFieldChange}
							size="small"
							type="password"
						/>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleSubmit}>
					Submit
				</Button>
				<Button color="error" onClick={handleCloseModal}>
					Cancel
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default UserFormModal;
