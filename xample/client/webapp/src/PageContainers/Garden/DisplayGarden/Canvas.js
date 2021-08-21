import React, { useState } from "react";
import { GiFern, GiFruitTree, GiPalmTree, GiTreeDoor } from 'react-icons/gi';
import { Modal } from "antd";
import TreeInfo from "./TreeInfo";

const style = {
  height: "calc(50vw - 16px)",
  backgroundImage: `url('${process.env.PUBLIC_URL}/ForestDraft.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "center center",
  backgroundSize: "contain"
};

function getStyle(x, y) {
  return ({
    position: "relative",
    fontSize: "40px",
    color: "green",
    top: `${y}vw`,
    left: `${x}vw`
  })
}

export default function Canvas() {
  const [focus, setFocus] = useState(undefined);
  return (
    <div style={style}>
      <Modal
        visible={focus !== undefined}
        footer={null}
        onCancel={() => setFocus(undefined)}
        title={focus}
      >
        <TreeInfo />
      </Modal>
      <GiTreeDoor
        style={getStyle(10, 10)}
        onClick={() => setFocus("what")}
      />
      <GiFruitTree 
        style={getStyle(12, 15)}
        onClick={() => setFocus("what")}
      />
      <GiFruitTree 
        style={getStyle(18, 5)}
        onClick={() => setFocus("what")}
      />
      <GiFruitTree 
        style={getStyle(18, 0)}
        onClick={() => setFocus("what")}
      />
      <GiFruitTree 
        style={getStyle(15, 6)}
        onClick={() => setFocus("what")}
      />
      <GiPalmTree 
        style={getStyle(0, 14)}
        onClick={() => setFocus("what")}
      />
      <GiPalmTree 
        style={getStyle(-3, 17)}
      />
    </div>
  )
}