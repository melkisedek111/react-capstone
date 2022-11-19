import React, { useCallback, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import _ from "hover.css";

import { ScrollerMotion } from "scroller-motion";

import Home from "./Modules/Home/Home.jsx";
import Navbar from "./Modules/Navbar/Navbar.jsx";
import Footer from "./Modules/Footer/Footer.jsx";

import "./App.css";
import Apartments from "./Modules/Apartments/Apartments.jsx";
import {
	Navigate,
	Outlet,
	redirect,
	Route,
	Routes,
	useLocation,
	useNavigate,
} from "react-router-dom";
import Apartment from "./Modules/Apartment/Apartment.jsx";
import AboutUs from "./Modules/AboutUs/AboutUs.jsx";
import JoinOurTeam from "./Modules/JoinOurTeam/JoinOurTeam.jsx";
import ContactUs from "./Modules/ContactUs/ContactUs.jsx";
import Enquire from "./Modules/Enquire/Enquire.jsx";
import Loading from "./Modules/Loading/Loading.jsx";
import SnackbarAlert from "./Modules/Snackbar/SnackbarAlert.jsx";
import AdminNavbar from "./Admin/Modules/Navbar/Navbar.jsx";
import Dashboard from "./Admin/Modules/Dashboard/Dashboard.jsx";
import AdminApartments from "./Admin/Modules/AdminApartments/AdminApartments.jsx";
import NavbarAndFooter from "./Modules/NavbarAndFooter/NavbarAndFooter.jsx";
import SignIn from "./Modules/Signin/Signin.jsx";
import RequireAuth from "./Modules/RequireAuth/RequireAuth.jsx";
import User from "./Admin/Modules/User/User.jsx";
import { useSelector } from "react-redux";
import { useCheckUserLoginMutation } from "./redux/api/user.api.js";

const theme = createTheme({
	typography: {
		fontFamily: ["Manrope", "Secular One"].join(","),
	},
});

const App = () => {
	const user = useSelector((state) => state.user);
	const location = useLocation();
	const navigate = useNavigate();
	const [checkLoginUser, checkLoginUserResponse] = useCheckUserLoginMutation();

	useEffect(() => {
		if (localStorage.getItem("CAPSTONE_JWT_TOKEN")) {
			checkLoginUser();
		}
	}, []);
	console.log(location.pathname, 2929292);
	return (
		<>
			<ThemeProvider theme={theme}>
				<Routes>
					<Route path="/" element={<NavbarAndFooter />}>
						<Route exact path="/" element={<Home />} />
						<Route path="/apartments" element={<Outlet />}>
							<Route exact path="/apartments" element={<Apartments />} />
							<Route
								exact
								path="/apartments/:apartmentId"
								element={<Apartment />}
							/>
						</Route>
						<Route exact path="/about-us" element={<AboutUs />} />
						<Route exact path="/join-our-team" element={<JoinOurTeam />} />
						<Route exact path="/contact-us" element={<ContactUs />} />
						<Route exact path="/enquire" element={<Enquire />} />
					</Route>
					<Route
						element={
							<RequireAuth role={user?.user?.role} allowedRoles={[11, 10]} />
						}
					>
						<Route exact path="/admin" element={<AdminNavbar />}>
							<Route exact path="/admin" element={<Dashboard />} />
							<Route
								exact
								path="/admin/apartments"
								element={<AdminApartments />}
							/>
							<Route exact path="/admin/user" element={<User />} />
						</Route>
					</Route>
					<Route exact path="/admin/signin" element={
							user?.user?.role ? <Navigate to={location.pathname !== "/admin/signin" ? location.pathname : "/admin"} /> : <SignIn />
						} />
					<Route path="*" element={<></>} />
				</Routes>
			</ThemeProvider>
		</>
	);
};

export default App;
