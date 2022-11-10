import styled, { css } from "styled-components";
// import { devices, ColorPallets } from "../../utils/constants/css.constants";
import { ColorPallets, devices, fontStyle } from "../../utils/constants/css.constants";

export const NavbarContactContainer = styled.div`
	border-bottom: 0.5px solid #ffffff91;
	> div {
		padding: 20px 235px;
		display: grid;
		grid-template-columns: 1fr 1fr 2fr;
		font-family: ${fontStyle.primary};
		align-items: center;
		justify-content: center;
		color: #ffffff91;

		@media ${devices.mobileM} {
			grid-template-columns: 1fr;
			padding: 20px;
		}

		@media ${devices.tablet} {
			grid-template-columns: 1fr 1fr 1fr;
			padding: 20px;
			> div {
				justify-content: center;
			}
		}

		@media ${devices.tablet} {
			padding: 20px 235px;
		}

		> div {
			display: flex;
			align-items: center;
			svg {
				margin: 10px;
			}
			> p {
				margin: 0;
			}
		}
		> div:last-child {
			justify-content: right;

			> input {
				background-color: transparent;
				border: 0.5px solid #ffffff91;
				font-family: ${fontStyle.primary};
				height: 40px;
				width: 250px;
				padding: 10px 15px;
				border-radius: 40px;
				color: #ffffff91;
				&:focus {
					outline: none;
				}
			}
		}
	}
`;

export const NavbarContainer = styled.div`
	background-color: #3b3486;
`;

export const Navbar = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	justify-content: space-between;
	align-items: center;
	padding: 20px 235px;
	> img {
		width: 300px;
		height: 200px;
		object-fit: cover;
		border-radius: 20px;
	}
	> div {
		text-align: right;

		> button {
			color: #fff;
			height: 60px;
			width: 150px;
			border: 1px solid #fff;
			border-radius: 15px;
		}
	}

	@media ${devices.mobileM} {
		display: none;
	}

	@media ${devices.tablet} {
		display: none;
	}
`;

export const NavbarLinks = styled.ul`
	text-decoration: none;
	list-style: none;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0;
	font-family: ${fontStyle.primary};
	color: #fff;
	position: relative;
	padding: 0;

	@media ${devices.mobileM} {
		display: flex;
		flex-direction: column;
		position: absolute;
		background-color: #fff;
		color: ${ColorPallets.highlights};
		width: 100%;
		z-index: 10;
		top: 0;
		> li {
			display: block;
			margin: 15px 0;
			border-bottom: 0.5 solid #000;

			&:hover {
				background-color: ${ColorPallets.highlights};
				color: #fff;
			}
		}
	}
`;

export const NavbarResponsive = styled.div`
	
	display: flex;
	justify-content: space-between;
	align-items: center;
	svg {
		color: #fff;
		font-size: 50px;
		padding-left: 20px;
	}
	> div {
		padding-right: 20px;
	}
	@media ${devices.mobileM} {
		display: flex;
		position: relative;
	}
	@media ${devices.tablet} {
		display: flex;
		position: relative;
	}
	@media ${devices.laptop} {
		display: none;
	}
`;
