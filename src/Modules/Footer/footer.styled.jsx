import styled from "styled-components";
import { ColorPallets, fontStyle } from "../../utils/constants/css.constants";

export const FooterSection = styled.section`
	padding: 20px 235px;
	padding-top: 250px;
    background-color: rgba(255, 255, 255, 0.75);
`;

export const FooterContainer = styled.div`
	font-family: ${fontStyle.primary};
    color: ${ColorPallets.highlights};
    h6 {
        font-weight: bolder;
        font-size: 22px;
    }

    p {
        /* font-weight: lighter; */
        margin: 30px  0px;
    }
`;

export const SubscriberFormContainer = styled.div`
    height: 65px;
    margin-top: 30px;
    input {
        width: 260px;
        height: inherit;
        border-radius: 10px;
        font-family: ${fontStyle.primary};
        border: .5px solid ${ColorPallets.highlights};
        padding: 0 15px;

        :active, :focus {
            outline: none;
            border: .5px solid ${ColorPallets.highlights};
        }
    }

    button {
        height: inherit;
        width: 165px;
        border-radius: 10px;
        margin-left: 10px;
        background-color: ${ColorPallets.highlights};
        color: #fff;
        border: none;
    }
`
