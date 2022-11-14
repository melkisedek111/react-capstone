import styled, { css } from "styled-components";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../../utils/constants/css.constants";

export const TeamCardContainer = styled.div`
    h4, h6 {
        text-align: center;
    }
    h4 {
        margin: 20px 0;
    }
    h6 {
        margin-bottom: 20px;
    }
    background-color: #fff;
`;

export const ImageWithIconContainer = styled.div`
	background-image: url(${(props) => props.imageUrl});
	background-repeat: no-repeat;
	background-size: cover;
	height: 376px;
	width: 360px;
	max-height: 376px;
	max-width: 360px;
    position: relative;

    > div {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: #fff;
        svg {
            color: ${ColorPallets.highlights};
            margin: 15px;
            font-size: 25px;
        }
    }
`;
