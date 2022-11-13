import React from "react";
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import SquareFootRoundedIcon from '@mui/icons-material/SquareFootRounded';

import { ApartmentCardContainer, ApartmentCardDetails } from "./apartmentCard.styled.jsx";
import { Grid } from "@mui/material";

const ApartmentCard = () => {
	return (
		<ApartmentCardContainer>
			<img src="https://templatekit.pinisiart.com/realestatekit2/wp-content/uploads/sites/6/2021/01/interior-of-living-room-H7DWEM7.jpg" className="hvr-grow " />
			<ApartmentCardDetails>
				<div>
					<h6>To Rent</h6>
					<h6>Apartment</h6>
				</div>
				<div>
                    <h1>₱3,392,100</h1>
                    <div>
                        <div>
                            <HotelRoundedIcon />
                            <h6>4</h6>
                        </div>
                        <div>
                            <BathtubRoundedIcon />
                            <h6>4</h6>
                        </div>
                        <div>
                            <SquareFootRoundedIcon />
                            <h6>124 m2</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <h6>St. Katharine Docks</h6>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h6>Hackney , London</h6>
                        </Grid>
                    </Grid>
                </div>
				<div></div>
			</ApartmentCardDetails>
		</ApartmentCardContainer>
	);
};

export default ApartmentCard;
