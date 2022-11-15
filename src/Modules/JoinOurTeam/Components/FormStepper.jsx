import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Autocomplete, Checkbox, FormGroup, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";

import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import dayjs from "dayjs";

import { countries } from "../../../Data.js";
import { red } from "@mui/material/colors";

const RemoveIcon = () => <RemoveCircleIcon sx={{ color: "lightgray" }} />;

const FormStepper = ({addNewJoiner, addNewJoinerResponse, setIsLoading}) => {
	const countriesArray = [];
	for (const keys in countries) {
		countriesArray.push({
			code: keys,
			label: countries[keys],
		});
	}
	const [activeStep, setActiveStep] = useState(0);
	const [selectedCitizenship, setSelectedCitizenship] = useState(undefined);
	const [formFields, setFormFields] = useState({
		dayValue: dayjs(new Date()),
		firstName: "",
		lastName: "",
		dateOfBirth: "",
		emailAddress: "",
		contactNumber: "",
		homeAddress: "",
		zipCode: "",
		country: "AF",
		gender: "",
		nationalId: "",
	});
	const [errors, setErrors] = useState({});
	const [skipSteps, setSkipSteps] = useState({});
	const [isTermsAndConditionAccepted, setIsTermsAndConditionAccepted] =
		useState(undefined);
	const [primaryStep, setPrimaryStep] = useState(0);
	const [countryValue, setCountryValue] = useState({
		code: "AF",
		label: "Afghanistan",
	});
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
			dateOfBirth: {
				type: "date",
				label: "Date of Birth",
			},
			emailAddress: {
				type: "email",
				label: "Email Address",
			},
			contactNumber: {
				type: "number",
				label: "Contact Number",
			},
			homeAddress: {
				type: "mixed",
				label: "Home Address",
			},
			zipCode: {
				type: "mixed",
				label: "zipCode",
			},
			country: {
				type: "mixed",
				label: "Country",
			},
			gender: {
				type: "mixed",
				label: "Gender",
			},
		};

		/* validation for only letter and spaces */
		const alphabetValidation = /^[a-zA-Z\s]*$/;

		/* validation for email only */
		const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		/* validation for number only */
		const numberValidation = /^[0-9]\d*$/;
		let errors = {};

		if (selectedCitizenship == 1) {
			fields = {
				nationalId: {
					type: "mixed",
					label: "National ID Number",
				},
			};
		}

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
			} else if (type === "date") {
				/* check if the field is date and date should not be greater then today's date */
				if (new Date(value).getTime() > new Date().getTime()) {
					errors[
						field
					] = `Your ${label} should not be greater than date today.`;
				}
			}
		}
		setErrors(errors);

		return errors;
	};

	const handleSelectedCitizenship = (event) => {
		setSelectedCitizenship(event.target.value);
	};

	const handleNext = (index) => {
		let isFulfill = false;
		let nextStep = 0;

		if (index === 0) {
			if (selectedCitizenship !== undefined) {
				isFulfill = true;
				setErrors({ selectedCitizenship: false });
				if (selectedCitizenship == 1) {
					nextStep = 1;
					setSkipSteps({ ["2"]: true });
				} else {
					nextStep = 2;
					setSkipSteps({ ["1"]: true });
				}
			} else {
				setErrors({ selectedCitizenship: true });
			}
		} else if (index === 1 || index === 2) {
			const errors = handleValidation();
			setPrimaryStep(index);

			/* checking for error if no, then submit */
			if (!Object.keys(errors).length) {
				isFulfill = true;
				nextStep = 3;
			}
		} else if (index === 3) {
			const typeOf = typeof isTermsAndConditionAccepted;
			if (
				(typeOf === "boolean" || typeOf === "undefined") &&
				!isTermsAndConditionAccepted
			) {
				setIsTermsAndConditionAccepted(false);
			} else {
				setIsLoading(true);
				addNewJoiner(formFields);
				nextStep = index + 1;
				isFulfill = true;
			}
		}

		if (isFulfill) {
			setActiveStep((prevActiveStep) => {
				return nextStep;
			});
		}
	};
	const handleBack = (index) => {
		let step = 0;
		if (index === 1) {
			step = index - 1;
		} else if (index === 2) {
			step = index - 2;
		}
		setActiveStep((prevActiveStep) => {
			if (index === 1 || index === 2) {
				prevActiveStep = step;
			} else if (index === 3) {
				if (selectedCitizenship == 1) {
					prevActiveStep -= 2;
				} else {
					prevActiveStep -= 1;
				}
			}
			return prevActiveStep;
		});
	};

	/**
	 * DOCUMENT: This function is used to handle the date value using date picker. <br>
	 * Triggered: when changing the value of date field <br>
	 * Last Updated Date: November 14, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleDateChange = (newValue) => {
		setFormFields({
			...formFields,
			dayValue: newValue,
			dateOfBirth: moment(newValue["$d"]).format("MM/DD/YYYY"),
		});
	};

	/**
	 * DOCUMENT: This function is used to handle value of each fields. <br>
	 * Triggered: when insert value on the fields <br>
	 * Last Updated Date: November 5, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFieldChange = (event, otherEvent = undefined) => {
		let {
			target: { value, name, id },
		} = event;
		if (otherEvent?.code) {
			id = "country";
			value = otherEvent.code;
			setCountryValue({ code: otherEvent?.code, label: otherEvent?.label });
		}
		setFormFields({ ...formFields, [id || name]: value });
	};

	useEffect(() => {
		if (addNewJoinerResponse?.isSuccess) {
			const { data } = addNewJoinerResponse;

			setTimeout(() => {
				if (
					data?.responseType === "warning" ||
					data?.responseType === "error"
				) {
					setActiveStep(primaryStep);
				}

				if (data?.responseType === "success") {
					setFormFields({
						dayValue: dayjs(new Date()),
						firstName: "",
						lastName: "",
						dateOfBirth: "",
						emailAddress: "",
						contactNumber: "",
						homeAddress: "",
						zipCode: "",
						country: "",
						gender: "",
						nationalId: "",
					});
					setSelectedCitizenship(undefined);
					setActiveStep(0);
					setErrors({});
                    setIsTermsAndConditionAccepted(undefined);
				}
			}, 2500);
		}
	}, [addNewJoinerResponse]);

	const steps = [
		{
			label: "Citizenship",
			description: "",
			component: (
				<FormControl error={errors?.selectedCitizenship || false}>
					<RadioGroup
						row
						aria-labelledby="demo-row-radio-buttons-group-label"
						name="row-radio-buttons-group"
						value={selectedCitizenship || false}
					>
						<FormControlLabel
							value={1}
							onChange={handleSelectedCitizenship}
							control={<Radio />}
							label="Filipino"
						/>
						<FormControlLabel
							value={0}
							onChange={handleSelectedCitizenship}
							control={<Radio />}
							label="Non - Filipino"
						/>
					</RadioGroup>
					{errors?.selectedCitizenship ? (
						<FormHelperText>Please select your citizenship.</FormHelperText>
					) : null}
				</FormControl>
			),
		},
		{
			label: "Filipino Citizen",
			description: `For each ad campaign that you create, you can control how much
					you're willing to spend on clicks and conversions, which networks
					and geographical locations you want your ads to show on, and more.`,
			component: (
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<TextField
							id="nationalId"
							name="NationalId"
							label="National ID Number"
							variant="outlined"
							fullWidth
							error={errors?.nationalId ? true : false}
							helperText={errors?.nationalId || ""}
							value={formFields.nationalId}
							onChange={handleFieldChange}
						/>
					</Grid>
				</Grid>
			),
		},
		{
			label: "Non - Filipino Citizen",
			description:
				"An ad group contains one or more ads which target a shared set of keywords.",
			component: (
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<TextField
							id="firstName"
							name="First Name"
							label="First Name"
							variant="outlined"
							fullWidth
							error={errors?.firstName ? true : false}
							helperText={errors?.firstName || ""}
							value={formFields.firstName}
							onChange={handleFieldChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="lastName"
							name="Last Name"
							label="Last Name"
							variant="outlined"
							fullWidth
							error={errors?.lastName ? true : false}
							helperText={errors?.lastName || ""}
							value={formFields.lastName}
							onChange={handleFieldChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DesktopDatePicker
								label="Date of Birth"
								inputFormat="MM/DD/YYYY"
								value={formFields.dateOfBirth}
								onChange={handleDateChange}
								renderInput={(params) => (
									<TextField
										name="Date of Birth"
										id="dateOfBirth"
										{...params}
										error={errors?.dateOfBirth ? true : false}
										helperText={errors?.dateOfBirth || ""}
										value={formFields.dateOfBirth}
										fullWidth
									/>
								)}
							/>
						</LocalizationProvider>
					</Grid>
					<Grid item xs={6}>
						<FormControl fullWidth error={errors?.gender || false}>
							<InputLabel id="gender-label">Gender</InputLabel>
							<Select
								labelId="gender-label"
								id="gender"
								name="gender"
								label="Gender"
								variant="outlined"
								fullWidth
								error={errors?.gender ? true : false}
								value={formFields.gender}
								onChange={handleFieldChange}
							>
								<MenuItem value="m">Male</MenuItem>
								<MenuItem value="f">Female</MenuItem>
							</Select>
							{errors?.gender ? (
								<FormHelperText>{errors?.gender}</FormHelperText>
							) : null}
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="homeAddress"
							name="Home Address"
							label="Home Address"
							variant="outlined"
							fullWidth
							error={errors?.homeAddress ? true : false}
							helperText={errors?.homeAddress || ""}
							value={formFields.homeAddress}
							onChange={handleFieldChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<Autocomplete
							id="country"
							fullWidth
							options={countriesArray}
							autoHighlight
                            defaultValue={countryValue}
                            isOptionEqualToValue={(option, value) => option.code === countryValue.code}
							getOptionLabel={(option) => option.label}
							onChange={handleFieldChange}
							renderOption={(props, option) => (
								<Box
									component="li"
									sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
									{...props}
								>
									<img
										loading="lazy"
										width="20"
										src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
										srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
										alt=""
									/>
									{option.label} ({option.code})
								</Box>
							)}
							renderInput={(params) => {
								return (
									<TextField
										{...params}
										label="Choose a country"
										inputProps={{
											...params.inputProps,
											autoComplete: "new-password", // disable autocomplete and autofill
										}}
										id="country"
										name="country"
										variant="outlined"
										fullWidth
										error={errors?.country ? true : false}
										helperText={errors?.country || ""}
										value={formFields.country}
										onChange={(event) => handleFieldChange(event, params)}
									/>
								);
							}}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="zipCode"
							name="zipCode"
							label="Zip Code"
							variant="outlined"
							fullWidth
							error={errors?.zipCode ? true : false}
							helperText={errors?.zipCode || ""}
							value={formFields.zipCode}
							onChange={handleFieldChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							id="contactNumber"
							name="contactNumber"
							label="Contact Number"
							variant="outlined"
							fullWidth
							error={errors?.contactNumber ? true : false}
							helperText={errors?.contactNumber || ""}
							value={formFields.contactNumber}
							onChange={handleFieldChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="emailAddress"
							name="emailAddress"
							label="Email Address"
							variant="outlined"
							fullWidth
							error={errors?.emailAddress ? true : false}
							helperText={errors?.emailAddress || ""}
							value={formFields.emailAddress}
							onChange={handleFieldChange}
						/>
					</Grid>
				</Grid>
			),
		},
		{
			label: "Terms and Condition",
			description: `Try out different ad text to see what brings in the most customers,
					and learn how to enhance your ads using features like ad extensions.
					If you run into any problems with your ads, find out how to tell if
					they're running and how to resolve approval issues.`,
			component: (
				<Grid container spacing={1}>
					<Grid item xs={12}>
						<Box
							sx={{
								height: "300px",
								overflow: "scroll",
								overflowX: "hidden",
								textAlign: "justify",
								padding: "15px",
							}}
						>
							<Typography variant="body1">
								Praesent sapien massa, convallis a pellentesque nec, egestas non
								nisi. Vestibulum ante ipsum primis in faucibus orci luctus et
								ultrices posuere cubilia Curae; Donec velit neque, auctor sit
								amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem
								ut libero malesuada feugiat. Sed porttitor lectus nibh.
								Curabitur aliquet quam id dui posuere blandit. Donec
								sollicitudin molestie malesuada. Proin eget tortor risus. Cras
								ultricies ligula sed magna dictum porta. Cras ultricies ligula
								sed magna dictum porta.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<FormControl
							component="fieldset"
							sx={{
								margin: "10px 0",
								...(typeof isTermsAndConditionAccepted === "boolean" &&
								!isTermsAndConditionAccepted
									? {
											color: red[800],
											"&.Mui-checked": {
												color: red[600],
											},
									  }
									: {}),
							}}
							error={
								typeof isTermsAndConditionAccepted === "boolean" &&
								!isTermsAndConditionAccepted
							}
						>
							<FormGroup aria-label="position" row>
								<FormControlLabel
									value={true}
									control={<Checkbox />}
									label="I Accept the terms and condition"
									labelPlacement="end"
									checked={isTermsAndConditionAccepted ? true : false}
									onChange={() =>
										setIsTermsAndConditionAccepted((prevValue) => !prevValue)
									}
								/>
							</FormGroup>
							{typeof isTermsAndConditionAccepted === "boolean" &&
								!isTermsAndConditionAccepted && (
									<FormHelperText>
										Please read and accept the terms and condition
									</FormHelperText>
								)}
						</FormControl>
					</Grid>
				</Grid>
			),
		},
	];
	return (
		<div>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((step, index) => {
					let otherOptions = {};

					if (skipSteps[index]) {
						otherOptions.StepIconComponent = RemoveIcon;
					}
					return (
						<Step key={step.label}>
							<StepLabel
								{...otherOptions}
								optional={
									index === 3 ? (
										<Typography variant="caption">Last step</Typography>
									) : null
								}
							>
								<h5>{step.label}</h5>
							</StepLabel>
							<StepContent>
								{step.component}
								<Box sx={{ mb: 2 }}>
									<div>
										<Button
											variant="contained"
											onClick={() => handleNext(index)}
											sx={{ mt: 1, mr: 1 }}
										>
											{index === steps.length - 1 ? "Finish" : "Continue"}
										</Button>
										<Button
											disabled={index === 0}
											onClick={() => handleBack(index)}
											sx={{ mt: 1, mr: 1 }}
										>
											Back
										</Button>
									</div>
								</Box>
							</StepContent>
						</Step>
					);
				})}
			</Stepper>
			{/* {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Button onClick={() => handleBack(primaryStep)} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )} */}
		</div>
	);
};

export default FormStepper;
