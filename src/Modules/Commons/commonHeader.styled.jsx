import styled from "styled-components";
import { ColorPallets, devices, fontStyle } from "../../utils/constants/css.constants";

export const CommonHeaderContainer = styled.div`
	min-height: 40vh;
	background-color: ${ColorPallets.highlights};
    font-family: ${fontStyle.primary};
	* {
		margin: 0;
	}
	h5 {
		font-size: 3vw;
		color: #ffffff85;

		@media ${devices.laptop} {
			font-size: 1.5vw;
		}
	}
	h6 {
		font-size: 3vw;
		color: #ffff;
		font-weight: lighter;
		@media ${devices.laptop} {
			font-size: 1.2vw;
		}
	}
	h1 {
		font-size: 11vw;
		color: #fff;
        font-weight: bold;
		@media ${devices.laptop} {
			font-size: 4vw;
		}
	}
	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 70px;
	}

	@media ${devices.laptop} {
		padding: 50px 100px;
	}

	@media ${devices.desktopM} {
		padding: 100px 400px;
	}
`;
