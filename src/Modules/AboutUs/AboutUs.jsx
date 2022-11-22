import React from "react";
import { Grid } from "@mui/material";
import EngineeringOutlinedIcon from "@mui/icons-material/EngineeringOutlined";
import CommonHeader from "../Commons/CommonHeader.jsx";
import {
	AboutUsContainer,
	ProvenContainer,
	ProvenDescription,
	ProvenDetails,
	ProvenSection,
	SolutionContainer,
	SolutionSection,
	StoryContainer,
	StorySection,
} from "./aboutUs.styled.jsx";
import CommonBooking from "../Commons/CommonBooking.jsx";

const AboutUs = () => {
	return (
		<AboutUsContainer>
			<CommonHeader
				text="About Us"
				subtext="As government we provide better homes for the citizens."
			/>
			<StorySection>
				<StoryContainer>
					<h1>Our Story</h1>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} style={{textAlign: "justify"}}>
							<p>
								It all started with a simple idea: to make it easy for people to
								find their perfect home. And so, our real estate company was
								born. Now, we're one of the leading real estate companies in the
								country, and we're helping people all over the country find
								their dream homes. We're proud to say that we've helped
								thousands of people find their perfect home, and we're just
								getting started. We're passionate about what we do, and we're
								always looking for new ways to help our clients. We're
								constantly innovating and expanding our services, so that we can
								help even more people find their perfect home. We're here to
								help you find your perfect home, and we're always happy to
								answer any questions you have. So please, don't hesitate to
								contact us. We're here to help you every step of the way.
							</p>
						</Grid>
						<Grid item xs={12} md={6}>
							<p>
								A company's goal is provide a home for everyone. They strive to
								provide quality homes that are affordable and accessible to all.
								They are committed to creating communities that are safe,
								vibrant, and sustainable. They believe that everyone deserves a
								place to call home.
							</p>
						</Grid>
					</Grid>
				</StoryContainer>
			</StorySection>
			<SolutionSection>
				<SolutionContainer>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<h1>
								{" "}
								Solution for those of you who are looking for a comfortable and
								affordable place to live.
							</h1>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container spacing={2}>
								<Grid item xs={12} md={12}>
									<h3>Providing a Home</h3>
									<p  style={{textAlign: "justify"}}>
										No one should have to worry about where they will lay their
										head at night. That's why our company provides a home for
										everyone. No matter what your circumstances are, we will
										work with you to find a safe and comfortable place to call
										home. Everyone deserves a place to feel secure and loved,
										and we are proud to be able to offer that to our community.
									</p>
								</Grid>
								<Grid item xs={12} md={12}>
									<h3>Experienced Agent</h3>
									<p  style={{textAlign: "justify"}}>
										A good real estate agent will have your best interests at
										heart. They will be honest with you about properties and
										help you find the perfect home or investment. A good agent
										will also be experienced in the real estate market and will
										be able to negotiate the best possible price for you.
									</p>
								</Grid>
								<Grid item xs={12} md={12}>
									<h3>Quality Life</h3>
									<p  style={{textAlign: "justify"}}>
										We are dedicated to providing our customers with quality
										products that improve their everyday lives. We continuously
										strive to provide products that are innovative and meet the
										needs of our customers. Our products are backed by a
										commitment to excellence, and we are confident that our
										products will provide the quality of life that our customers
										deserve.
									</p>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</SolutionContainer>
			</SolutionSection>
			<ProvenSection>
				<ProvenContainer>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<ProvenDescription>
								<h1>Starting from a tough struggle plan.</h1>
								<p  style={{textAlign: "justify"}}>
									We were struggling with our plan, but we overcame it by
									working together and coming up with a new strategy. We're now
									back on track and moving forward.
								</p>
							</ProvenDescription>
						</Grid>
						<Grid item xs={12} md={6}>
							<ProvenDetails>
								<div>
									<h1>2020</h1>
									<h5>Future number of home to be build</h5>
								</div>
								<div>
									<h1>4, 281</h1>
									<h5>Number of trusted members</h5>
								</div>
							</ProvenDetails>
						</Grid>
					</Grid>
				</ProvenContainer>
			</ProvenSection>
			<CommonBooking />
		</AboutUsContainer>
	);
};

export default AboutUs;
