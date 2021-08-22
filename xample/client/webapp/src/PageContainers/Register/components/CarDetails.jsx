import { Col, Row } from "antd";
import RateCard from "./RateCard";

/**
 * returns paragraphs of text in list
 */
const fixEscape = (nonEscapedText) => {
    return nonEscapedText.replace('&nbsp', ' ');
}

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
const CarDetails = ({ car }) => {
    return (
        <>
            <div>
                <img src={car.image_url} alt="Car image" style={{ width: '100%' }} />
            </div>
            <div style={{ padding: '1em' }}>
                <h2><b>Environmental ratings</b></h2>
                <Row>
                    <Col span={12}>
                        <RateCard title="Fuel economy" rating={car.fuel_economy_rate} />
                    </Col>
                    <Col span={12}>
                        <RateCard title="Carbon emissions" rating={car.carbon_emission_rate} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <RateCard title="Air pollution" rating={car.air_pollution_rate} />
                    </Col>
                </Row>
            </div>
            <br />
            <div style={{ backgroundColor: '#F4F5F7', padding: '1em' }}>
                <h2><b>Carbon emissions</b></h2>
                <Row>
                    <Col span={24}>
                        <RateCard title="" rating={car.carbon_emission_rate} />
                    </Col>
                </Row>
                <p>
                    {fixEscape(car.carbon_emission_description)}
                </p>
                <p>
                    {fixEscape(car.fuel_economy_description)}
                </p>
            </div>
        </>
    )
}

export default CarDetails;