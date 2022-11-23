import React from "react";
import CommonHeader from "../Commons/CommonHeader.jsx";

const NotFound = () => {
	return (
		<div>
			<CommonHeader
				text="Page not found"
				subtext="We're sorry, the page you requested could not be found. You can return the previous page."
			/>
		</div>
	);
};

export default NotFound;
