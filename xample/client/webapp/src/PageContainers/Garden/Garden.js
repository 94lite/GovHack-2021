import React, { useState } from "react";
import { Tabs } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import Canvas from "./DisplayGarden/Canvas";
import GardenFooter from "./Footer";

const style = {
  display: "flex",
  flexDirection: "column",
  overFlow: "hidden",
  justifyContent: "space-between"
}

const body_style = {
  marginBottom: "64px"
}

const footer_style = {
  position: "absolute",
  bottom: "16px",
  width: "100vw",
  margin: "-16px",
  padding: "16px",
  borderTop: "1px solid black"
};

export default function Garden() {
  return (
    <div>
      <div style={style}>
        <Canvas />
        <div style={body_style}>
          Number of Trees
          Planted Trees
        </div>
      </div>
      <div style={footer_style}>
        <GardenFooter />
      </div>
    </div>
  )
}