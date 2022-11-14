import styled, { css } from "styled-components";
// import { devices, ColorPallets } from "../../utils/constants/css.constants";
import {
	ColorPallets,
	devices,
	fontStyle,
} from "../../utils/constants/css.constants";

const DefaultButtonStyle = css`
	background-color: #fff;
	color: ${ColorPallets.highlights};
	&:hover {
		background-color: #7743db;
		color: #fff;
	}
`;

const NavbarLinksDefault = css`
	> li {
		> a {
			text-decoration: none;
			color: #fff;
			:visited,
			:active {
				color: inherit;
			}
		}
	}
	${(props) =>
		props.isShowLinks &&
		css`
			display: ${(props) => (props.isShowLinks ? "flex" : "none")};
			/* display: flex; */
			flex-direction: column;
			position: absolute;
			background-color: #fff;
			color: ${ColorPallets.highlights};
			width: 100%;
			z-index: 10;
			top: 100%;

			> li {
				.hvr-sweep-to-right::before {
					background: #7743db;
				}
				cursor: pointer;
				text-align: center;
				display: block;
				padding: 15px 0;
				border-bottom: 0.5 solid #000;
				width: 100%;
				height: 100%;
				&:hover:not(:last-child) {
					background-color: ${ColorPallets.highlights};
					color: #fff;
				}

				> a {
					color: red;
					text-decoration: none;
					padding: 0 5px;
				}
			}
		`}
`;

export const NavbarContactContainer = styled.div`
	border-bottom: 0.5px solid #ffffff91;
	> div {
		padding: 20px 400px;
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
			padding: 20px 400px;
			> div {
				justify-content: center;
			}
		}

		@media ${devices.laptop} {
			padding: 20px 400px;
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
	padding: 20px 400px;
	> img {
		width: 300px;
		height: 200px;
		object-fit: cover;
		border-radius: 20px;
	}
	> div {
		text-align: right;

		> button {
			height: 60px;
			width: 150px;
			border: none;
			border-radius: 15px;
			${DefaultButtonStyle};
			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}

	@media ${devices.mobileM} {
		display: none;
	}

	@media ${devices.tablet} {
		display: none;
	}

	@media ${devices.laptop} {
		display: grid;
		padding: 20px;
	}

	@media ${devices.desktopM} {
		display: grid;
		padding: 20px 400px;
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
		display: none;
		${NavbarLinksDefault};
	}

	@media ${devices.tablet} {
		display: none;
		${NavbarLinksDefault};
	}

	@media ${devices.laptop} {
		display: flex;
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
		cursor: pointer;
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
