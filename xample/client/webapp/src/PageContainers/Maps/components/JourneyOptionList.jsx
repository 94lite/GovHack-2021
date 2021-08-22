import { Card, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";
import moment from "moment";
const JourneyOptionList = ({ journeys, onOptionClick }) => {
    return (
        <div>
            {journeys && journeys.map(journey => getJourneyCard(journey, onOptionClick))}
        </div>
    )
}

/**
    "name": "Ferry",
    "carbon_point_per_km": 19.0,
    "speed_km_per_hour": 0.0
     */
const getJourneyCard = (journey, onOptionClick) => {
    return (
        <div style={{ padding: 8, paddingBottom: 8, paddingTop: 0 }}>
            <Card hoverable style={{ width: "100%" }} onClick={() => onOptionClick(journey)}>
                <Row gutter={[0, 12]}>
                    <Col span={12}>
                        <Title level={5}>{journey.name}</Title>
                    </Col>
                    <Col offset={7} span={5} style={{ textAlign: "right" }}>
                        <div style={{ textAlign: 'center', backgroundColor: "#108ee9", marginRight: 0, paddingTop: 2, paddingBottom: 2, paddingLeft: 12, paddingRight: 12 }}>
                            <span style={{color:'white', fontSize:16}}><b>{journey.carbon_point_per_km}</b></span>
                        </div>
                    </Col>
                    <Col span={12}>
                        <b>Leave at {moment().format('h:mm:ss a')}</b>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                        Arrive by {moment().add(1, 'hours').format('h:mm:ss a')}
                    </Col>
                </Row>
            </Card>
        </div>
    );

}

export default JourneyOptionList;