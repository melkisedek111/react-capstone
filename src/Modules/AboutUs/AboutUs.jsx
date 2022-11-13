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
						<Grid item xs={12} md={6}>
							<p>
								Faucibus interdum posuere lorem ipsum dolor sit amet consectetur
								adipiscing. Eleifend donec pretium vulputate sapien nec sagittis
								ali quam. Tristique senectus et netus et malesuada fames. Libero
								nunc consequat interdum varius sit sit amet nisl purus in
								mollis.
							</p>
						</Grid>
						<Grid item xs={12} md={6}>
							<p>
								Faucibus interdum posuere lorem ipsum dolor sit amet consectetur
								adipiscing. Eleifend donec pretium vulputate sapien nec sagittis
								ali quam. Tristique senectus et netus et malesuada fames. Libero
								nunc consequat interdum varius sit sit amet nisl purus in
								mollis.
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
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
										elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
										leo.
									</p>
								</Grid>
								<Grid item xs={12} md={12}>
									<h3>Experienced Agent</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
										elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
										leo.
									</p>
								</Grid>
								<Grid item xs={12} md={12}>
									<h3>Quality Life</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
										elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
										leo.
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
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
									elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
									leo.
								</p>
							</ProvenDescription>
						</Grid>
						<Grid item xs={12} md={6}>
							<ProvenDetails>
								<div>
									<h1>2020</h1>
									<h5>Lorem ipsum dolor sit amet, consectetur.</h5>
								</div>
								<div>
									<h1>4, 281</h1>
									<h5>Lorem ipsum dolor sit amet, consectetur.</h5>
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
