import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMapReactContainer } from "./googleMapReact.styled.jsx";
import GoogleMapLocationIcon from "../../../assets/Icon/google-map-icon.svg";
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PropertyLocationDetailsPopover from "./PropertyLocationDetailsPopover.jsx";

// const AnyReactComponent = ({ Component }) => <div><img src={GoogleMapLocationIcon} style={{height: "50px", width: "50px"}} /></div>;
const AnyReactComponent = ({ Component }) => <div><PropertyLocationDetailsPopover /></div>;



export default function GoogleMap({lat, lng}) {
	const defaultProps = {
		center: {
			lat: parseFloat(lat),
			lng: parseFloat(lng),
		},
		zoom: 12,
	};

	return (
		// Important! Always set the container height explicitly
		<GoogleMapReactContainer>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyCt5g9NHrv-Cc5JTaQCqKf4GkPWDSGdkNc" }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent lat={parseFloat(lat)} lng={parseFloat(lng)} />
			</GoogleMapReact>
		</GoogleMapReactContainer>
	);
}
