import axios from "axios";

const BASE_URL = 'http://localhost:1000/api/';
const TRANSPORTATION = BASE_URL + "transportation";
const SEARCH_CAR = BASE_URL + "car/search/";

export const getTransportation = async() => {
    try{
        const response = await axios.get(TRANSPORTATION);
        return response.data.results;
    } catch (err) {
        console.error(`getTransport threw error=[${err}]`);
        return null;
    }
}

export const searchCar = async(carPlate) => {
    try {
        const response = await axios.get(SEARCH_CAR + carPlate);
        return response.data;
    } catch (err) {
        console.error(`searchCar threw error=[${err}]`);
        return null;
    }
}

export const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const GET_INDUSTRY = BASE_URL + "garden/industry/"

export const getIndustryUsage = async() => {
    try {
        const response = await axios.get(GET_INDUSTRY);
        return response.data;
    } catch (err) {
        console.error(`getIndustryUsage threw error=[${err}]`);
        return null;
    }
}