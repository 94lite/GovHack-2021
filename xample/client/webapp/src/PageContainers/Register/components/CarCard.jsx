import { Modal } from "antd";
import CarDetails from "./CarDetails";



/**
 * 
 * {"plate":"FDQ40",
 * "model":"SUZUKI SWIFT",
 * "manufactured_year":"2009",
 * "fuel_type":"Petrol",
 * "image_url":"https://rc-resources.dotnous.com/vehicles/SUZUKI/detail/RS415GLXHAS;.png",
 * "carbon_emission_rate":9,
 * "fuel_economy_rate":9,
 * "air_pollution_rate":6,
 * "carbon_emission_description":"This vehicle emits a small amount of CO2 gas. 152 gram/km  = 2.12&nbsp;tonnes/year based on driving 14,000 km per year.","fuel_economy_description":"6.6 litres/100km\nThe on-road fuel cost of this vehicle is estimated at  $1,850 / year based on driving 14,000 km per year.","air_pollution_description":"Based on test regime A79/01."}
 */
const CarCard = ({ car, isVisible, onCancel, onOk }) => {
    const title = `${car.model} (${car.manufactured_year})`;

    return (
        <Modal title={<b>{title}</b>}
            visible={isVisible}
            onCancel={onCancel}
            onOk={onOk}
            okText="Select">
            <CarDetails car={car} />

        </Modal>
    )
}

export default CarCard;