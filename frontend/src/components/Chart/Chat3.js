import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

const Chat3 = ({ data, value }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const chartData = payload[0].payload;

      return (
        <div className="custom-tooltip bg-neutral-200 text-blue-700">
          <p>{`${value}: ${chartData[value]}`}</p>
          <p>{`Count: ${chartData.count}`}</p>
        </div>
      );
    }

    return null;
  };

  if (!data.length)
    return (
      <div className="font-extrabold text-3xl mt-9 text-center text-black p-3">
        Sorry no data!
      </div>
    );

  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey={isNaN(value) ? "count" : value} fill="#8884d8" />
        <Tooltip cursor={{ fill: "none" }} content={<CustomTooltip />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chat3;
