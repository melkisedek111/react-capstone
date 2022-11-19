import moment from "moment";
import React, { useEffect, useState } from "react";
import { useGetInquiriesQuery } from "../../../../redux/api/inquire.api.js";
import TableData from "../../TableData/TableData.jsx";

const Inquiries = () => {
	const [inquiries, setInquiries] = useState([]);
	const getInquires = useGetInquiriesQuery();
	const inquiryColumns = [
		{
			name: "First Name",
			selector: (row) => row.firstName,
		},
		{
			name: "Last Name",
			selector: (row) => row.lastName,
		},
		{
			name: "Home Address",
			selector: (row) => row.homeAddress,
		},
		{
			name: "Email Address",
			selector: (row) => row.emailAddress,
		},
		{
			name: "Contact Number",
			selector: (row) => row.contactNumber,
		},
		{
			name: "Apartment Name",
			selector: (row) => row.apartmentName,
		},
		{
			name: "Created At",
			selector: (row) => moment(row.createdAt).format("LLLL"),
		},
	];

	useEffect(() => {
		if (getInquires?.data !== undefined) {
			const { result } = getInquires.data;
			if (result?.inquiryData) {
				setInquiries(result?.inquiryData);
			}
		}
	}, [getInquires]);
	return (
		<div>
			<TableData
				title="Inquiries"
				data={inquiries}
				columns={inquiryColumns}
				searchable={"firstName"}
				searchBy={"Search for First Name"}
			/>
		</div>
	);
};

export default Inquiries;
