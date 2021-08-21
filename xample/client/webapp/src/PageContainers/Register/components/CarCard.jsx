import { Modal } from "antd";

/**
 * 
 * {"plate": "LQG375",
    "model": "HONDA CIVIC",
    "manufactured_year": "2009",
    "fuel_type": "Petrol hybrid",
    "carbon_emission_rate": 11,
    "fuel_economy_rate": 11,
    "air_pollution_rate": 9,
    "carbon_emission_description": "This vehicle emits  a very small amount of CO2 gas. 90 gram/km  = 1.25&nbsp;tonnes/year based on driving 14,000 km per year.",
    "fuel_economy_description": "3.9 litres/100km\nThe on-road fuel cost of this vehicle is estimated at  $1,090 / year based on driving 14,000 km per year.",
    "air_pollution_description": "Based on test regime JDAA."} param0 
 */
const CarCard = ({ car, isVisible, onCancel }) => {
    return (
        <Modal title={car.model}
            visible={isVisible}
            onCancel={onCancel}
            okText="Select">
            <p>
                {car.manufactured_year} Plate: {car.plate}
            </p>
        </Modal>
    )
}

export default CarCard;