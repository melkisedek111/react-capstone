import styled, { css} from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";

const DefaultButtonStyle = css`
	background-color: ${ColorPallets.highlights};;
	color: #fff;
	&:hover {
		background-color: #7743db;
		color: #fff;
	}
`;

export const ContactUsContainer = styled.div`
    font-family: ${fontStyle.primary} !important;
`;

export const ContactFormSection = styled.section`
	background-color: rgba(255, 255, 255, 0.8);
`;

export const ContactFormContainer = styled.div`
	/* min-height: 100vh; */
    button {
        ${DefaultButtonStyle};
        height: 50px;
    }
	h2 {
		text-align: center;
		margin-bottom: 30px;
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

export const GetInTouchContainer = styled.div`
	height: 100%;
	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
        margin-top: 30px;
		> div {
			display: flex;
			align-items: center;
			gap: 20px;
			margin-bottom: 50px;
			h6 {
				font-weight: lighter;
			}

			h4 {
				margin-bottom: 10px;
			}
		}
	}
`;
