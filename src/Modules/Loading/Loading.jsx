import React from "react";
import { Backdrop } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import LoadingSpinner from "../../assets/spinner/loading_a.svg";

const Loading = ({isOpen}) => {
	return (
		<Backdrop
			sx={{
				color: "#fff",
				zIndex: (theme) => theme.zIndex.drawer + 1000,
				overflowY: "hidden",
			}}
			open={isOpen}
		>
			<img src={LoadingSpinner} />
		</Backdrop>
	);
};

export default Loading;
