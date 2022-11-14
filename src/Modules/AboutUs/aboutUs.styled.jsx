import styled, { css } from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";

export const AboutUsContainer = styled.div``;
const DefaultHeadingStyle = css`
	font-size: 7vw;
	margin-bottom: 30px;
	@media ${devices.laptop} {
		font-size: 2vw;
	}
`;

export const StorySection = styled.section`
	background-color: rgba(255, 255, 255, 0.75);
`;

export const StoryContainer = styled.div`
	font-family: ${fontStyle.primary};
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
		padding: 100px 100px;
	}

	@media ${devices.desktopM} {
		padding: 100px 400px;
	}
`;

export const SolutionSection = styled.section`
	background-color: ${ColorPallets.highlights};
`;

export const SolutionContainer = styled.div`
	font-family: ${fontStyle.primary};
	color: #fff;
	> div > div {
		padding: 20px;
	}
	h1 {
		font-size: 7vw;
		margin-bottom: 30px;
		@media ${devices.laptop} {
			font-size: 3vw;
		}
	}

	svg {
		font-size: 50px;
	}

	h3 {
		margin-bottom: 30px;
		text-align: center;
	}

	p {
		text-align: center;
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

export const ProvenSection = styled.section`
	background-color: rgba(255, 255, 255, 0.75);
`;

export const ProvenContainer = styled.div`
	font-family: ${fontStyle.primary};

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

export const ProvenDescription = styled.div`
	color: ${ColorPallets.highlights};
	h1 {
		font-size: 7vw;
		margin-bottom: 30px;
		@media ${devices.laptop} {
			font-size: 3vw;
		}
	}
`;

export const ProvenDetails = styled.div`
	color: #fff;
	h1 {
		font-weight: bold;
		margin-bottom: 20px;
		font-size: 2.5vw;
	}

	> div {
		padding: 30px;
		background-color: ${ColorPallets.highlights};
		margin-bottom: 15px;
	}
`;

export const FormSection = styled.section`
	background-color: rgba(255, 255, 255, 0.9);
`;

export const FormContainer = styled.div`
	font-family: ${fontStyle.primary};

	h1 {
		font-size: 7vw;
		margin-bottom: 30px;
        color: ${ColorPallets.highlights};
		@media ${devices.laptop} {
			font-size: 3vw;
		}
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
