import styled from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";

export const FooterSection = styled.section`
	padding: 20px 400px;
	padding-top: 250px;
	background-color: rgba(255, 255, 255, 0.75);
	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 50px;
	}

	@media ${devices.desktopM} {
        padding: 20px 400px;
	}
`;

export const FooterContainer = styled.div`
	font-family: ${fontStyle.primary};
	color: ${ColorPallets.highlights};
	h6 {
		font-weight: bolder;
		font-size: 15px;
	}

	p {
		/* font-weight: lighter; */
		margin: 30px 0px;
		font-size: 12px;
	}
`;

export const SubscriberFormContainer = styled.div`
	height: 65px;
	margin-top: 30px;
	display: flex;
	flex-wrap: wrap;
	input {
		/* width: 260px; */
		height: inherit;
		border-radius: 10px;
		font-family: ${fontStyle.primary};
		border: 0.5px solid ${ColorPallets.highlights};
		padding: 0 15px;

		:active,
		:focus {
			outline: none;
			border: 0.5px solid ${ColorPallets.highlights};
		}
	}

	button {
		height: inherit;
		/* width: 165px; */
		border-radius: 10px;
		margin-left: 10px;
		background-color: ${ColorPallets.highlights};
		color: #fff;
		border: none;

		@media ${devices.mobileM} {
			margin-left: 0;
            margin-top: 10px;
		}

		@media ${devices.tablet} {
			margin-left: 10px;
            margin-top: 0;
		}

	}
`;
