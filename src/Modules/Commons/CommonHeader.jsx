import React from "react";
import { CommonHeaderContainer } from "./commonHeader.styled.jsx";

const CommonHeader = ({ text, subtext }) => {
	return (
		<CommonHeaderContainer>
            <h5>Utopia.gov Property</h5>
			<h1>{text}</h1>
			<h6>{subtext || ""}</h6>
		</CommonHeaderContainer>
	);
};

export default CommonHeader;
