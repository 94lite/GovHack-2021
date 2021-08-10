import React, { useState } from 'react';
import axios from 'axios';

export default function DisplayTime() {
  const [time, setTime] = useState(undefined);

  function getTime() {
    axios
      .get("/api/time")
      .then(res => {
        console.log(res);
        if (res.data.success) {
          setTime(res.data.time);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div style={style}>
      <button onClick={() => getTime()}>get time</button>
      <div>{time}</div>
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