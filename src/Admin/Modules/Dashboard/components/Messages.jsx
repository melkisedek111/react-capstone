import moment from "moment";
import React, { useEffect, useState } from "react";
import { useGetMessagesQuery } from "../../../../redux/api/contactUs.api.js";
import TableData from "../../TableData/TableData.jsx";

const messageColumns = [
    {
        name: 'Name',
        selector: row => row.name,
    },
    {
        name: 'Email Address',
        selector: row => row.emailAddress,
    },
    {
        name: 'Contact Number',
        selector: row => row.contactNumber,
    },
    {
        name: 'Subject',
        selector: row => row.subject,
    },
    {
        name: 'Message',
        selector: row => row.messageBody,
        wrap: true
    },
    {
        name: 'Created At',
        selector: row => moment(row.createdAt).format("LLLL"),
    },
];
const Messages = () => {
	const [messages, setMessage] = useState([]);
	const getMessages = useGetMessagesQuery();

	useEffect(() => {

		if(getMessages?.data !== undefined){
			const { result } = getMessages.data;
			if(result?.messageData){
				setMessage(result?.messageData);
			}
		}
		
	}, [getMessages]);
	return (
		<div>
			<TableData
				title="Messages"
				data={messages}
				columns={messageColumns}
				searchable={"name"}
				searchBy={"Search for Name"}
			/>
		</div>
	);
};

export default Messages;
