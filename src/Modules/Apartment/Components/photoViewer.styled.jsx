import styled from "styled-components";


export const PhotoViewerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    justify-content: center;
    margin: 10px;
    > img {
        height: 100px;
        width: 200px;
        object-fit: cover;
    }
`;