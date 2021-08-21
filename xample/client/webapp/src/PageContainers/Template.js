import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Drawer } from "antd";
import { CloseSquareOutlined, CloseOutlined, MenuOutlined } from '@ant-design/icons';
import Routes from './Routes';

const header_style = {
  color: "white",
  background: "#002766",
  padding: "16px",
  fontSize: "larger",
  display: "flex",
  alignItems: "center"
};

const body_style = {
  padding: "16px",
  boxSizing: "border-box"
};

const menu_head_style = {
  color: "white",
  fontSize: "larger"
};

const menu_item_style = {
  padding: "8px 16px",
  borderBottom: "2px solid black",
  fontSize: "larger"
};

const menu_items = [
  ["Journey Planner", "maps", <CloseSquareOutlined />],
  ["Journey History", "history", <CloseSquareOutlined />],
  ["Garden", "garden", <CloseSquareOutlined />],
  ["Profile", 'profile', <CloseSquareOutlined />]
]

export default function Template() {
  const [menuVis, setMenuVis] = useState(false);
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

  return (
    <div>
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
        <MenuOutlined
          onClick={() => setMenuVis(true)}
        />
        <span style={{ marginLeft: "8px" }}>Hello World</span>
      </div>
      <div style={body_style}>
        <Routes />
      </div>
    </div>
  )
}