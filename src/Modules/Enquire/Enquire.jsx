import React, { useEffect, useState } from "react";
import {
	Card,
	CardContent,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Button,
	FormHelperText,
} from "@mui/material";
import WorkCard from "../Apartments/Components/WorkCard.jsx";
import {
	EnquireContainer,
	EnquireDetailsAndFormContainer,
	EnquireDetailsAndFormSection,
} from "./enquire.styled.jsx";
import CommonHeader from "../Commons/CommonHeader.jsx";
import { useGetApartmentsByFieldsMutation } from "../../redux/apartment/apartment.api.js";

const Enquire = () => {
	const [getApartmentsByField, getApartmentsByFieldResponse] = useGetApartmentsByFieldsMutation();

	const [errors, setErrors] = useState({});
	const [formFields, setFormFields] = useState({
		firstName: "",
		lastName: "",
		contactNumber: "",
		emailAddress: "",
		homeAddress: "",
		apartmentId: "",
		message: "",
		apartmentType: "",
	});
	/**
	 * DOCUMENT: This function is used to handle value of each fields. <br>
	 * Triggered: when insert value on the fields <br>
	 * Last Updated Date: November 5, 2022
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

		console.log({id, name, value})
		if(name === "apartmentType"){
			getApartmentsByField({type: value});
		}
	};

	/**
	 * DOCUMENT: This function is used to validate all the field on the user form. <br>
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
				type: "letter",
				label: "Last Name",
			},
			contactNumber: {
				type: "number",
				label: "Contact Number",
			},
			emailAddress: {
				type: "email",
				label: "Email Address",
			},
			homeAddress: {
				type: "mixed",
				label: "Home Address",
			},
			apartmentId: {
				type: "mixed",
				label: "Apartment Name",
			},
			apartmentType: {
				type: "mixed",
				label: "Apartment Type",
			},
			message: {
				type: "mixed",
				label: "Message",
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
			} else if (type === "number") {
				/* check if the field is number only */
				if (!value.match(numberValidation)) {
					errors[
						field
					] = `Your ${label} is invalid and should include digits only.`;
				} else if (value.length !== 11) {
					errors[field] = `Your ${label} length should be 10.`;
				}
			}
		}
		setErrors(errors);

		return errors;
	};

	/**
	 * DOCUMENT: This function is used to check for errors and submit the form. <br>
	 * Triggered: when submitting a form <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFormSubmit = () => {
		const errors = handleValidation();

		/* checking for error if no, then submit */
		if (!Object.keys(errors).length) {
			/* this will reset all the fields */
			// setIsLoading(true);
		}
	};

	// useEffect(() => {
	// 	if (addNewMessageResponse?.isSuccess) {
	// 		const { data } = addNewMessageResponse;

	// 		setTimeout(() => {
	// 			if (data?.responseType === "success") {
	// 				setFormFields({
	// 					name: "",
	// 					emailAddress: "",
	// 					contactNumber: "",
	// 					subject: "",
	// 					messageBody: "",
	// 				});
	// 				setErrors({});
	// 			}
	// 		}, 2500);
	// 	}
	// }, [addNewMessageResponse]);
	useEffect(() => {
			
		if(getApartmentsByFieldResponse?.isSuccess){
			const { result } = getApartmentsByFieldResponse.data;
			console.log(result)
		}
	}, [getApartmentsByFieldResponse]);
	return (
		<EnquireContainer>
			<CommonHeader
				text="Enquire to us."
				subtext="Give us your enquiry and booking of your future place to be."
			/>
			<EnquireDetailsAndFormSection>
				<EnquireDetailsAndFormContainer>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<WorkCard
								title="Search your apartment"
								subtitle="Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod."
								src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/search.png"
							/>
							<WorkCard
								title="Choose your apartment"
								subtitle="Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod."
								src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/icon-choose.png"
							/>
						</Grid>
						<Grid item xs={12} md={7}>
							<Card sx={{ padding: "30px 20px" }}>
								<CardContent>
									<h2>Fill - up the enquiry form.</h2>
									<Grid container spacing={2}>
										<Grid item xs={12} md={6}>
											<TextField
												id="firstName"
												name="firstName"
												label="First Name"
												variant="outlined"
												fullWidth
												error={errors?.firstName ? true : false}
												helpertext={errors?.firstName || ""}
												value={formFields.firstName}
												onChange={handleFieldChange}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												id="lastName"
												name="lastName"
												label="Last Name"
												variant="outlined"
												fullWidth
												error={errors?.lastName ? true : false}
												helpertext={errors?.lastName || ""}
												value={formFields.lastName}
												onChange={handleFieldChange}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												id="contactNumber"
												name="contactNumber"
												label="Contact Number"
												variant="outlined"
												fullWidth
												error={errors?.contactNumber ? true : false}
												helpertext={errors?.contactNumber || ""}
												value={formFields.contactNumber}
												onChange={handleFieldChange}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<TextField
												id="emailAddress"
												name="emailAddress"
												label="Email Address"
												variant="outlined"
												fullWidth
												error={errors?.emailAddress ? true : false}
												helpertext={errors?.emailAddress || ""}
												value={formFields.emailAddress}
												onChange={handleFieldChange}
											/>
										</Grid>
										<Grid item xs={12} md={12}>
											<TextField
												id="homeAddress"
												name="homeAddress"
												label="Home Address"
												variant="outlined"
												fullWidth
												error={errors?.homeAddress ? true : false}
												helpertext={errors?.homeAddress || ""}
												value={formFields.homeAddress}
												onChange={handleFieldChange}
											/>
										</Grid>
										<Grid item xs={12} md={6}>
											<FormControl fullWidth error={errors?.apartmentType ? true : false}>
												<InputLabel id="apartmentType">
													Apartment Type
												</InputLabel>
												<Select
													labelId="apartmentType"
													id="apartmentType"
													name="apartmentType"
													label="Apartment Type"
													fullWidth
													error={errors?.apartmentType ? true : false}
													helpertext={errors?.apartmentType || ""}
													value={formFields.apartmentType}
													onChange={handleFieldChange}
												>
													<MenuItem value="Studio">Studio</MenuItem>
													<MenuItem value="Alcove studio">
														Alcove studio
													</MenuItem>
													<MenuItem value="Convertible studio">
														Convertible studio
													</MenuItem>
													<MenuItem value="Micro">Micro</MenuItem>
													<MenuItem value="Duplex">Duplex</MenuItem>
													<MenuItem value="Triplex">Triplex</MenuItem>
													<MenuItem value="Garden">Garden</MenuItem>
													<MenuItem value="High-rise">High-rise</MenuItem>
													<MenuItem value="Low-rise">Low-rise</MenuItem>
													<MenuItem value="Railroad">Railroad</MenuItem>
												</Select>
												{errors?.apartmentType ? (
													<FormHelperText>{errors?.apartmentType}</FormHelperText>
												) : null}
											</FormControl>
										</Grid>
										<Grid item xs={12} md={6}>
											<FormControl fullWidth error={errors?.apartmentId ? true : false}>
												<InputLabel id="apartmentName">
													Apartment Name
												</InputLabel>
												<Select
													labelId="apartmentName"
													id="apartmentId"
													name="apartmentId"
													label="Apartment Name"
													fullWidth
													error={errors?.apartmentId ? true : false}
													helpertext={errors?.apartmentId || ""}
													value={formFields.apartmentId}
													onChange={handleFieldChange}
												>
													<MenuItem value={10}>Ten</MenuItem>
													<MenuItem value={20}>Twenty</MenuItem>
													<MenuItem value={30}>Thirty</MenuItem>
												</Select>
												{errors?.apartmentId ? (
													<FormHelperText>{errors?.apartmentId}</FormHelperText>
												) : null}
											</FormControl>
										</Grid>
										<Grid item xs={12} md={12}>
											<TextField
												id="message"
												label="Message"
												variant="outlined"
												fullWidth
												rows={5}
												multiline
												name="message"
												error={errors?.message ? true : false}
												helpertext={errors?.message || ""}
												value={formFields.message}
												onChange={handleFieldChange}
											/>
										</Grid>
										<Grid item xs={12}>
											<Button
												fullWidth
												variant="contained"
												onClick={handleFormSubmit}
											>
												Submit Enquiry
											</Button>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</EnquireDetailsAndFormContainer>
			</EnquireDetailsAndFormSection>
		</EnquireContainer>
	);
};

export default Enquire;
