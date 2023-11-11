import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

const Chat3 = ({ data, value }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const chartData = payload[0].payload;

      return (
        <div className="custom-tooltip">
          <p className="text-green-600">{`${value}: ${chartData[value]}`}</p>
          <p className="text-green-600">{`Count: ${chartData.count}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart width={150} height={40} data={data}>
        <Bar
          dataKey={isNaN(value) ? "count" : value}
          fill="#8884d8"
          barSize={20}
        />
        <Tooltip content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chat3;
