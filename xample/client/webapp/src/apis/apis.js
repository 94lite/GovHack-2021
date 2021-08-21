import axios from "axios";

const BASE_URL = 'http://localhost:1000/api/';
const TRANSPORTATION = BASE_URL + "transportation";

export const getTransportation = async() => {
    try{
        const response = await axios.get(TRANSPORTATION);
        return response.data.results;
    } catch (err) {
        console.error(`getTransport threw error=[${err}]`);
        return null;
    }
}