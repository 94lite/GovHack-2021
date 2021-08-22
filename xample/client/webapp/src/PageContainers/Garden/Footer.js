import React, { useState } from "react";
import { Button, Modal } from "antd";
import RedeemTree from "./RedeemTree";

export default function GardenFooter() {
  const [modVis, setModVis] = useState(false);
  return (
    <div>
      <Modal
        className="garden-add garden-modal"
        visible={modVis}
        onCancel={() => setModVis(false)}
        centered
        title="Redeem Tree"
        footer={null}
        destroyOnClose
        bodyStyle={{ background: "#0D4227" }}
      >
        <RedeemTree
          setModVis={setModVis}
        />
      </Modal>
      <Button
        type="primary"
        block
        onClick={() => setModVis(true)}
        style={{ background: "#50A387", borderColor: "#50A387" }}
      >
        Add Tree
      </Button>
    </div>
  )
}