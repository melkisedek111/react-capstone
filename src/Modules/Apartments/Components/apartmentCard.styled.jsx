import styled from "styled-components";
import { devices, fontStyle } from "../../../utils/constants/css.constants";

export const ApartmentCardContainer = styled.div`
	min-height: 500px;
	max-width: 365px;
	overflow: hidden;
	padding: 10px 0;
    position: relative;
	@media ${devices.mobileM} {
		max-width: 365px;
	}

	@media ${devices.tablet} {
		min-width: 365px;
	}

	@media ${devices.laptop} {
		max-width: 465px;
	}

	@media ${devices.desktopM} {
	}

	@media ${devices.mobileM} {
	}

	@media ${devices.tablet} {
	}

	@media ${devices.laptop} {
	}

	@media ${devices.desktopM} {
	}

	img {
		max-width: 100%;
		object-fit: contain;
		vertical-align: middle;
	}
`;

export const ApartmentCardDetails = styled.div`
	font-family: ${fontStyle.primary};
	background-color: #fff;
	border-radius: 6px;
	border: 0.5px solid lightgrey;
	padding: 10px 20px;
    position: absolute;
    display: block;
    width: 100%;
    bottom: 10px;

	> div:nth-child(1) {
		display: flex;
		justify-content: space-between;
        border-bottom: 0.5px solid lightgrey;
		h6 {
			font-weight: lighter;
		}
        padding: 10px 0;
	}

	> div:nth-child(2) {
		h1 {
			font-weight: bold;
            margin: 0;
            padding: 10px 0;
			@media ${devices.mobileM} {
				font-size: 8vw;
			}

			@media ${devices.tablet} {
			}

			@media ${devices.laptop} {
				font-size: 2vw;
			}
		}
		> div {
			display: grid;
			justify-content: space-between;
			grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            gap: 20px;
			color: #8992a4;
            border-bottom: 0.5px solid lightgrey;
			> div {
                h6 {
                    padding: 10px;
                }
				h6,
				svg {
                    font-weight: lighter;
                    margin: 0;
					@media ${devices.mobileM} {
						font-size: 17px;
					}

					@media ${devices.tablet} {
						font-size: 17px;
					}

					@media ${devices.laptop} {
						font-size: 20px;
					}

					@media ${devices.desktopM} {
					}
				}
				display: flex;
				justify-content: center;
                align-items: center;
			}
		}
	}
    > div:nth-child(3) {
        div {
            text-align: center;
        }
        h6 {
            text-align: center;
            font-weight: lighter;
            margin: 10px 0;
            vertical-align: middle;
        }
    }
`;
