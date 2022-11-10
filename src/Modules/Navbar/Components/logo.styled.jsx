import styled from "styled-components";
import { ColorPallets } from "../../../utils/constants/css.constants";

export const IconContainer = styled.div`
	display: flex;
	align-items: center;
	color: ${props => props?.inverted ? ColorPallets.highlights : "#fff"};
	svg {
		font-size: 70px;
	}
	> div {
		> * {
			margin: 0;
			text-transform: uppercase;
			font-family: "Secular One", sans-serif;
		}
		h1 {
			line-height: 20px;
		}
        h5 {
            text-align: right;
        }
	}
`;