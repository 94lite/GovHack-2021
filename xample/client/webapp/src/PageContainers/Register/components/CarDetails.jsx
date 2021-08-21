import { Col, Row } from "antd";
import RateCard from "./RateCard";

const CarDetails = ({car}) => {
    return (
        <>
            <div>
                <img src={car.image_url} alt="Car image" style={{ width: '100%' }} />
            </div>
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
        </>
    )
}

export default CarDetails;