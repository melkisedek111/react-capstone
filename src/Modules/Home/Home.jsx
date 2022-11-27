import React, { useCallback, useEffect, useState } from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import DoubleArrowRoundedIcon from "@mui/icons-material/DoubleArrowRounded";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import YardRoundedIcon from "@mui/icons-material/YardRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import WeekendRoundedIcon from "@mui/icons-material/WeekendRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CropRotateIcon from "@mui/icons-material/CropRotate";
import {
	BackgroundContainer,
	ChipContainer,
	HomeContainer,
	InfoOneContainer,
	MainContainer,
	MainContainerDescription,
	SubDescription,
	FeaturedInformation,
	InformationCardContainer,
	FeaturedFacilitiesSection,
	FeaturedFacilitiesDescription,
	IconWithDetailsBox,
	IconWithDetailsContainer,
	FeaturedPropertiesSection,
	FeaturePropertiesHeading,
	FeaturedPropertiesContainer,
	LeadersSection,
	LeadersHeading,
	LeadersCard,
	LeadersCardContainer,
	AOSContainer,
	GoogleMapSection,
	GoogleMapHeading,
	GoogleMapContainer,
	ProjectLocationContainer,
	ProjectLocationChip,
	IconContainer,
	CompanyPartnerContainer,
	CompanyPartnersSection,
	CompanyPartnerIcons,
	BookingSection,
	BookingContainer,
	FeaturedFacilitiesContainer,
	FeaturedInformationSection,
} from "./home.styled.jsx";
import { Grid } from "@mui/material";
import {
	ColorPallets,
	fontStyle,
} from "../../utils/constants/css.constants.js";

import GoogleMap from "./Components/GoogleMap.jsx";
import CommonBooking from "../Commons/CommonBooking.jsx";
import { useGetHomePageApartmentsMutation } from "../../redux/api/apartment.api.js";
import { Link } from "react-router-dom";

const Home = () => {
	const [getHomePageApartments, getHomePageApartmentsResponse] =
		useGetHomePageApartmentsMutation();
	const [futureApartments, setFutureApartments] = useState([]);
	const [latitude, setLatitude] = useState(undefined);
	const [longitude, setLongitude] = useState(undefined);

	const handleCoordinate = (lat, lng) => {
		setLatitude(lat);
		setLongitude(lng);
	};

	useEffect(() => {
		getHomePageApartments();
	}, []);

	useEffect(() => {
		if (getHomePageApartmentsResponse?.isSuccess) {
			const { result } = getHomePageApartmentsResponse.data;
			if (result?.data) {
				if (
					JSON.stringify(futureApartments) !==
					JSON.stringify(result.data.apartments)
				) {
					setFutureApartments(result.data.apartments);
				}
			}
		}
	}, [getHomePageApartmentsResponse]);
	return (
		<HomeContainer>
			<Grid container>
				<Grid item xs={12}>
					<BackgroundContainer>
						<MainContainer>
							<MainContainerDescription
								data-aos="fade-right"
								data-aos-duration="1000"
							>
								<ChipContainer>
									<h5>NEW</h5>
									<h6>
										Stay connected to get more promotion about real estate
									</h6>
								</ChipContainer>
								<h1>Find the Most Comfortable Place to Live for You.</h1>
								<SubDescription>
									<p>
										This is a government projects that provides a quality homes
										for every citizen.
									</p>
									<Button variant="contained" endIcon={<SearchRoundedIcon />}>
										Search Property
									</Button>
								</SubDescription>
							</MainContainerDescription>
							<img
								data-aos="fade-left"
								data-aos-duration="1000"
								src="https://assets.webiconspng.com/uploads/2017/09/Building-PNG-Image-98878.png"
							/>
						</MainContainer>
					</BackgroundContainer>
				</Grid>
				<Grid item xs={12}>
					<FeaturedInformationSection>
						<FeaturedInformation>
							<InfoOneContainer>
								<div data-aos="fade-left">
									<h1>
										We provide houses, apartments, and soho with modern designs
										and the best facilities for you.
									</h1>
									<Button
										variant="contained"
										endIcon={<DoubleArrowRoundedIcon />}
									>
										About Us
									</Button>
								</div>
								<div data-aos="fade-right">
									<h5>What we provide from this project.</h5>
									<h6>
										Take a deep dive and browse homes for sale, original
										neighborhood photos, resident reviews and local insights to
										find what is right for you.
									</h6>
									<h6>
										Find your place with an immersive photo experience and the
										most listings, including things you won’t find anywhere
										else.
									</h6>
								</div>
							</InfoOneContainer>
							<InformationCardContainer>
								<Grid container spacing={3}>
									<Grid
										item
										xs={12}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minHeight: "530px" }}>
											<CardMedia
												component="img"
												height="260"
												image="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
												alt="green iguana"
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
													style={{
														fontFamily: fontStyle.primary,
														fontWeight: "bold",
													}}
												>
													Loft
												</Typography>
												<Typography variant="body2" color="text.secondary">
													A loft apartment generally has one large, open room
													with high ceilings. Other characteristics include
													large, high windows, exposed brick and support beams,
													as lofts are often found in commercial buildings that
													have been renovated.
												</Typography>
											</CardContent>
											<CardActions sx={{ display: "flex" }}>
												<Button
													size="small"
													style={{ color: ColorPallets.highlights }}
													endIcon={<ArrowForwardRoundedIcon />}
												>
													Know More
												</Button>
											</CardActions>
										</Card>
									</Grid>
									<Grid
										item
										xs={12}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minHeight: "530px" }}>
											<CardMedia
												component="img"
												height="260"
												image="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
												alt="green iguana"
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
													style={{
														fontFamily: fontStyle.primary,
														fontWeight: "bold",
													}}
												>
													Alcove Studio
												</Typography>
												<Typography variant="body2" color="text.secondary">
													An alcove studio is the same as a traditional studio
													but generally has an L partition in the living room.
													In other words, there is a nook or alcove for a bed.
													This makes the area easier to curtain or wall-off for
													more privacy.
												</Typography>
											</CardContent>
											<CardActions sx={{ display: "flex" }}>
												<Button
													size="small"
													style={{ color: ColorPallets.highlights }}
													endIcon={<ArrowForwardRoundedIcon />}
												>
													Know More
												</Button>
											</CardActions>
										</Card>
									</Grid>
									<Grid
										item
										xs={12}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minHeight: "530px" }}>
											<CardMedia
												component="img"
												height="260"
												image="https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
												alt="green iguana"
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
													style={{
														fontFamily: fontStyle.primary,
														fontWeight: "bold",
													}}
												>
													Duplex
												</Typography>
												<Typography variant="body2" color="text.secondary">
													A duplex is a multi-family home that has two units in
													one building. Apartments in a duplex will have their
													own entrances and often have living spaces upstairs
													and downstairs.
												</Typography>
											</CardContent>
											<CardActions sx={{ display: "flex" }}>
												<Button
													size="small"
													style={{ color: ColorPallets.highlights }}
													endIcon={<ArrowForwardRoundedIcon />}
												>
													Know More
												</Button>
											</CardActions>
										</Card>
									</Grid>
									<Grid
										item
										xs={12}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minHeight: "530px" }}>
											<CardMedia
												component="img"
												height="260"
												image="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
												alt="green iguana"
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant="h5"
													component="div"
													style={{
														fontFamily: fontStyle.primary,
														fontWeight: "bold",
													}}
												>
													Studio
												</Typography>
												<Typography variant="body2" color="text.secondary">
													A studio apartment is a small apartment with an open
													floor plan. It consists of a single room that combines
													the bedroom, living room and kitchen spaces with a
													separate room containing a complete bathroom.
												</Typography>
											</CardContent>
											<CardActions sx={{ display: "flex" }}>
												<Button
													size="small"
													style={{ color: ColorPallets.highlights }}
													endIcon={<ArrowForwardRoundedIcon />}
												>
													Know More
												</Button>
											</CardActions>
										</Card>
									</Grid>
								</Grid>
							</InformationCardContainer>
						</FeaturedInformation>
					</FeaturedInformationSection>
				</Grid>
				<Grid item xs={12}>
					<FeaturedFacilitiesSection>
						<FeaturedFacilitiesContainer>
							<Grid container>
								<Grid item xs={12} md={6} data-aos="fade-right">
									<img src="https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
								</Grid>
								<Grid item xs={12} md={6} data-aos="fade-left">
									<FeaturedFacilitiesDescription>
										<h2>Featured Facilities from Our Property</h2>
										<p>
											As we immersed ourselves to the new technologies everyday,
											integrating the innovative technologies to the home that
											provides safe and friendly homes for everyone.
										</p>
										<IconWithDetailsContainer>
											<Grid container spacing={3}>
												<Grid
													item
													xs={6}
													md={6}
													data-aos="fade-left"
													data-aos-duration="1500"
												>
													<IconWithDetailsBox>
														<YardRoundedIcon />
														<h6>ECO FRIENDLY</h6>
														<p>
															We provide more eco friendly homes for every
															residence.
														</p>
													</IconWithDetailsBox>
												</Grid>
												<Grid
													item
													xs={6}
													md={6}
													data-aos="fade-left"
													data-aos-duration="1500"
												>
													<IconWithDetailsBox>
														<SecurityRoundedIcon />
														<h6>SECURITY</h6>
														<p>
															24/7 security cameras and on standby authorities
															on the site.
														</p>
													</IconWithDetailsBox>
												</Grid>
												<Grid
													item
													xs={6}
													md={6}
													data-aos="fade-left"
													data-aos-duration="1500"
												>
													<IconWithDetailsBox>
														<SupportAgentRoundedIcon />
														<h6>SUPPORT</h6>
														<p>
															We give 24/7 support and quick response for every
															questions and concerns about your apartment.
														</p>
													</IconWithDetailsBox>
												</Grid>
												<Grid
													item
													xs={6}
													md={6}
													data-aos="fade-left"
													data-aos-duration="1500"
												>
													<IconWithDetailsBox>
														<WeekendRoundedIcon />
														<h6>LIVING</h6>
														<p>
															Providing good quality of live that meets the
															customer's requirements and expectations.
														</p>
													</IconWithDetailsBox>
												</Grid>
											</Grid>
										</IconWithDetailsContainer>
									</FeaturedFacilitiesDescription>
								</Grid>
							</Grid>
						</FeaturedFacilitiesContainer>
					</FeaturedFacilitiesSection>
				</Grid>
				<Grid item xs={12}>
					<FeaturedPropertiesSection>
						<FeaturePropertiesHeading>
							<div>
								<h1>Featured Properties</h1>
								<p>Explore the perfect place to spend a great property.</p>
							</div>
							<Button variant="contained" to="/apartments" component={Link}>View all Apartments</Button>
						</FeaturePropertiesHeading>
						<Grid container>
							{futureApartments.length
								? futureApartments.map((apartment) => (
										<Grid key={apartment.id} items xs={12} md={6} data-aos="zoom-in-up">
											<FeaturedPropertiesContainer>
												<div>
													<img src={apartment.images[0]} />
												</div>
												<h5>{apartment.location}</h5>
												<h3>{apartment.name}</h3>
											</FeaturedPropertiesContainer>
										</Grid>
								  ))
								: null}
						</Grid>
					</FeaturedPropertiesSection>
				</Grid>
				<Grid item xs={12}>
					<LeadersSection>
						<LeadersHeading>
							<div>
								<h1>Meet our Experts and Leaders</h1>
								<p>
									Real estate agent is a person who represents sellers or buyers
									of
								</p>
								<p>
									Real estate or real property. While a broker may work
									independently.
								</p>
							</div>
							<Button>View All</Button>
						</LeadersHeading>
						<LeadersCardContainer>
							<AOSContainer data-aos="fade-up" data-aos-duration="1000">
								<LeadersCard className="hvr-grow hvr-underline-from-center">
									<img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
									<div>
										<h5>Calvin Klein</h5>
										<h6>Designer</h6>
										<p>
											Fashion Institute of Technology in New York City, before
											apprenticing for a great designer.
										</p>
										<div>
											<FacebookIcon />
											<TwitterIcon />
											<LinkedInIcon />
											<GoogleIcon />
										</div>
									</div>
								</LeadersCard>
							</AOSContainer>
							<AOSContainer data-aos="fade-up" data-aos-duration="1500">
								<LeadersCard className="hvr-grow hvr-underline-from-center">
									<img src="https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
									<div>
										<h5>Omer Roth</h5>
										<h6>Engineer</h6>
										<p>
											Fashion Institute of Technology in New York City, before
											apprenticing for a great designer.
										</p>
										<div>
											<FacebookIcon />
											<TwitterIcon />
											<LinkedInIcon />
											<GoogleIcon />
										</div>
									</div>
								</LeadersCard>
							</AOSContainer>
							<AOSContainer data-aos="fade-up" data-aos-duration="2000">
								<LeadersCard className="hvr-grow hvr-underline-from-center">
									<img src="https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
									<div>
										<h5>Reanne Stevenson</h5>
										<h6>Influencer</h6>
										<p>
											Fashion Institute of Technology in New York City, before
											apprenticing for a great designer.
										</p>
										<div>
											<FacebookIcon />
											<TwitterIcon />
											<LinkedInIcon />
											<GoogleIcon />
										</div>
									</div>
								</LeadersCard>
							</AOSContainer>
						</LeadersCardContainer>
					</LeadersSection>
				</Grid>
				<Grid item xs={12}>
					<GoogleMapSection>
						<GoogleMapHeading>
							<h1>Future Project Locations</h1>
							<h6>
								Lorem Ipsum is not simply random text. It has roots in a piece
								of classical at Hampden-Sydney College.
							</h6>
						</GoogleMapHeading>
						<Grid container>
							<Grid item xs={12} md={6}>
								<ProjectLocationContainer>
									{futureApartments.length
										? futureApartments.map((apartment) => (
												<AOSContainer
													key={apartment.id}
													data-aos="fade-right"
													data-aos-duration="1000"
													onClick={() =>
														handleCoordinate(
															apartment.latitude,
															apartment.longitude
														)
													}
												>
													<ProjectLocationChip>
														<img src={apartment.images[0]} />
														<Card>
															<CardContent>
																<h3>{apartment.name}</h3>
																<h6>
																	{apartment.location} | {apartment.type}
																</h6>
																<Grid container>
																	<Grid item xs={12} md={4}>
																		<IconContainer>
																			<div>
																				<HotelIcon />
																				<h6>Bedrooms</h6>
																			</div>
																			<h6>{apartment.bedroom}</h6>
																		</IconContainer>
																	</Grid>
																	<Grid item xs={12} md={4}>
																		<IconContainer>
																			<div>
																				<BathtubIcon />
																				<h6>Bathrooms</h6>
																			</div>
																			<h6>{apartment.bathroom}</h6>
																		</IconContainer>
																	</Grid>
																	<Grid item xs={12} md={4}>
																		<IconContainer>
																			<div>
																				<CropRotateIcon />
																				<h6>Area (m²)</h6>
																			</div>
																			<h6>{apartment.superArea}</h6>
																		</IconContainer>
																	</Grid>
																</Grid>
															</CardContent>
														</Card>
													</ProjectLocationChip>
												</AOSContainer>
										  ))
										: null}
								</ProjectLocationContainer>
							</Grid>
							<Grid item xs={12} md={6}>
								<GoogleMapContainer>
									<AOSContainer data-aos="fade-left" data-aos-duration="1000">
										<GoogleMap lat={latitude} lng={longitude} />
									</AOSContainer>
								</GoogleMapContainer>
							</Grid>
						</Grid>
					</GoogleMapSection>
				</Grid>
				<Grid item xs={12}>
					<CompanyPartnersSection>
						<CompanyPartnerContainer>
							<Grid container>
								<Grid item xs={12} md={6}>
									<h1>We have worked with them.</h1>
								</Grid>
								<Grid item xs={12} md={6}>
									<h5>
										Meet the company partners that support this government home
										projects. This renowned companies has already achieve their
										great fits on building great and comfortable homes for
										everyone.
									</h5>
								</Grid>
								<Grid item xs={12} md={12}>
									<CompanyPartnerIcons>
										<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ayala_Land_logo.svg/2560px-Ayala_Land_logo.svg.png" />
										<img src="https://propertyonline.ph/storage/developers/September2020/MyKdzFLvSRL2BxsXebgZ.png" />
										<img src="https://www.kubo.ph/ImageStorage/smdc/smdc-logo.png" />
										<img src="https://mb.com.ph/wp-content/uploads/2020/10/DMCI-HOMES-LOGO-TEXT-5inches-x-1inch-NEW.png" />
										<img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Filinvest_Land_Inc_logo.svg/2560px-Filinvest_Land_Inc_logo.svg.png" />
										<img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Megaworld_New_Logo_Horizontal.png" />
									</CompanyPartnerIcons>
								</Grid>
							</Grid>
						</CompanyPartnerContainer>
					</CompanyPartnersSection>
				</Grid>
				<Grid item xs={12}>
					<CommonBooking />
				</Grid>
			</Grid>
		</HomeContainer>
	);
};

export default Home;
