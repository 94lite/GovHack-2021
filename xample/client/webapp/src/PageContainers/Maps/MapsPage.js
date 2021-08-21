import { MinusCircleOutlined } from '@ant-design/icons';
import GoogleMapReact from 'google-map-react';
import { useEffect, useState } from 'react';
import JourneyOptionList from './components/JourneyOptionList';
import { GoogleMapContainer, MapsPage as StyledMapsPage, StyledSearch } from "./styles";

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
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    useEffect(() => {
        if (searchDestination) {
            setJourneyOptions(journeys);
            setSelectedJourneyOption(null);
            setJourneyMapPoints([]);
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
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom} />
                </GoogleMapContainer>)
            }
        </StyledMapsPage>
    )
}

export default MapsPage;