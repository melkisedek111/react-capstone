import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ role, allowedRoles }) => {
	const location = useLocation();
	return role ? (
		<Outlet />
	) : (
		<Navigate to="/admin/signin" state={{ from: location.pathname }} replace />
	);
};

export default RequireAuth;
