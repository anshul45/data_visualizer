import React from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useSelector } from "react-redux";

const Chat2 = () => {
  const data = useSelector((store) => store.data.allData);

  const relevanceCounts = data.reduce((acc, item) => {
    if (item.relevance !== "") {
      acc[item.relevance] = (acc[item.relevance] || 0) + 1;
    }
    return acc;
  }, {});

  const relevanceData = Object.keys(relevanceCounts).map(
    (relevance, index) => ({
      relevance,
      count: relevanceCounts[relevance],
      fill: `hsl(${
        (index / Object.keys(relevanceCounts).length) * 360
      }, 100%, 50%)`,
    })
  );

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const { relevance, count, fill } = payload[0].payload;
      console.log(fill);
      return (
        <div className="custom-tooltip">
          <p
            style={{ color: fill, font: "bold" }}
          >{`likelyhood: ${relevance}`}</p>
          <p style={{ color: fill }}>{`Count: ${count}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="90%" height="84%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="5%"
        outerRadius="110%"
        barSize={6}
        data={relevanceData}
      >
        <RadialBar
          minAngle={10}
          background
          clockWise
          dataKey="relevance"
          fill="#8884d8"
        />
        <Tooltip content={<CustomTooltip />} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default Chat2;
