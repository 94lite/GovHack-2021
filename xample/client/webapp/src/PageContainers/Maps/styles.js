import {Input} from 'antd';
import styled from "styled-components"

const MapsPage = styled.div`
    background-color: #D3D3D0;
`;

const StyledSearch = styled(Input.Search)`
    padding: 1em
`;

const GoogleMapContainer = styled.div`
    height: 30vh;
    width: 100%;
`

export {
    MapsPage,
    StyledSearch,
    GoogleMapContainer
};