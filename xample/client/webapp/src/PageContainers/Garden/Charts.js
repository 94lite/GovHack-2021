import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, Tabs } from "antd"
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { ResponsiveBar } from '@nivo/bar';
import { RiMedalFill } from "react-icons/ri";
import { FaLeaf } from "react-icons/fa";
import axios from "axios"

const p_style = {
  margin: 0,
  display: "flex",
  justifyContent: "space-between"
};

export default function Charts() {
  const [industryAvg, setAvg] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:1000/api/garden/industry/Information media and telecommunications').then(res => setAvg(res.data)).catch(err => console.log(err))
  }, []);
  const collabData = useSelector((state) => state.company_data);
  const recentData = useSelector((state) => state.recent_data);
  const max = Math.max.apply(Math, recentData.map(function(o) { return o.planted; }));
  const min = max/20;
  const data = recentData.map(item => {
    if (item.planted < min) {
      item.planted = min;
    }
    return item;
  });
  
  const max2 = Math.max.apply(Math, recentData.map(function(o) { return o.planted; }));
  const min2 = max2/20;
  const data2 = collabData.map(item => {
    if (item.planted < min2) {
      item.planted = min2;
    }
    return item;
  });
  const diff = (data2[data2.length - 1].planted - data2[data2.length - 2].planted) - (data2[data2.length - 2].planted - data2[data2.length - 3].planted);
  return (
    <div>
      <Tabs className="garden-charts" size="small">
        <Tabs.TabPane tab="Recent" key="recent">
          <div style={{ height: "140px", width: "100%", marginTop: "16px" }}>
            <ResponsiveBar
              data={data}
              keys={['planted']}
              indexBy="day"
              colors={bar => data[bar.index].color}
              enableLabel={false}
              enableGridY={false}
              isInteractive={false}
              axisBottom={{
                enable: true
              }}
              borderColor="#ffffff"
            />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Collaborative" key="collab">
          <div style={{ height: "140px", width: "100%", marginTop: "16px" }}>
            <ResponsiveBar
              data={data2}
              keys={['planted']}
              indexBy="month"
              colors={bar => data2[bar.index].color}
              enableLabel={false}
              enableGridY={false}
              isInteractive={false}
              axisBottom={{
                enable: true
              }}
              borderColor="#ffffff"
            />
          </div>
          <div style={{ marginTop: "8px" }}>
            <Card title="Collaborative" size="small">
              <p style={{ ...p_style, borderBottom: "1px solid #50A387" }}><span>Registered:</span><span>Co-Tree <RiMedalFill style={{ color: "#faad14" }} /></span></p>
              <p style={p_style}><span>Total this month:</span><span>{data2[data2.length - 1].planted - data2[data2.length - 2].planted} <FaLeaf/></span></p>
              <p style={p_style}><span style={{ marginLeft: "16px" }}>Average Contribution:</span><span>{(data2[data2.length - 1].planted - data2[data2.length - 2].planted)/6} <FaLeaf/></span></p>
              <p style={{ ...p_style, borderBottom: "1px solid #50A387" }}><span style={{ marginLeft: "16px" }}>Performance Difference:</span><span style={{ color: diff === 0 ? undefined : diff > 0 ? "#52c41a" : "#f5222d" }}>{diff === 0 ? null : diff > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />}{diff} <FaLeaf/></span></p>
              <p style={p_style}><span style={{ marginLeft: "16px" }}>Accumulated Total:</span><span>{data2[data2.length - 1].planted} <FaLeaf/></span></p>
              <p style={p_style}><span style={{ marginLeft: "16px" }}>(Industry Average):</span><span><CaretDownOutlined style={{ color: "#f5222d" }}/> {Math.round(industryAvg)} <FaLeaf/></span></p>
              <p style={p_style}><span><b>Impact:</b></span><span style={{ color: "#13c2c2" }}><b>{Math.round(data2[data2.length - 1].planted - industryAvg)}</b> <FaLeaf/></span></p>
            </Card>
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}