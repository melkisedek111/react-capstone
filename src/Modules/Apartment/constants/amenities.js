import React from "react";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import VapeFreeOutlinedIcon from "@mui/icons-material/VapeFreeOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LocalDiningOutlinedIcon from "@mui/icons-material/LocalDiningOutlined";
import FireExtinguisherOutlinedIcon from "@mui/icons-material/FireExtinguisherOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import WifiOutlinedIcon from "@mui/icons-material/WifiOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TheatersIcon from "@mui/icons-material/Theaters";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

export const AMENITIES = {
	1: (
		<div>
			<ChairOutlinedIcon />
			<h6>Fully-furnished</h6>
		</div>
	),
	2: (
		<div>
			<VapeFreeOutlinedIcon />
			<h6>Non-smoking rooms</h6>
		</div>
	),
	3: (
		<div>
			<AcUnitOutlinedIcon />
			<h6>AC rooms</h6>
		</div>
	),
	4: (
		<div>
			<LocalDiningOutlinedIcon />
			<h6>Free breakfast</h6>
		</div>
	),
	5: (
		<div>
			<FireExtinguisherOutlinedIcon />
			<h6>Fire Extinguisher</h6>
		</div>
	),
	6: (
		<div>
			<BathtubOutlinedIcon />
			<h6>Bathtub</h6>
		</div>
	),
	6: (
		<div>
			<SecurityOutlinedIcon />
			<h6>Home Security</h6>
		</div>
	),
	8: (
		<div>
			<PoolOutlinedIcon />
			<h6>Swimming pool</h6>
		</div>
	),
	9: (
		<div>
			<WifiOutlinedIcon />
			<h6>Hight speed Wi-Fi</h6>
		</div>
	),
	10: (
		<div>
			<FitnessCenterIcon />
			<h6>Gym</h6>
		</div>
	),
	11: (
		<div>
			<TheatersIcon />
			<h6>Media rooms</h6>
		</div>
	),
	12: (
		<div>
			<LocalLaundryServiceIcon />
			<h6>Laundry Facilities</h6>
		</div>
	),
	13: (
		<div>
			<LocalFireDepartmentIcon />
			<h6>Thermostats</h6>
		</div>
	),
};
