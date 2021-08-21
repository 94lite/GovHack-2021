import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Garden from './Garden/Garden';
import { Button } from "antd";
import MapsPage from './Maps/MapsPage';
import ProfilePage from './Profile/ProfilePage';
import RegisterPage from './Register/RegisterPage';

// Page options: "profile" (default), "maps", "garden"

export default function Routes() {
  // const [page, setPage] = useState("profile");
  const page = useSelector((state) => state.page);
  const setGlobalPage = useDispatch()
  const selectedCar = useSelector(state => state.profile.selectedCar);

  function setPage(location) {
    setGlobalPage({
      type: "SWAP_PAGE",
      page: location
    });
  }

  switch (page) {
    case "maps":
      return (
        <MapsPage />
      )
    case "history":
      return (
        <div>
          Journey History
        </div>
      )
    case "garden":
      return <Garden />
    case "profile":
      return <ProfilePage />
    case "register":
      return <RegisterPage />
    default:
      return (
        <div className="app-profile">
          <div>
            <Button
              type="primary"
              block
              onClick={() => setPage("maps")}
            >
              Maps
            </Button>
          </div>
          <div>
            <Button
              type="primary"
              block
              onClick={() => setPage("garden")}
            >
              Garden
            </Button>
          </div>
        </div>
      )
  }
}