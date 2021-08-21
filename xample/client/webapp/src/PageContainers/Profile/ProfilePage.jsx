import { Button } from "antd";
import { useDispatch } from "react-redux";

const ProfilePage = () => {
    const setGlobalPage = useDispatch();

    const onRegisterClick = () => {
        setGlobalPage({
            type: "SWAP_PAGE",
            page: 'register'
          });
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '80vh' }}>
            <div style={{paddingLeft: '10vw', paddingRight: '10vw'}}>
                <h1>You can register your car and hop card</h1>
                <hr />
                <p>Register your vehicle model to be able to check C02 emissions</p>
                <Button type="primary" style={{ width: '100%', paddingLeft: '5em', paddingRight: '5em' }} onClick={onRegisterClick}>
                    Register
                </Button>
            </div>
        </div>
    )
}

export default ProfilePage;