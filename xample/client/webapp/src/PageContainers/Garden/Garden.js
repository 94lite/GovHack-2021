import React, { useState } from "react";
import { Tabs } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import { FaLeaf } from "react-icons/fa";
import Canvas from "./DisplayGarden/Canvas";
import GardenFooter from "./Footer";
import Charts from "./Charts";

const style = {
  display: "flex",
  flexDirection: "column",
  overFlow: "hidden",
  justifyContent: "space-between",
  margin: "-16px -16px 0 -16px",
  padding: "16px",
  background: "#0D4227"
}

const stat_style = {
  textAlign: "right",
  color: "white"
}

const body_style = {
  marginTop: "8px"
}

const footer_style = {
  position: "absolute",
  bottom: "16px",
  width: "100vw",
  margin: "-16px",
  padding: "16px",
  borderTop: "1px solid black",
  background: "#0D4227"
};

const wrapper_style = {
  height: "100%",
  margin: "0 -16px",
  padding: "32px",
  backgroundImage: `url('${process.env.PUBLIC_URL}/garden_background.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "bottom",
  backgroundSize: "contain",
  backgroundColor: "#0D4227"
}

export default function Garden() {
  return (
    <div style={wrapper_style}>
      <div style={style}>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
            <h3 style={{ color: "white" }}>Today</h3>
            <h3 style={{ color: "white" }}>4 <FaLeaf /></h3>
          </div>
          <Canvas />
        </div>
        <div style={body_style}>
          <div style={stat_style}>
            <span>Total number of trees: {8} <FaLeaf /></span>
          </div>
          <div style={stat_style}>
            <span>Total planted trees: {6} <FaLeaf /></span>
          </div>
          <Charts />
        </div>
      </div>
      <div style={footer_style}>
        <GardenFooter />
      </div>
    </div>
  )
}