import React, { useState } from "react";
import { Card } from "antd";

const image = {
  height: "160px"
}

const p_style= {
  margin: "0 0 4px 0"
}

export default function TreeInfo() {
  return (
    <div>
      <div style={image}>
        <img 
          src={process.env.PUBLIC_URL + "/planted.jpeg"}
          alt="Italian Trulli"
          style={{ 
            width: "100%",
            height: "100%",
            objectFit: "cover",
            overflow: "hidden"
          }} 
        />
      </div>
      <Card
        title="Kahikatea"
        size="small"
      >
        <p style={p_style}><u>Genus:</u> <i>Dacrycarpus</i></p>
        <p style={p_style}><u>Description:</u> This tall swamp tree was around in the Jurassic period, which is why they are sometimes called dinosaur trees.</p>
        <p style={p_style}><u>Plantation Date:</u> 24 Nov. 2020</p>
      </Card>
    </div>
  )
}