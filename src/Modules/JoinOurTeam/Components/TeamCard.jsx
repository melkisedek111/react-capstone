import React from "react";
import { ImageWithIconContainer, TeamCardContainer } from "./teamCard.styled.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const TeamCard = ({imageUrl, name, position}) => {
	return (
		<TeamCardContainer>
			<ImageWithIconContainer imageUrl={imageUrl}>
				<div>
					<FacebookIcon />
					<TwitterIcon />
					<LinkedInIcon />
				</div>
			</ImageWithIconContainer>
            <h4>{name}</h4>
            <h6>{position}</h6>
		</TeamCardContainer>
	);
};

export default TeamCard;
