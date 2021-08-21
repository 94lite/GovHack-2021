import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Tabs } from "antd"
import { ResponsiveBar } from '@nivo/bar'

export default function Charts() {
  const recentData = useSelector((state) => state.recent_data);
  const max = Math.max.apply(Math, recentData.map(function(o) { return o.planted; }));
  const min = max/20;
  const data = recentData.map(item => {
    if (item.planted < min) {
      item.planted = min;
    }
    return item;
  });
  return (
    <div>
      <Tabs className="garden-charts" size="small">
        <Tabs.TabPane tab="Recent" key="recent">
          <div style={{ height: "160px", width: "100%", marginTop: "16px" }}>
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
        <Tabs.TabPane tab="History" key="history">
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}