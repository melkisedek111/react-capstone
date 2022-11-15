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
export const BookingSection = styled.section`
	padding: 50px 400px 0 400px;
	background-color: rgba(255, 255, 255, 0.75);
	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 20px;
	}

	@media ${devices.desktopM} {
		padding: 50px 400px 50px 400px;
	}
`;

export const BookingContainer = styled.div`
	background-color: ${ColorPallets.highlights};
	padding: 80px 60px 60px 100px;
	font-family: ${fontStyle.primary};
	border-radius: 20px;
	overflow: hidden;
	position: relative;

	h1,
	h6,
	button {
		margin: 40px 0;

		> a {
			text-decoration: none;
			color: #fff;
			:visited,
			:active {
				color: inherit;
			}
		}
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

		@media ${devices.mobileM} {
			display: none;
		}

		@media ${devices.tablet} {
			display: none;
		}

		@media ${devices.laptop} {
			display: block;
		}

		@media ${devices.desktopM} {
		}
	}

	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 40px;
	}

	@media ${devices.laptop} {
		padding: 80px 60px 60px 100px;
	}

	@media ${devices.desktopM} {
		margin-bottom: 30px;
	}
`;
