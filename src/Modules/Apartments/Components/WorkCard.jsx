import React from "react";
import { WorkCardContainer } from "./workCard.styled.jsx";

const WorkCard = ({src, title, subtitle}) => {
	return (
		<WorkCardContainer>
			<img src={src} />

			<h5>{title}</h5>
			<p>{subtitle}</p>
		</WorkCardContainer>
	);
};

export default WorkCard;
