import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackbarAlert = ({ isOpen , message, responseType, setIsMessage}) => {
	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setIsMessage(false);
	};

	useEffect(() => {
		if(isOpen){
			setIsMessage(isOpen);
		}
	}, [isOpen])

	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={6000}
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
		>
			<Alert onClose={handleClose} severity={responseType}>{message}</Alert>
		</Snackbar>
	);
};

export default SnackbarAlert;
