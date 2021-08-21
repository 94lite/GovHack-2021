import { Card, Col, Row } from "antd";
import Title from "antd/lib/typography/Title";

const JourneyOptionList = ({ journeys, onOptionClick }) => {
    return (
        <div>
            {journeys.map(journey => getJourneyCard(journey, onOptionClick))}
        </div>
    )
}

/**
     *    type: 'Car',
        leaveAtTime: '2:22pm',
        arriveByTime: '2:59pm',
        emissionsByGrams: '1590g'
     */
const getJourneyCard = (journey, onOptionClick) => {
    return (
        <div style={{ padding: 8, paddingBottom: 8, paddingTop: 0 }}>
            <Card hoverable style={{ width: "100%" }} onClick={() => onOptionClick(journey)}>
                <Row gutter={[0, 12]}>
                    <Col span={12}>
                        <Title level={5}>{journey.type}</Title>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                        <div style={{ textAlign: 'center', backgroundColor: "#108ee9", marginRight: 0, paddingTop: 2, paddingBottom: 2, paddingLeft: 12, paddingRight: 12 }}>
                            <span style={{color:'white', fontSize:16}}><b>{journey.emissionsByGrams}</b></span>
                        </div>
                    </Col>
                    <Col span={12}>
                        <b>Leave at {journey.leaveAtTime}</b>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                        Arrive by {journey.arriveByTime}
                    </Col>
                </Row>
            </Card>
        </div>
    );

}

export default JourneyOptionList;