import styled from "styled-components";
import { devices } from "../../../utils/constants/css.constants";


export const PhotoViewerContainer = styled.div`
    /* display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: center; */
    margin: 0 10px;
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
    .image-slider {
        height: 100px;
        width: 200px;
        object-fit: cover;
        align-items: center;
    }
`;