import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Drawer } from "antd";
import { CloseSquareOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { RiPlantLine, RiHistoryFill, RiPlantFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { GiPathDistance } from "react-icons/gi";
import Routes from './Routes';

const header_style = {
  color: "white",
  background: "#0D4227",
  padding: "24px",
  fontSize: "larger",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const body_style = {
  padding: "16px",
  boxSizing: "border-box",
  flexGrow: 1
};

const menu_head_style = {
  color: "white",
  fontSize: "larger"
};

const menu_item_style = {
  padding: "16px 16px 16px",
  borderBottom: "2px solid black",
  fontSize: "larger"
};

const menu_items = [
  ["Journey Planner", "maps", <GiPathDistance />],
  ["Journey History", "history", <RiHistoryFill />],
  ["Garden", "garden", <RiPlantFill />],
  ["Profile", 'profile', <CgProfile />]
]

export default function Template() {
  const [menuVis, setMenuVis] = useState(false);
  const page = useSelector((state) => state.page)
  const bank = useSelector((state) => state.bank);
  const dispatch = useDispatch()
  
  const renderMenuItems = () => {
    return menu_items.map(item => {
      return (
        <div
          key={item[0]}
          onClick={() => dispatch({ type: "SWAP_PAGE", page: item[1] })}
          style={menu_item_style}
        >
          {item[2]}<span style={{ marginLeft: "8px" }}>{item[0]}</span>
        </div>
      )
    });
  }

  function getHeading() {
    switch (page) {
      case "maps":
        return "Journey Planner";
      case "history":
        return "Journey History";
      case "garden":
        return "Garden";
      case "profile":
        return "Profile"
      default:
        return "Profile"
    }
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Drawer
        title={
          <span style={menu_head_style}>
            Noah's Ark
          </span>
        }
        placement="left"
        visible={menuVis}
        onClose={() => setMenuVis(false)}
        closeIcon={<CloseOutlined style={{ color: "white"}} />}
        bodyStyle={{
          padding: "0",
          color: "white"
        }}
        headerStyle={{ background: "#002766" }}
        drawerStyle={{ background: "#002766" }}
      >
        {renderMenuItems()}
      </Drawer>
      <div style={header_style}>
        <span>
          <MenuOutlined
            onClick={() => setMenuVis(true)}
          />
          <span style={{ marginLeft: "8px" }}>
            {getHeading()}
          </span>
        </span>
        <span>{bank} <RiPlantLine style={{ marginBottom: "-2px" }} /></span>
      </div>
      <div style={body_style}>
        <Routes />
      </div>
    </div>
  )
}