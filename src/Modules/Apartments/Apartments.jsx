import { Apartment } from "@mui/icons-material";
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Pagination,
	Select,
	Stack,
	TextField,
} from "@mui/material";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useGetApartmentByTypeMutation } from "../../redux/api/apartment.api.js";
import CommonBooking from "../Commons/CommonBooking.jsx";
import CommonHeader from "../Commons/CommonHeader.jsx";
import Loading from "../Loading/Loading.jsx";
import SnackbarAlert from "../Snackbar/SnackbarAlert.jsx";
import {
	ApartmentCards,
	ApartmentsContainer,
	ApartmentsHeading,
	ApartmentsList,
	ApartmentsSection,
	HowsItWorkSection,
	SearchContainer,
	WorkCardLists,
} from "./apartments.styled.jsx";
import ApartmentCard from "./Components/ApartmentCard.jsx";
import WorkCard from "./Components/WorkCard.jsx";
import { useGetApartments } from "./hooks/useGetApartments.jsx";

const Apartments = () => {
	const { filteredApartments, getFilteredApartments } = useGetApartments();
	const {
		apartments,
		getApartmentByType,
		isApartmentsLoading,
		apartmentCount,
	} = useGetApartments();
	const [filterForms, setFilterForm] = useState({
		name: "",
		location: "",
		type: "",
		price: "",
	});

	const navigate = useNavigate();

	/**
	 * DOCUMENT: This function is used to navigate to the apartment detail page. <br>
	 * Triggered: when clicking the card <br>
	 * Last Updated Date: November 23, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleNavigate = (id) => {
		navigate(`/apartments/${id}`);
	};

	/**
	 * DOCUMENT: This function is used search based on the filters. <br>
	 * Triggered: when clicking the search <br>
	 * Last Updated Date: November 23, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFilter = () => {
		getApartmentByType({ ...filterForms });
	};

	/**
	 * DOCUMENT: This function is used to get the apartments detail apartment by pagination. <br>
	 * Triggered: when clicking the pagination <br>
	 * Last Updated Date: November 23, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handlePage = (event, pageNumber) => {
		getApartmentByType({ page: pageNumber, ...filterForms });
	};

	/**
	 * DOCUMENT: This function is used to handle value of each fields. <br>
	 * Triggered: when insert value on the fields <br>
	 * Last Updated Date: November 23, 2022
	 * @function
	 * @memberOf Form
	 * @param {} - {}
	 * @author Mel
	 */
	const handleFieldChange = (event) => {
		let {
			target: { value, name, id },
		} = event;

		setFilterForm({ ...filterForms, [id || name]: value });
	};

	return (
		<ApartmentsContainer>
			<CommonHeader text="Our Apartments" />
			<ApartmentsSection>
				<SearchContainer>
					<Grid container spacing={1}>
						<Grid item xs={12} md={3}>
							<TextField
								id="name"
								name="name"
								label="Name"
								variant="outlined"
								fullWidth
								value={filterForms.name}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={12} md={4}>
							<TextField
								id="location"
								name="location"
								label="Location"
								variant="outlined"
								fullWidth
								value={filterForms.location}
								onChange={handleFieldChange}
							/>
						</Grid>
						<Grid item xs={12} md={2}>
							<FormControl fullWidth>
								<InputLabel id="label-type">Type</InputLabel>
								<Select
									labelId="label-type"
									id="type"
									name="type"
									label="Apartment Type"
									fullWidth
									value={filterForms.type}
									onChange={handleFieldChange}
								>
									<MenuItem value="">None</MenuItem>
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
							</FormControl>
						</Grid>
						<Grid item xs={12} md={2}>
							<FormControl fullWidth>
								<InputLabel id="price">Price</InputLabel>
								<Select
									labelId="price"
									id="price"
									name="price"
									label="Price"
									fullWidth
									value={filterForms.price}
									onChange={handleFieldChange}
								>
									<MenuItem value="">None</MenuItem>
									<MenuItem value="1,5">1M - 5M</MenuItem>
									<MenuItem value="5,10">5M - 10M</MenuItem>
									<MenuItem value="10, 20">10M - 20M</MenuItem>
									<MenuItem value="20, 50">20M - 50M</MenuItem>
									<MenuItem value="50,up">50M and up</MenuItem>
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={1}>
							<Button variant="contained" fullWidth onClick={handleFilter}>
								Search
							</Button>
						</Grid>
					</Grid>
				</SearchContainer>

				{apartments.length ? (
					<ApartmentCards>
						<ApartmentsHeading>
							<h2>Apartments</h2>
						</ApartmentsHeading>
						<ApartmentsList>
							{apartments.map((data) => (
								<ApartmentCard
									key={data.id}
									data={data}
									handleNavigate={handleNavigate}
								/>
							))}
						</ApartmentsList>
						<Box
							sx={{
								marginTop: "30px",
								width: "100%",
								display: "flex",
								alignContent: "center",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Pagination
								count={apartmentCount}
								variant="outlined"
								shape="rounded"
								boundaryCount={2}
								onChange={(event, pageNumber) => handlePage(event, pageNumber)}
							/>
						</Box>
					</ApartmentCards>
				) : (
					<ApartmentsHeading>
						<h5>Apartments</h5>
						<h1>No Apartments available.</h1>
					</ApartmentsHeading>
				)}
			</ApartmentsSection>
			<HowsItWorkSection>
				<ApartmentsHeading>
					<h1>How it work.</h1>
				</ApartmentsHeading>
				<WorkCardLists>
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
					<WorkCard
						title="Close the deal"
						subtitle="Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod."
						src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/icon-deal.png"
					/>
				</WorkCardLists>
			</HowsItWorkSection>
			<CommonBooking />
			<Loading isOpen={isApartmentsLoading} />
		</ApartmentsContainer>
	);
};

export default Apartments;
