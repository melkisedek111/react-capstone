import React from "react";
import { IconContainer } from "./logo.styled.jsx";
import FoundationRoundedIcon from '@mui/icons-material/FoundationRounded';

const Logo = ({inverted}) => {
	return (
		<IconContainer inverted={inverted} data-aos="zoom-out" data-aos-duration="1000">
			<FoundationRoundedIcon />
			<div>
				<h1>Utopia</h1>
				<h5>.gov</h5>
			</div>
		</IconContainer>
	);
};

export default Logo;
