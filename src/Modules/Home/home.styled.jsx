import styled, { css } from "styled-components";
import { ColorPallets, fontStyle } from "../../utils/constants/css.constants";

const DefaultButtonStyle = css`
	background-color: #fff;
	color: ${ColorPallets.highlights};
	&:hover {
		background-color: #7743db;
		color: #fff;
	}
`;

const InvertedButtonStyle = css`
	color: #fff;
	background-color: ${ColorPallets.highlights};
	&:hover {
		background-color: #fff;
		color: #7743db;
		border: 0.5px solid #7743db;
	}
`;

const displayFlexA = css`
	display: flex;
	align-items: center;
`;

export const HomeContainer = styled.div`
	scroll-behavior: smooth;
	will-change: transform;
`;

export const MainContainer = styled.main`
	padding: 0 235px;
	padding-top: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	overflow: hidden;

	> img {
		position: absolute;
		right: 0;
	}
`;

export const MainContainerDescription = styled.div`
	> h1 {
		font-family: ${fontStyle.primary};
		font-size: 70px;
		color: #fff;
		font-weight: bolder;
	}
`;

export const ChipContainer = styled.div`
	${displayFlexA}
	background-color: rgba(255, 255, 255, 0.20);
	border-radius: 30px;
	padding: 10px 30px;
	max-width: 600px;
	> h5 {
		background-color: #fcfdf2;
		padding: 10px 15px;
		border-radius: 20px;
		font-size: 15px;
		margin-right: 15px;
	}

	> h6 {
		color: #fff;
	}
	> * {
		margin: 0;
	}
`;

export const BackgroundContainer = styled.div`
	background-color: ${ColorPallets.highlights};
	padding-top: 70px;
	/* rgb(59, 52, 134, 0.85); */
`;

export const SubDescription = styled.div`
	margin-top: 100px;
	padding-right: 250px;
	margin-bottom: 70px;
	> p {
		font-family: ${fontStyle.primary};
		font-size: 15px;
		color: #ffffff85;
		margin-bottom: 50px;
	}
	> button {
		${DefaultButtonStyle};
		width: 230px;
		height: 60px;
		border-radius: 10px;
	}
`;

export const FeaturedInformation = styled.section`
	height: 100vh;
	padding: 50px 235px 0 235px;
`;

export const InfoOneContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	> div {
		padding: 50px;
	}
	> div:first-of-type {
		font-family: ${fontStyle.primary};
		background-color: ${ColorPallets.highlights};

		h1 {
			color: #fff;
			font-weight: bold;
		}
		> button {
			width: 230px;
			height: 60px;
			border-radius: 10px;
			font-size: 15px;
			margin-top: 30px;
			${DefaultButtonStyle};
		}
	}

	div:nth-child(2) {
		> h5 {
			font-size: 25px;
			margin-bottom: 50px;
		}
		> h6 {
			font-weight: lighter;
			font-size: 20px;
			line-height: 30px;
		}
	}
`;

export const InformationCardContainer = styled.div`
	padding-top: 20px;

	button {
		font-family: ${fontStyle.primary};
	}
`;

export const FeaturedFacilitiesSection = styled.section`
	padding: 70px 235px 0 235px;
	height: 100vh;
	img {
		height: 800px;
		max-height: 800px;
		display: block;
		margin: 0 auto;
	}
`;

export const FeaturedFacilitiesDescription = styled.div`
	padding: 60px;
	font-family: ${fontStyle.primary};
	background-color: ${ColorPallets.highlights};
	color: #fff;
	height: 100%;

	h2 {
		font-size: 35px;
		margin-bottom: 20px;
	}
	p {
		color: #ffffff85;
	}
`;

export const IconWithDetailsContainer = styled.div`
	margin-top: 40px;
`;

export const IconWithDetailsBox = styled.div`
	max-width: 180px;
	svg {
		font-size: 60px;
	}
	p {
		font-size: 15px;
	}
	* {
		margin-bottom: 15px;
	}
`;

export const FeaturedPropertiesSection = styled.section`
	min-height: 100vh;
	padding: 50px 235px;
	font-family: ${fontStyle.primary};
	background-color: ${ColorPallets.highlights};
`;

export const FeaturedPropertiesContainer = styled.div`
	padding: 20px;
	text-align: center;
	img {
		width: 100%;
		height: 100%;
	}

	h5 {
		color: #ffffff85;
		margin-top: 20px;
		font-weight: lighter;
	}

	h3 {
		color: #fff;
	}
`;

export const FeaturePropertiesHeading = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	button {
		width: 230px;
		height: 60px;
		border-radius: 10px;
		font-size: 15px;
		${DefaultButtonStyle};
	}

	h1,
	p {
		color: #fff;
	}
`;

export const LeadersSection = styled.section`
	padding: 50px 235px 0 235px;
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 0.75);
`;

export const LeadersContainer = styled.div``;

export const LeadersHeading = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		width: 230px;
		height: 60px;
		border-radius: 10px;
		font-size: 15px;
		${InvertedButtonStyle}
	}

	> div {
		font-family: ${fontStyle.primary};
		* {
			margin: 0;
		}
		p {
			font-weight: lighter;
		}

		h1 {
			margin-bottom: 20px;
		}
	}
`;

export const LeadersCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	justify-content: space-between;
	padding-top: 70px;

	.hvr-underline-from-center::before {
		background: ${ColorPallets.highlights};
	}
`;

export const LeadersCard = styled.div`
	max-width: 320px;
	min-height: 600px;
	text-align: center;
	font-family: ${fontStyle.primary};
	background-color: #fff;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 7px 10px 14px -5px rgba(0, 0, 0, 0.61);
	-webkit-box-shadow: 7px 10px 14px -5px rgba(0, 0, 0, 0.61);
	-moz-box-shadow: 7px 10px 14px -5px rgba(0, 0, 0, 0.61);
	position: relative;
	img {
		width: 100%;
		max-height: 300px;
		object-fit: cover;
	}
	> div {
		padding: 20px 10px;
		h6,
		p {
			margin: 0;
			margin-bottom: 20px;
		}

		h5 {
			font-weight: bold;
		}

		h6 {
			color: #7e899c;
		}

		p {
			font-weight: lighter;
			color: #7e899c;
		}

		> div {
			position: absolute;
			display: flex;
			justify-content: space-around;
			color: ${ColorPallets.highlights};
			bottom: 5%;
			width: 100%;
		}
	}
`;

export const AOSContainer = styled.div``;

export const GoogleMapSection = styled.section`
	/* width: 100vh; */
	height: 100vh;
	position: relative;
	padding: 50px 235px 0 235px;
	background-color: rgba(59, 52, 134, 1);
`;

export const GoogleMapHeading = styled.div`
	text-align: center;
	font-family: ${fontStyle.primary};
	margin-bottom: 50px;
	h1 {
		color: #fff;
	}
	h6 {
		color: #ffffff85;
	}
`;

export const GoogleMapContainer = styled.div``;

export const ProjectLocationContainer = styled.div`
	padding: 0 20px;
	display: grid;
	grid-template-columns: 1fr;
	align-content: space-around;
	justify-content: space-between;
	gap: 30px;
`;

export const ProjectLocationChip = styled.div`
	font-family: ${fontStyle.primary};
	position: relative;
	overflow: hidden;
	> div > div h3 {
		color: ${ColorPallets.highlights};
	}
	> div > div h3 h6 {
		margin: 0;
	}
	> div > div > h6 {
		font-weight: lighter;
	}

	img {
		position: absolute;
		opacity: 0.2;
		width: 50%;
		object-fit: cover;
		right: 0;
	}
`;

export const IconContainer = styled.div`
	display: flex;
	margin-top: 15px;
	color: ${ColorPallets.highlights};
	align-items: center;
	> div {
		display: flex;
		> h6,
		svg {
			margin-left: 10px;
			font-size: 18px;
		}
	}
	> h6 {
		font-weight: bolder;
		text-align: right;
		font-size: 18px;
		margin-left: 30px;
	}
`;

export const CompanyPartnersSection = styled.section`
	padding: 100px 235px;
	background-color: rgba(255, 255, 255, 0.75);
`;

export const CompanyPartnerContainer = styled.div`
	font-family: ${fontStyle.primary};
	h1 {
		font-size: 4rem;
		font-weight: bolder;
		padding-right: 150px;
	}

	h5 {
		font-weight: lighter;
		display: block;
		margin: auto 0;
		font-size: 1.4rem;
	}
`;

export const CompanyPartnerIcons = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	align-items: center;
	justify-content: space-between;
	margin-top: 50px;
	img {
		height: 50px;
		object-fit: contain;
		filter: grayscale(100%);
	}
`;

export const BookingSection = styled.section`
	padding: 50px 235px 0 235px;
`;

export const BookingContainer = styled.div`
	background-color: ${ColorPallets.highlights};
	padding: 80px 60px 60px 100px;
	font-family: ${fontStyle.primary};
	border-radius: 20px;
	overflow: hidden;
	position: relative;
	
	h1, h6, button {
		margin: 40px 0;
	}

	h1 {
		font-size: 3.5rem;
		color: #fff;
		font-weight: bolder;
	}

	h6 {
		font-size: 1rem;
		font-weight: lighter;
		color: #fff;
	}

	button {
		${DefaultButtonStyle};
		width: 230px;
		height: 60px;
		border-radius: 10px;
	}

	img {
		height: 550px;
		object-fit: contain;
		position: absolute;
		top: 2%;
	}
`;
