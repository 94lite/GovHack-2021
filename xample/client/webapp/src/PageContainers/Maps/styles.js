import {Input} from 'antd';
import styled from "styled-components"

const MapsPage = styled.div`
    background-color: #2E374A;
`;

const StyledSearch = styled(Input.Search)`
padding: 1em;
`;

const GoogleMapContainer = styled.div`
    height: 90vh;
    width: 100%;
`

export {
    MapsPage,
    StyledSearch,
    GoogleMapContainer
};