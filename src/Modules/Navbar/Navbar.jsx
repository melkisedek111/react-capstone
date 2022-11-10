import React from "react";
import {
	Navbar,
	NavbarContactContainer,
	NavbarContainer,
	NavbarLinks,
	NavbarResponsive,
} from "./navbar.styled.jsx";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";

import Logo from "./Components/Logo.jsx";

const Navbar1 = () => {
	return (
		<NavbarContainer>
			<NavbarContactContainer>
				<div>
					<div>
						<EmailRoundedIcon />
						<p>help.center@shino.com</p>
					</div>
					<div>
						<LocalPhoneRoundedIcon />
						<p>+274 3821 0489</p>
					</div>
					<div>
						<SearchRoundedIcon />
						<input placeholder="Search" />
					</div>
				</div>
			</NavbarContactContainer>
			<Navbar>
				<Logo />
				<NavbarLinks>
					<li>Home</li>
					<li>Apartments</li>
					<li>Join Our Team</li>
					<li>About</li>
				</NavbarLinks>
				<div>
					<Button variant="outlined">Booking</Button>
				</div>
			</Navbar>
			<NavbarResponsive>
				<MenuIcon />
				<NavbarLinks>
					<li>Home</li>
					<li>Apartments</li>
					<li>Join Our Team</li>
					<li>About</li>
				</NavbarLinks>
				<Logo />
			</NavbarResponsive>
		</NavbarContainer>
	);
};

export default Navbar1;
