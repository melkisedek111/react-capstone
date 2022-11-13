import React, { useRef, useState } from "react";
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
import { Link } from "react-router-dom";

const Navbar1 = () => {
	const [isShowLinks, setIsShowLinks] = useState(false);
	const nav = useRef();
	
	const handleCloseNavlist = () => {
		setIsShowLinks(!isShowLinks)
	}

	const handleOpenNavlist = () => {
		nav.current.focus();
		setIsShowLinks(!isShowLinks)
	}


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
					<li><Link to="/">Home</Link></li>
					<li><Link to="/apartments">Apartments</Link></li>
					<li><Link>Join Our Team</Link></li>
					<li><Link>About</Link></li>
				</NavbarLinks>
				<div>
					<Button variant="outlined">Booking</Button>
				</div>
			</Navbar>
			<NavbarResponsive ref={nav} >
				<MenuIcon onClick={handleOpenNavlist} />
				<NavbarLinks ref={nav} isShowLinks={isShowLinks} onBlur={handleCloseNavlist} tabIndex={isShowLinks ? 0 : 1}>
					<li>Home</li>
					<li>Apartments</li>
					<li>Join Our Team</li>
					<li>About</li>
					<li><Button variant="outlined">Booking</Button></li>
				</NavbarLinks>
				<Logo />
			</NavbarResponsive>
		</NavbarContainer>
	);
};

export default Navbar1;
