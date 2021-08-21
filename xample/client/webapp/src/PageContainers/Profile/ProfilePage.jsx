import { Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarDetails from "../Register/components/CarDetails";

const ProfilePage = () => {
    const dispatch = useDispatch();
    const selectedCar = useSelector(state => state.profile.selectedCar);

    const onRegisterClick = () => {
        dispatch({
            type: "SWAP_PAGE",
            page: 'register'
        });
    }
    
    const onRemoveCar = () => {
        dispatch({
            type: "REMOVE_CAR"
        })
    }

    return (
        selectedCar == null ? (

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '80vh' }}>
                <div style={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
                    <h1>You can register your car and hop card</h1>
                    <hr />
                    <p>Register your vehicle model to be able to check C02 emissions</p>
                    <Button type="primary" style={{ width: '100%', paddingLeft: '5em', paddingRight: '5em' }} onClick={onRegisterClick}>
                        Register
                    </Button>
                </div>
            </div>
        ) : <>
            <b>
                {selectedCar.model} ({selectedCar.manufactured_year})
            </b>
            <CarDetails car={selectedCar} />
            <br />
            <Button type="primary" onClick={onRemoveCar}>Remove car</Button>
        </>
    )
}

export default ProfilePage;