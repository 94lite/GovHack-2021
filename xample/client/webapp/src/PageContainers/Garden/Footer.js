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
        centered
        title="Redeem Tree"
        footer={null}
        destroyOnClose
      >
        <RedeemTree
          setModVis={setModVis}
        />
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