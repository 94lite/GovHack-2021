import React, { useState } from 'react';
import Routes from './Routes';

const container = {
  padding: "16px",
  boxSizing: "border-box"
};

export default function Template() {
  return (
    <div style={container}>
      <Routes />
    </div>
  )
}