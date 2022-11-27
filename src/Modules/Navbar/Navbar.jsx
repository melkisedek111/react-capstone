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
		if(isShowLinks){
			setIsShowLinks(false);
		}
	}

	const handleOpenNavlist = () => {
		nav.current.focus();
		console.log(123123123, isShowLinks)
		setIsShowLinks(!isShowLinks)
	}


	return (
		<NavbarContainer>
			<NavbarContactContainer>
				<div>
					<div>
						<EmailRoundedIcon />
						<p>help.center@us@utopia.gov.com</p>
					</div>
					<div>
						<LocalPhoneRoundedIcon />
						<p>+274 3821 0489</p>
					</div>
					{/* <div>
						<SearchRoundedIcon />
						<input placeholder="Search" />
					</div> */}
				</div>
			</NavbarContactContainer>
			<Navbar>
				<Logo />
				<NavbarLinks>
					<Link to="/">Home</Link>
					<Link to="/apartments">Apartments</Link>
					<Link to="join-our-team">Join Our Team</Link>
					<Link to="/about-us">About Us</Link>
					<Link to="/contact-us">Contact Us</Link>
				</NavbarLinks>
				<div>
					<Button variant="contained"><Link to="/inquire">Inquire</Link></Button>
				</div>
			</Navbar>
			<NavbarResponsive ref={nav} >
				<MenuIcon onClick={handleOpenNavlist} />
				<NavbarLinks ref={nav} isShowLinks={isShowLinks} tabIndex={isShowLinks ? 0 : 1}>
					<Link to="/" onClick={handleOpenNavlist}>Home</Link>
					<Link to="/apartments" onClick={handleOpenNavlist}>Apartments</Link>
					<Link to="join-our-team" onClick={handleOpenNavlist}>Join Our Team</Link>
					<Link to="/about-us" onClick={handleOpenNavlist}>About Us</Link>
					<Link to="/contact-us" onClick={handleOpenNavlist}>Contact Us</Link>
				</NavbarLinks>
				<Logo />
			</NavbarResponsive>
		</NavbarContainer>
	);
};

export default Navbar1;
