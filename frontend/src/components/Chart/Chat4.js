import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";

const Chat4 = () => {
  const data = useSelector((store) => store.data.allData);

  const filteredData = data.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.topic === item.topic);

    if (!existingItem && item.start_year !== "" && item.end_year !== "") {
      acc.push(item);
    }

    return acc.sort((a, b) => b.count - a.count).slice(0, 10);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="85%">
      <BarChart
        data={filteredData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="topic" />
        <Tooltip />
        <Bar dataKey="start_year" fill="#8884d8" />
        <Bar dataKey="end_year" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chat4;