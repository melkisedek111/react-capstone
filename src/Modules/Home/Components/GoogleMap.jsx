import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMapReactContainer } from "./googleMapReact.styled.jsx";
import GoogleMapLocationIcon from "../../../assets/Icon/google-map-icon.svg";
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PropertyLocationDetailsPopover from "./PropertyLocationDetailsPopover.jsx";

// const AnyReactComponent = ({ Component }) => <div><img src={GoogleMapLocationIcon} style={{height: "50px", width: "50px"}} /></div>;
const AnyReactComponent = ({ Component }) => <div><PropertyLocationDetailsPopover /></div>;



export default function GoogleMap() {
	const defaultProps = {
		center: {
			lat: 14.5995,
			lng: 120.9842,
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
				<AnyReactComponent lat={14.5995} lng={120.9842} />
				<AnyReactComponent lat={14.5770506} lng={121.02595676280009}/>
				<AnyReactComponent lat={14.5567949} lng={121.0211226}/>
				<AnyReactComponent lat={14.5605166} lng={121.0764343}/>
				<AnyReactComponent lat={14.6331084} lng={121.0993541}/>
				<AnyReactComponent lat={14.6916903} lng={120.9694534}/>
			</GoogleMapReact>
		</GoogleMapReactContainer>
	);
}
