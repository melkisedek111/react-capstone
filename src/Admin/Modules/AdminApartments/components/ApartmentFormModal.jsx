import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
	Checkbox,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormHelperText,
	FormLabel,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import axios from "axios";
import GooglePlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from "react-google-places-autocomplete";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
let controller, signal;
const ApartmentFormModal = ({
	addNewApartment,
	addNewApartmentResponse,
	openModal,
	handleCloseModal,
	headerName,
	setIsLoading,
}) => {
	const [errors, setErrors] = useState();
	const [value, setValue] = useState(null);
	const initialFormFields = {
		name: "",
		type: "",
		bedroom: "",
		bathroom: "",
		balcony: "",
		servantRoom: "",
		superArea: "",
		carpetArea: "",
		unitFloor: "",
		location: "",
		price: "",
		images: "",
		video: "",
		description: "",
	};
	const initialAmenities = [
		{
			value: 1,
			label: "Fully-furnished",
			isChecked: false,
		},
		{
			value: 2,
			label: "No Smoking Area",
			isChecked: false,
		},
		{
			value: 3,
			label: "AC rooms",
			isChecked: false,
		},
		{
			value: 4,
			label: "Free Breakfast",
			isChecked: false,
		},
		{
			value: 5,
			label: "Fire Extinguisher",
			isChecked: false,
		},
		{
			value: 6,
			label: "Bathtub",
			isChecked: false,
		},
		{
			value: 7,
			label: "Home Security",
			isChecked: false,
		},
		{
			value: 8,
			label: "Swimming pool",
			isChecked: false,
		},
		{
			value: 9,
			label: "Hight speed Wi-Fi",
			isChecked: false,
		},
		{
			value: 10,
			label: "Gym",
			isChecked: false,
		},
		{
			value: 11,
			label: "Movie theaters/media rooms",
			isChecked: false,
		},
		{
			value: 12,
			label: "Laundry facilities",
			isChecked: false,
		},
		{
			value: 13,
			label: "Smart thermostats",
			isChecked: false,
		},
	];
	const [formFields, setFormFields] = useState(initialFormFields);
	const [amenities, setAmenities] = useState(initialAmenities);
	const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

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

	const handleGeoMap = (event) => {
		setValue(event);
		setFormFields({ ...formFields, location: event.label });

		geocodeByAddress(event.label)
			.then((results) => getLatLng(results[0]))
			.then(({ lat, lng }) => {
				setCoordinates({ lat, lng });
				console.log("Successfully got latitude and longitude", { lat, lng });
			});
	};

	const handleCheckBoxes = (event) => {
		const value = event.target.value;
		const modifiedAmenities = amenities.map((amenity) => {
			if (amenity.value == value) {
				amenity.isChecked = event.target.checked;
			}
			return amenity;
		});

		setAmenities(modifiedAmenities);
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
			name: {
				type: "letter",
				label: "Name",
			},
			type: {
				type: "mixed",
				label: "Type",
			},
			bedroom: {
				type: "number",
				label: "Bedroom",
			},
			bathroom: {
				type: "number",
				label: "Bathroom",
			},
			balcony: {
				type: "number",
				label: "Balcony",
			},
			servantRoom: {
				type: "number",
				label: "Servant Room",
			},
			superArea: {
				type: "number",
				label: "Super Area",
			},
			carpetArea: {
				type: "number",
				label: "Carpet Area",
			},
			unitFloor: {
				type: "number",
				label: "Unit Floor",
			},
			location: {
				type: "mixed",
				label: "Location",
			},
			price: {
				type: "number",
				label: "Price",
			},
			images: {
				type: "mixed",
				label: "Images",
			},
			video: {
				type: "mixed",
				label: "Video",
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
				}
			}
		}
		setErrors(errors);

		return errors;
	};

	const handleSubmit = async () => {
		const errors = handleValidation();

		/* checking for error if no, then submit */
		if (!Object.keys(errors).length) {
			const filterAmenities = amenities.filter((amenity) => amenity.isChecked);
			const imagesJSON = JSON.stringify(formFields.images.split(","));
			await addNewApartment({
				...formFields,
				lat: coordinates?.lat.toString(),
				lng: coordinates?.lng.toString(),
				amenitiesJson: JSON.stringify(filterAmenities),
				imagesJSON,
			});
			/* this will reset all the fields */
			setIsLoading(true);
		}
	};

	useEffect(() => {
		if (addNewApartmentResponse?.isSuccess) {
			const { data } = addNewApartmentResponse;

			setTimeout(() => {
				if (data?.responseType === "success") {
					setFormFields(initialFormFields);
					setAmenities(initialAmenities);
					setCoordinates({ lat: 0, lng: 0 });
					setValue(null);
					handleCloseModal();
				}
			}, 2500);
		}
	}, [addNewApartmentResponse]);

	return (
		<div>
			<Dialog
				open={openModal}
				onClose={handleCloseModal}
				scroll={"body"}
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
				fullWidth
				maxWidth={"md"}
			>
				<DialogTitle id="scroll-dialog-title">{headerName}</DialogTitle>
				<DialogContent dividers style={{ margin: "0" }}>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								id="name"
								name="name"
								label="Apartment Name"
								variant="outlined"
								fullWidth
								error={errors?.name ? true : false}
								helperText={errors?.name || ""}
								value={formFields.name}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControl fullWidth size="small" error={errors?.type || false}>
								<InputLabel id="type-label">Type</InputLabel>
								<Select
									labelId="type-label"
									id="type"
									name="type"
									label="Type"
									variant="outlined"
									fullWidth
									error={errors?.type ? true : false}
									value={formFields.type}
									onChange={handleFieldChange}
									size="small"
								>
									<MenuItem value="Studio">Studio</MenuItem>
									<MenuItem value="Alcove studio">Alcove studio</MenuItem>
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
								{errors?.type ? (
									<FormHelperText>{errors?.type}</FormHelperText>
								) : null}
							</FormControl>
						</Grid>
					</Grid>
					<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
						<Typography variant="h6">Specification</Typography>
						<Divider />
					</Box>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<TextField
								id="bedroom"
								name="bedroom"
								label="Bedroom"
								variant="outlined"
								fullWidth
								error={errors?.bedroom ? true : false}
								helperText={errors?.bedroom || ""}
								value={formFields.bedroom}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="bathroom"
								name="bathroom"
								label="Bathroom"
								variant="outlined"
								fullWidth
								error={errors?.bathroom ? true : false}
								helperText={errors?.bathroom || ""}
								value={formFields.bathroom}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="balcony"
								name="balcony"
								label="balcony"
								variant="outlined"
								fullWidth
								error={errors?.balcony ? true : false}
								helperText={errors?.balcony || ""}
								value={formFields.balcony}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="servantRoom"
								name="servantRoom"
								label="Servant Room"
								variant="outlined"
								fullWidth
								error={errors?.servantRoom ? true : false}
								helperText={errors?.servantRoom || ""}
								value={formFields.servantRoom}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="superArea"
								name="superArea"
								label="Super Area"
								variant="outlined"
								fullWidth
								error={errors?.superArea ? true : false}
								helperText={errors?.superArea || ""}
								value={formFields.superArea}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="carpetArea"
								name="carpetArea"
								label="Carpet Area"
								variant="outlined"
								fullWidth
								error={errors?.carpetArea ? true : false}
								helperText={errors?.carpetArea || ""}
								value={formFields.carpetArea}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={4}>
							<TextField
								id="unitFloor"
								name="unitFloor"
								label="Unit Floor"
								variant="outlined"
								fullWidth
								error={errors?.unitFloor ? true : false}
								helperText={errors?.unitFloor || ""}
								value={formFields.unitFloor}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
					</Grid>
					<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
						<Typography variant="h6">Apartment Description</Typography>
						<Divider />
					</Box>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								id="description"
								name="description"
								label="Description"
								variant="outlined"
								fullWidth
								error={errors?.description ? true : false}
								helperText={errors?.description || ""}
								value={formFields.description}
								onChange={handleFieldChange}
								multiline
								rows={6}
							/>
						</Grid>
					</Grid>
					<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
						<Typography variant="h6">Amenities</Typography>
						<Divider />
					</Box>
					<FormControl component="fieldset">
						<FormLabel component="legend">Choice at least one</FormLabel>
						<FormGroup aria-label="position" row>
							{amenities.map((amenity) => (
								<FormControlLabel
									key={amenity.value}
									value={amenity.value}
									control={<Checkbox />}
									label={amenity.label}
									labelPlacement="end"
									onChange={handleCheckBoxes}
									isChecked={amenities.isChecked}
								/>
							))}
						</FormGroup>
					</FormControl>
					<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
						<Typography variant="h6">Location and Geo Coordinates</Typography>
						<Divider />
					</Box>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<GooglePlacesAutocomplete
								selectProps={{
									value,
									onChange: handleGeoMap,
								}}
								apiKey="AIzaSyCt5g9NHrv-Cc5JTaQCqKf4GkPWDSGdkNc"
							/>
							{errors?.location ? (
								<FormHelperText error={errors?.location || false}>
									Your location is empty.
								</FormHelperText>
							) : null}
						</Grid>
					</Grid>
					<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
						<Typography variant="h6">Medias</Typography>
						<Divider />
					</Box>
					<Grid container spacing={2}>
						<Grid item xs={6}>
							<TextField
								id="video"
								name="video"
								label="Video"
								variant="outlined"
								fullWidth
								error={errors?.video ? true : false}
								helperText={errors?.video || ""}
								value={formFields.video}
								onChange={handleFieldChange}
								size="small"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField
								id="images"
								name="images"
								label="Image Links"
								variant="outlined"
								fullWidth
								error={errors?.images ? true : false}
								helperText={errors?.images || ""}
								value={formFields.images}
								onChange={handleFieldChange}
								size="small"
							/>
							<FormHelperText>
								Please use (,) to separate multiple links
							</FormHelperText>
						</Grid>
					</Grid>
					<Box sx={{ marginTop: "10px", marginBottom: "20px" }}>
						<Typography variant="h6">Price</Typography>
						<Divider />
					</Box>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								id="price"
								name="price"
								label="Price"
								variant="outlined"
								fullWidth
								error={errors?.price ? true : false}
								helperText={errors?.price || ""}
								value={formFields.price}
								onChange={handleFieldChange}
								size="small"
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
		</div>
	);
};

export default ApartmentFormModal;
