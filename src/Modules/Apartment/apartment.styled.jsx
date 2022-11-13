import styled, { css } from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";

const DefaultButtonStyle = css`
	background-color: #fff;
	color: ${ColorPallets.highlights};
	&:hover {
		background-color: #7743db;
		color: #fff;
	}
`;

export const ApartmentContainer = styled.div`
	-family: ${fontStyle.primary};
`;

export const ApartmentHeadingSection = styled.section`
	background-color: ${ColorPallets.highlights};
	height: 40vh;
	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 30px 100px;
	}

	@media ${devices.desktopM} {
		padding: 30px 235px;
	}
`;

export const ApartmentHeading = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 50px 0;
	@media ${devices.mobileM} {
		grid-template-columns: 1fr;
	}

	@media ${devices.tablet} {
		grid-template-columns: 1fr 1fr;
	}

	> div:nth-child(1) {
		> div {
			max-width: 300px;
			display: grid;
			grid-template-columns: 1fr 2fr;
			background-color: rgba(255, 255, 255, 1);
			border-radius: 20px;
			vertical-align: middle;
			padding: 7px 15px;
			h6 {
				color: #000;
				margin: auto auto;
			}

			@media ${devices.mobileM} {
				width: 100%;
				margin: 0 auto;
			}
			@media ${devices.tablet} {
				max-width: 300px;
				margin: 0;
			}
		}
		h1 {
			font-size: 11vw;
			color: #fff;
			font-weight: bold;
			@media ${devices.laptop} {
				font-size: 3vw;
			}
		}
		h5 {
			font-size: 3vw;
			color: #ffffff85;
			font-weight: lighter;
			@media ${devices.laptop} {
				font-size: 1vw;
			}
		}

		@media ${devices.mobileM} {
			text-align: center;
		}
		@media ${devices.tablet} {
			text-align: left;
		}
	}

	> div:nth-child(2) {
		justify-self: center;
		> div {
			background-color: rgba(255, 255, 255, 0.3);
			width: 250px;
			height: 85px;
			display: grid;
			padding: 25px;
			grid-template-columns: 1fr 1fr;
			color: #fff;
			* {
				margin: 0;
			}
			h5 {
				font-weight: lighter;
			}
			h4,
			h5 {
				display: block;
				margin: auto auto;
			}
		}

		button {
			color: #fff;
			padding-bottom: 10px;
			background-color: transparent;
			border: none;
			border-bottom: 0.5px solid #fff;
			margin-top: 20px;
		}
	}
`;

export const ApartmentMediaSection = styled.section`
	background-color: #fff;

`;

export const VideoContainer = styled.div`
	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 0 100px;
	}

	@media ${devices.desktopM} {
		padding: 0 235px;
	}
	video {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
		min-height: 50%;
		min-width: 50%;
	}
`;

export const ImageContainer = styled.div``;


export const AboutApartmentContainer = styled.section`

`;
