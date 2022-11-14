import styled from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";
export const JoinOurTeamContainer = styled.div`
	font-family: ${fontStyle.primary};
`;

export const MeetTheTeamSection = styled.section`
	background-color: rgba(255, 255, 255, 0.75);
	color: ${ColorPallets.highlights};
	h1 {
		font-size: 7vw;
		margin-bottom: 30px;
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

export const TeamContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	justify-content: center;
`;

export const JoinNowSection = styled.section`
    background-color: ${ColorPallets.highlights};
`;

export const JoinNowContainer = styled.div`
        color: #fff;
	h1 {
		font-size: 7vw;
		margin-bottom: 30px;
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
