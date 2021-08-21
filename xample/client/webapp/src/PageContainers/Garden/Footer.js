import React, { useState } from "react";
import { Button, Modal } from "antd";
import RedeemTree from "./RedeemTree";

export default function GardenFooter() {
  const [modVis, setModVis] = useState(false);
  return (
    <div>
      <Modal
        visible={modVis}
        onCancel={() => setModVis(false)}
        okText="Redeem"
        centered
        title="Redeem Tree"
      >
        <RedeemTree />
      </Modal>
      <Button
        type="primary"
        block
        onClick={() => setModVis(true)}
      >
        Add Tree
      </Button>
    </div>
  )
}