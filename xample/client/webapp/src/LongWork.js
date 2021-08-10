import React, { useState } from 'react';
import axios from 'axios';

export default function LongWork() {
  function sendRequest() {
    axios
      .post("/api/long_work")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <div style={style}>
      <button onClick={() => sendRequest()}>add long task</button>
    </div>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignContent: 'center',
  marginTop: '24px'
}