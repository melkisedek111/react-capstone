import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { GoogleMapReactContainer } from "./googleMapReact.styled.jsx";
import PropertyLocationDetailsPopover from "./PropertyLocationDetailsPopover.jsx";

const AnyReactComponent = ({ Component }) => (
	<div>
		<PropertyLocationDetailsPopover />
	</div>
);

export default function GoogleMap({ lat, lng }) {
	const [otherProps, setOtherProps] = useState({});
	const defaultProps = {
		center: {
			lat: 14.5995,
			lng: 120.9842,
		},
		zoom: 12,
	};

	useEffect(() => {
		if (lat && lng) {
			const newProps = {
				center: {
					lat: parseFloat(lat),
					lng: parseFloat(lng),
				},
				zoom: 12,
			};
			setOtherProps(newProps);
		}
	}, [lat, lng]);

	return (
		// Important! Always set the container height explicitly
		<GoogleMapReactContainer>
			<GoogleMapReact
				bootstrapURLKeys={{ key: "AIzaSyCt5g9NHrv-Cc5JTaQCqKf4GkPWDSGdkNc" }}
				// center={{ center: { lat, lng } }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
				{...otherProps}
			>
				{otherProps?.center?.lat && otherProps?.center?.lng ? <AnyReactComponent lat={otherProps?.center?.lat} lng={otherProps?.center?.lng} /> : null}
			</GoogleMapReact>
		</GoogleMapReactContainer>
	);
}
