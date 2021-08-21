import { MinusCircleOutlined } from '@ant-design/icons';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import JourneyOptionList from './components/JourneyOptionList';
import { GoogleMapContainer, MapsPage as StyledMapsPage, StyledSearch } from "./styles";
import { getTransportation } from '../../apis/apis';

const journeys = [
    {
        type: 'Walk',
        leaveAtTime: '2:22pm',
        arriveByTime: '2:59pm',
        emissionsByGrams: '1g'
    },
    {
        type: 'E Scooter',
        leaveAtTime: '2:22pm',
        arriveByTime: '2:59pm',
        emissionsByGrams: '10g'
    },
    {
        type: 'Bike',
        leaveAtTime: '2:22pm',
        arriveByTime: '2:59pm',
        emissionsByGrams: '1590g'
    },
    {
        type: 'Train',
        leaveAtTime: '2:22pm',
        arriveByTime: '2:59pm',
        emissionsByGrams: '1590g'
    },
    {
        type: 'Car',
        leaveAtTime: '2:22pm',
        arriveByTime: '2:59pm',
        emissionsByGrams: '1590g'
    },
]

const MapsPage = () => {
    const [searchDestination, setSearchDestination] = useState(null);

    const [journeyOptions, setJourneyOptions] = useState([]);
    const [selectedJourneyOption, setSelectedJourneyOption] = useState(null);
    const [journeyMapPoints, setJourneyMapPoints] = useState([]);

    const defaultProps = {
        center: {
            lat: -36.818840,
            lng: 174.732529
        },
        zoom: 11
    };

    useEffect(() => {
        if (searchDestination) {
            setJourneyMapPoints([]);
            setSelectedJourneyOption(null);
            (async function (){
                const options = await getTransportation();
                setJourneyOptions(options);
            })();
        }
    }, [searchDestination]);

    useEffect(() => {
        if (selectedJourneyOption) {
            setJourneyMapPoints([1])
        }
    }, [selectedJourneyOption])

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

            {selectedJourneyOption == null && journeyOptions.length > 0 &&
                <JourneyOptionList journeys={journeyOptions} onOptionClick={onJourneyOptionClick} />
            }

            {selectedJourneyOption && (
                <GoogleMapContainer>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBy8azrhY9H5wtrRzBA2PTF4-wvGsTc4Xo" }}
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