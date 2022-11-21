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

const DefaultHeadingStyle = css`
	font-size: 9vw;
	margin-bottom: 30px;
	@media ${devices.laptop} {
		font-size: 3vw;
	}
`;

export const ApartmentContainer = styled.div`
	font-family: ${fontStyle.primary};
`;

export const ApartmentHeadingSection = styled.section`
	background-color: ${ColorPallets.highlights};
	min-height: 30vh;
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
		padding: 30px 400px;
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
			min-width: 250px;
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
				margin-right: 10px;
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
	background-color: rgba(255, 255, 255, 0.75);
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
		padding: 0 400px;
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
	display: grid;
	grid-template-columns: 1fr 1.3fr;
	font-family: ${fontStyle.primary};
	background-color: ${ColorPallets.highlights};

	> div:nth-child(1) {
		* {
			margin: 0;
		}

		h1 {
			color: #fff;
			${DefaultHeadingStyle};
		}

		p {
			color: #ffffff85;
		}
	}

	> div:nth-child(2) {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		padding: 0 50px;
		gap: 10px;
		> div {
			background-color: #f5f8fe;
			padding: 30px 20px;
			margin: 0 10px;

			h6:nth-child(1) {
				font-weight: lighter;
				margin-bottom: 30px;
			}
		}
		@media ${devices.mobileM} {
			grid-template-columns: 1fr;
		}

		@media ${devices.tablet} {
			padding: 10px;
			grid-template-columns: 1fr 1fr 1fr;
		}

		@media ${devices.laptop} {
			padding: 0 50px;
		}
	}

	@media ${devices.mobileM} {
		padding: 20px;
		grid-template-columns: 1fr;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 50px 100px;
		grid-template-columns: 1fr 1.3fr;
	}

	@media ${devices.desktopM} {
		padding: 50px 400px;
	}
`;

export const ApartmentAmenitiesSection = styled.section`
	background-color: rgba(255, 255, 255, 0.75);
`;

export const ApartmentAmenitiesContainer = styled.div`
	font-family: ${fontStyle.primary};
	h1 {
		color: ${ColorPallets.highlights};
		${DefaultHeadingStyle};
	}

	> div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;

		> div {
			display: flex;
			align-items: center;
			color: ${ColorPallets.highlights};
			margin: 0 20px 10px 20px;
			padding: 20px;
			svg {
				font-size: 2.5vw;
			}
			h6 {
				font-weight: lighter;
				font-size: 20px;
				margin: 0;
				margin-left: 10px;
			}

			@media ${devices.mobileM} {
				svg {
					font-size: 5vw;
				}
			}

			@media ${devices.tablet} {
				svg {
					font-size: 2.5vw;
				}
			}
		}

		@media ${devices.mobileM} {
			grid-template-columns: 1fr;
		}

		@media ${devices.tablet} {
			grid-template-columns: 1fr 1fr 1fr;
		}
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

export const ApartmentLocationSection = styled.section`
	background-color: ${ColorPallets.highlights};
`;

export const ApartmentLocationContainer = styled.div`
	min-height: 40vh;
	position: relative;

	h1 {
		color: #fff;
		${DefaultHeadingStyle};
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

export const SimilarApartmentSection = styled.section`
	background-color: rgba(255, 255, 255, 0.75);
`;

export const SimilarApartmentContainer = styled.div`
	h1 {
		color: ${ColorPallets.highlights};
		${DefaultHeadingStyle};
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

export const ChartSection = styled.section`
	background-color: rgba(255, 255, 255, 0.75);
`;

export const ChartContainer = styled.div`
	h1 {
		color: ${ColorPallets.highlights};
		${DefaultHeadingStyle};
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
