import React, { useState } from "react";

const style = {
  height: "calc(100vw - 32px)",
  backgroundImage: `url('${process.env.PUBLIC_URL}/ForestDraft.png')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "center center",
  backgroundSize: "contain"
};

export default function Canvas() {
  return (
    <div style={style}>
      
    </div>
  )
}