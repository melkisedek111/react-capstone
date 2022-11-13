import styled from "styled-components";

export const WorkCardContainer = styled.div`
	background-color: rgba(255, 255, 255, 0.75);
	padding: 60px 50px;
	text-align: center;
	display: block;
	margin: 20px;
	h5 {
		margin-bottom: 20px;
	}

	p {
		color: #8992a4;
		font-weight: lighter;
	}

	:hover {
		box-shadow: -1px 0px 5px 5px rgba(59, 52, 134, 0.18);
		-webkit-box-shadow: -1px 0px 5px 5px rgba(59, 52, 134, 0.18);
		-moz-box-shadow: -1px 0px 5px 5px rgba(59, 52, 134, 0.18);
	}
`;
