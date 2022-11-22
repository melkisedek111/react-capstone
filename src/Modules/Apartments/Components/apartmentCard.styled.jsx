import styled from "styled-components";
import { devices, fontStyle } from "../../../utils/constants/css.constants";

export const ApartmentCardContainer = styled.div`
	min-height: 500px;
	max-width: 365px;
	overflow: hidden;
	padding: 10px 0;
    position: relative;
	cursor: pointer;
	@media ${devices.mobileM} {
		min-width: 365px;
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
		min-height: 350px;
		object-fit: fill;
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
    bottom: 0;
	min-height: 240px;

	> div:nth-child(1) {
		display: flex;
		justify-content: space-between;
        border-bottom: 0.5px solid lightgrey;
		h6 {
			font-weight: lighter;
		}
		> h6:nth-child(2){
			font-weight: bold;
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
				font-size: 4vw;
			}

			@media ${devices.laptop} {
				font-size: 4vw;
			}
			@media ${devices.desktopM} {
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
						font-size: 15px;
					}

					@media ${devices.tablet} {
						font-size: 15px;
					}

					@media ${devices.laptop} {
						font-size: 18px;
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


export const CardLinkContainer = styled.div`
	text-decoration: none;
	color: inherit;
`;