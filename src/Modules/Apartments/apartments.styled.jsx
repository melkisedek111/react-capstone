import styled from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";

export const ApartmentsContainer = styled.main``;

export const ApartmentsSection = styled.section`
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 0.75);
	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 50px 100px;
	}

	@media ${devices.desktopM} {
		padding: 50px 400px;
	}
`;

export const ApartmentsHeading = styled.div`
	color: ${ColorPallets.highlights};
	font-family: ${fontStyle.primary};
	margin-bottom: 30px;

	* {
		margin: 0;
	}
	h5 {
		font-size: 3vw;
		font-weight: lighter;
		@media ${devices.laptop} {
			font-size: 1vw;
		}
	}
	h1 {
		font-size: 9vw;
		@media ${devices.laptop} {
			font-size: 2vw;
		}
	}
`;

export const ApartmentsList = styled.div`
	display: grid;
	gap: 10px;
	> div {
		align-self: center;
		justify-self: center;
	}
	@media ${devices.mobileM} {
		grid-template-columns: 1fr;
		align-items: center;
		justify-content: center;
	}

	@media ${devices.tablet} {
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}

	@media ${devices.laptop} {
		grid-template-columns: 1fr 1fr;
	}

	@media ${devices.desktopM} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export const HowsItWorkSection = styled.div`
	h1 {
		text-align: center;
	}

	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 50px 100px;
	}

	@media ${devices.desktopM} {
		padding: 50px 400px;
	}
`;

export const WorkCardLists = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	@media ${devices.mobileM} {
		grid-template-columns: 1fr;
	}

	@media ${devices.tablet} {
		grid-template-columns: 1fr;
	}

	@media ${devices.laptop} {
		grid-template-columns: 1fr 1fr 1fr;
	}

	@media ${devices.desktopM} {
		grid-template-columns: 1fr 1fr 1fr;
	}
`;


export const ApartmentCards = styled.div`
	margin-bottom: 30px;;
`


export const SearchContainer = styled.div`
	margin-bottom: 30px;
	button {
		height: 100%;
	}
`;