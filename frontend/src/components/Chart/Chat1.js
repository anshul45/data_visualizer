import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { useSelector } from "react-redux";

const Chat1 = () => {
  const data = useSelector((store) => store.data.allData);

  const intensityCounts = data.reduce((acc, item) => {
    if (item.intensity !== "" && item.intensity !== null) {
      acc[item.intensity] = (acc[item.intensity] || 0) + 1;
    }
    return acc;
  }, {});

  const intensityData = Object.keys(intensityCounts).map((intensity) => ({
    intensity,
    count: intensityCounts[intensity],
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      const { intensity, count } = payload[0].payload;

      return (
        <div className="custom-tooltip">
          <p>{`Intensity: ${intensity}`}</p>
          <p>{`Count: ${count}`}</p>
        </div>
      );
    }

    return null;
  };

  if (!intensityData.length)
    return (
      <div className="font-extrabold text-3xl mt-9 text-center">
        Sorry no data!
      </div>
    );

  return (
    <>
      {!intensityData && <div>Sorry no data!</div>}
      <ResponsiveContainer width="95%" height="50%">
        <LineChart width={30} height={50} data={intensityData}>
          <Line type="monotone" dataKey="intensity" dot={false} />
          <Tooltip content={<CustomTooltip />} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chat1;
