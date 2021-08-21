import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from "antd";

// Page options: "profile" (default), "maps", "garden"

export default function Routes() {
  // const [page, setPage] = useState("profile");
  const page = useSelector((state) => state.page);
  const setGlobalPage = useDispatch()

  function setPage(location) {
    setGlobalPage({
      type: "SWAP_PAGE",
      page: location
    });
  }

  switch (page) {
    case "maps":
      return (
        <div>
          Maps
        </div>
      )
    case "garden":
      return (
        <div>
          Garden
        </div>
      )
    case "profile":
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