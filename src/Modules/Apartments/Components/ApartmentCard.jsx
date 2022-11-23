import React from "react";
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';
import BathtubRoundedIcon from '@mui/icons-material/BathtubRounded';
import SquareFootRoundedIcon from '@mui/icons-material/SquareFootRounded';
import CurrencyFormatter from "currency-formatter";

import { ApartmentCardContainer, ApartmentCardDetails } from "./apartmentCard.styled.jsx";
import { Grid } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ApartmentCard = ({data, handleNavigate}) => {

	return (
		<ApartmentCardContainer className="hvr-grow" onClick={() => handleNavigate(data.id)}>
			<LazyLoadImage src={data.images[0]} effect="blur"  />
			<ApartmentCardDetails>
				<div>
					<h6>{data.type}</h6>
					<h6>{data.name}</h6>
				</div>
				<div>
                    <h1>{CurrencyFormatter.format(data.price, { code: 'PHP' })}</h1>
                    <div>
                        <div>
                            <HotelRoundedIcon />
                            <h6>{data.bedroom}</h6>
                        </div>
                        <div>
                            <BathtubRoundedIcon />
                            <h6>{data.bathroom}</h6>
                        </div>
                        <div>
                            <SquareFootRoundedIcon />
                            <h6>{data.superArea} m2</h6>
                        </div>
                    </div>
                </div>
                <div>
                    <Grid container>
                        <Grid item xs={12} md={12}>
                            <h6>{data.location}</h6>
                        </Grid>
                    </Grid>
                </div>
				<div></div>
			</ApartmentCardDetails>
		</ApartmentCardContainer>
	);
};

export default ApartmentCard;
