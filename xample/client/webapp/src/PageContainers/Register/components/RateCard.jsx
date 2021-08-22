import { Rate } from "antd";

const RateCard = ({ title, rating }) => {
    return (
        <>
            {title && (
                <p>
                    <b>{title}</b>
                </p>
            )}
            <Rate disabled allowHalf defaultValue={rating / 2} />
        </>
    )
}

export default RateCard;