import styled from "styled-components";
import { devices } from "../../../utils/constants/css.constants";


export const GoogleMapReactContainer = styled.div`
    height: 700px;
    width: 100%;
    overflow: hidden;
    /* position: absolute; */
    /* bottom: 0; */

	@media ${devices.mobileM} {
		margin-top: 20px;
	}

	@media ${devices.tablet} {
		margin-top: 20px;
	}

	@media ${devices.laptop} {
		margin-top: 0;
	}

	@media ${devices.desktopM} {
		margin-top: 0;
	}

`;