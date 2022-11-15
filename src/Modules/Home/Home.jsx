import React, { useCallback } from "react";
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

const Home1 = () => {
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
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
										elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
										leo.
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
									<h5>Help Finding Information Online</h5>
									<h6>
										Aenean tempus eget turpis euismod condimentum. Sed at lorem
										ut lacus malesuada imperdiet id ac urna. Morbi ac libero
										consequat ipsum consequat volutpat. Duis finibus ex quam, et
										malesuada sem gravida ac.
									</h6>
									<h6>
										Pellentesque laoreet odio a sem feugiat dignissim. Vivamus
										elementum mi nisi, id dictum ante maximus in. Pellentesque
										habitant morbi tristique senectus et netus et malesuada
										fames ac turpis egestas. Integer ultrices sem non porta
										placerat.
									</h6>
								</div>
							</InfoOneContainer>
							<InformationCardContainer>
								<Grid container spacing={1}>
									<Grid
										item
										xs={12}
										lg={3}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minWidth: 300 }}>
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
													Houses
												</Typography>
												<Typography variant="body2" color="text.secondary">
													Lizards are a widespread group of squamate reptiles,
													with over 6,000 species, ranging across all continents
													except Antarctica
												</Typography>
											</CardContent>
											<CardActions>
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
										lg={3}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minWidth: 300 }}>
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
													Apartments
												</Typography>
												<Typography variant="body2" color="text.secondary">
													Lizards are a widespread group of squamate reptiles,
													with over 6,000 species, ranging across all continents
													except Antarctica
												</Typography>
											</CardContent>
											<CardActions>
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
										lg={3}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minWidth: 300 }}>
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
													SOHO
												</Typography>
												<Typography variant="body2" color="text.secondary">
													Lizards are a widespread group of squamate reptiles,
													with over 6,000 species, ranging across all continents
													except Antarctica
												</Typography>
											</CardContent>
											<CardActions>
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
										lg={3}
										md={3}
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<Card sx={{ minWidth: 300 }}>
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
													Lizards are a widespread group of squamate reptiles,
													with over 6,000 species, ranging across all continents
													except Antarctica
												</Typography>
											</CardContent>
											<CardActions>
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
											Etiam ac congue lorem. Nunc aliquam mi nec justo elementum
											venenatis. Interdum et malesuada fames ac ante ipsum
											primis in faucibus. Quisque velit dui, vehicula sed orci
											ac, elementum lacinia velit.
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
															Our product will speed up your work in creating
															your own presentations.
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
															Our product will speed up your work in creating
															your own presentations.
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
															Use the best color solutions to create wonderful
															presentation.
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
															Use the best color solutions to create wonderful
															presentation.
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
							<Button variant="contained">View all Properties</Button>
						</FeaturePropertiesHeading>
						<Grid container>
							<Grid items xs={12} md={6} data-aos="zoom-in-up">
								<FeaturedPropertiesContainer>
									<img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
									<h5>Manila</h5>
									<h3>OMAH Luxury Apartment 5578</h3>
								</FeaturedPropertiesContainer>
							</Grid>
							<Grid items xs={12} md={6} data-aos="zoom-in-up">
								<FeaturedPropertiesContainer>
									<img src="https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
									<h5>Cavite</h5>
									<h3>New Industrialist Style Home in Cavite</h3>
								</FeaturedPropertiesContainer>
							</Grid>
							<Grid items xs={12} md={6} data-aos="zoom-in-up">
								<FeaturedPropertiesContainer>
									<img src="https://images.pexels.com/photos/2030037/pexels-photo-2030037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
									<h5>Baguio</h5>
									<h3>Beautiful View for Rent in Baguio</h3>
								</FeaturedPropertiesContainer>
							</Grid>
							<Grid items xs={12} md={6} data-aos="zoom-in-up">
								<FeaturedPropertiesContainer>
									<img src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1600" />
									<h5>Bonifacio Global City</h5>
									<h3>SOHO with a Strategic Location in BGC</h3>
								</FeaturedPropertiesContainer>
							</Grid>
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
							<AOSContainer data-aos="fade-up" data-aos-duration="2500">
								<LeadersCard className="hvr-grow hvr-underline-from-center">
									<img src="https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
									<div>
										<h5>Sheikh Clarkson</h5>
										<h6>Businessman</h6>
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
									<AOSContainer data-aos="fade-right" data-aos-duration="1000">
										<ProjectLocationChip>
											<img src="https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
											<Card>
												<CardContent>
													<h3>The Atherton</h3>
													<h6>
														Dr. A. Santos Ave., Parañaque City | Penthouse
													</h6>
													<Grid container>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<HotelIcon />
																	<h6>Bedrooms</h6>
																</div>
																<h6>6</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<BathtubIcon />
																	<h6>Bathrooms</h6>
																</div>
																<h6>6</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<CropRotateIcon />
																	<h6>Floor area (m²)</h6>
																</div>
																<h6>61</h6>
															</IconContainer>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</ProjectLocationChip>
									</AOSContainer>
									<AOSContainer data-aos="fade-right" data-aos-duration="1500">
										<ProjectLocationChip>
											<img src="https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
											<Card>
												<CardContent>
													<h3>Prisma Residences</h3>
													<h6>
														Pasig Boulevard, Brgy. Bagong Ilog | Deluxe Portion
													</h6>
													<Grid container>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<HotelIcon />
																	<h6>Bedrooms</h6>
																</div>
																<h6>4</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<BathtubIcon />
																	<h6>Bathrooms</h6>
																</div>
																<h6>2</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<CropRotateIcon />
																	<h6>Floor area (m²)</h6>
																</div>
																<h6>55</h6>
															</IconContainer>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</ProjectLocationChip>
									</AOSContainer>
									<AOSContainer data-aos="fade-right" data-aos-duration="2000">
										<ProjectLocationChip>
											<img src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
											<Card>
												<CardContent>
													<h3>Sonora Garden Residences</h3>
													<h6>
														Alabang–Zapote Road, Talon Tres, Las Pinas | Studio
														House
													</h6>
													<Grid container>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<HotelIcon />
																	<h6>Bedrooms</h6>
																</div>
																<h6>8</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<BathtubIcon />
																	<h6>Bathrooms</h6>
																</div>
																<h6>2</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<CropRotateIcon />
																	<h6>Floor area (m²)</h6>
																</div>
																<h6>65</h6>
															</IconContainer>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</ProjectLocationChip>
									</AOSContainer>
									<AOSContainer data-aos="fade-right" data-aos-duration="2500">
										<ProjectLocationChip>
											<img src="https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
											<Card>
												<CardContent>
													<h3>The Crestmont</h3>
													<h6>
														Panay Ave., South Triangle, Quezon City | Double
														Height
													</h6>
													<Grid container>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<HotelIcon />
																	<h6>Bedrooms</h6>
																</div>
																<h6>6</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<BathtubIcon />
																	<h6>Bathrooms</h6>
																</div>
																<h6>3</h6>
															</IconContainer>
														</Grid>
														<Grid item xs={12} md={4}>
															<IconContainer>
																<div>
																	<CropRotateIcon />
																	<h6>Floor area (m²)</h6>
																</div>
																<h6>75</h6>
															</IconContainer>
														</Grid>
													</Grid>
												</CardContent>
											</Card>
										</ProjectLocationChip>
									</AOSContainer>
								</ProjectLocationContainer>
							</Grid>
							<Grid item xs={12} md={6}>
								<GoogleMapContainer>
									<AOSContainer data-aos="fade-left" data-aos-duration="1000">
										<GoogleMap />
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
										Vestibulum ultricies semper nibh nec scelerisque. Quisque
										scele condimentum lacus non blandit. Praesent euismod lorem
										eternal tempor. Mauris sem ante, elementum.
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

export default Home1;
