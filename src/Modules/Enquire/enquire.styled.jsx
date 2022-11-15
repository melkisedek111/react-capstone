import styled, { css } from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";
const DefaultButtonStyle = css`
	background-color: ${ColorPallets.highlights};
	color: #fff;
	&:hover {
		background-color: #7743db;
		color: #fff;
	}
`;

export const EnquireContainer = styled.div``;

export const EnquireDetailsAndFormContainer = styled.div`
    font-family: ${fontStyle.primary} !important;

    h2 {
        text-align: center;
        margin: 30px;
        color: ${ColorPallets.highlights};
    }

	button {
		${DefaultButtonStyle};
		height: 50px;
	}

	@media ${devices.mobileM} {
		padding: 20px;
	}

	@media ${devices.tablet} {
		padding: 20px;
	}

	@media ${devices.laptop} {
		padding: 100px 100px;
	}

	@media ${devices.desktopM} {
		padding: 100px 400px;
	}
`;

export const EnquireDetailsAndFormSection = styled.section`
	background-color: rgba(255, 255, 255, 0.8);
`;
