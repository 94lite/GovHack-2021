import Search from "antd/lib/input/Search";
import { useEffect, useState } from "react";
import { searchCar } from "../../apis/apis";
import CarCard from "./components/CarCard";

const RegisterPage = () => {
    const [car, setCar] = useState(null);
    const [isCarVisible, setIsCarVisible] = useState(false);

    const onSearch = (value) => {
        console.log(`Registering plate number=[${value}]`);
        (async () => {
            const searchedCar = await searchCar(value);
            console.log(`Car search returned=[${JSON.stringify(searchedCar)}]`);
            if (searchedCar) {
                setCar(searchedCar);
            }
        })();
    }

    const onModalCancel = () => {
        setIsCarVisible(false);
    }

    useEffect(() => {
        if (car) {
            setIsCarVisible(true);
        }
    }, [car])

    return (
        <>
            <div style={{ marginTop: '10vh', marginBottom: '10vh' }}>
                <h2>
                    <b>How much C02 does your vehicle produce?</b>
                </h2>
                <p>
                    <b>
                        Check how much you can save
                    </b>
                </p>
            </div>
            <div style={{ border: '2px solid black', padding: 10, borderRadius: 12 }}>
                <h2>
                    Find a car
                </h2>
                <p>
                    Search by plate number
                </p>
                <Search placeholder="e.g. VEH338" onSearch={onSearch} enterButton />
            </div>
            {car && (
                <div style={{padding: 10}}>
                    <CarCard car={car} isVisible={isCarVisible} onCancel={onModalCancel} />
                </div>
            )}
        </>
    )
}

export default RegisterPage;