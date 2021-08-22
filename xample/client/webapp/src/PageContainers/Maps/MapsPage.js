import { MinusCircleOutlined } from '@ant-design/icons';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import JourneyOptionList from './components/JourneyOptionList';
import { GoogleMapContainer, MapsPage as StyledMapsPage, StyledSearch } from "./styles";
import { getTransportation, GOOGLE_MAP_API_KEY } from '../../apis/apis';

const MapsPage = () => {
    const [searchDestination, setSearchDestination] = useState(null);

    const [journeyOptions, setJourneyOptions] = useState([]);
    const [selectedJourneyOption, setSelectedJourneyOption] = useState(null);

    const defaultProps = {
        center: {
            lat: -36.818840,
            lng: 174.732529
        },
        zoom: 30
    };

    useEffect(() => {
        if (searchDestination) {
            setSelectedJourneyOption(null);
            (async function () {
                const options = await getTransportation();
                setJourneyOptions(options);
            })();
        }
    }, [searchDestination]);

    const onSearch = (value) => {
        console.log(`Searching destination=[${value}]`);
        setSearchDestination(value);
    }

    const onJourneyOptionClick = (option) => {
        console.log(`User clicked journey option with props=[${JSON.stringify(option)}]`)
        // Call API to get search results
        setSelectedJourneyOption(option);
    }

    const handleApiLoaded = (map, maps) => {
        const directionsService = new maps.DirectionsService();
        const directionsDisplay = new maps.DirectionsRenderer();
        directionsService.route({
            origin: '25 Palmerston Road, Auckland',
            destination: searchDestination,
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap(map);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    return (
        <StyledMapsPage>
            <StyledSearch
                size="large"
                placeholder="Choose destination / Kimi Haerenga"
                prefix={<MinusCircleOutlined />}
                enterButton
                onSearch={onSearch} />

            { }
            {journeyOptions.length <= 0 && (
                 <GoogleMapContainer>
                 <GoogleMapReact
                     bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                     defaultCenter={defaultProps.center}
                     defaultZoom={12}
                 >
                 </GoogleMapReact>
             </GoogleMapContainer>)}

            {selectedJourneyOption == null && journeyOptions.length > 0
                        && <JourneyOptionList journeys={journeyOptions} onOptionClick={onJourneyOptionClick} />}

            {selectedJourneyOption && (
                <GoogleMapContainer>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                    >
                    </GoogleMapReact>
                </GoogleMapContainer>)
            }
        </StyledMapsPage>
    )
}

export default MapsPage;