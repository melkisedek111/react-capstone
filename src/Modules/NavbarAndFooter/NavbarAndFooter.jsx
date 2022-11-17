import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Navbar from "../Navbar/Navbar.jsx";

const NavbarAndFooter = () => {
	return <div>
        <Navbar />
            <Outlet />
        <Footer />
    </div>;
};

export default NavbarAndFooter;
