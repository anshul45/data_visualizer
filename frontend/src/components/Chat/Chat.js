import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import "./Chat.scss";
import { data } from "../../assets/data";

const Chat = () => {
  const filteredData = data.filter(
    (val) => val.country === "United States of America"
  );

  return (
    <div className="chatbox">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={300}
          height={200}
          data={data.filter(
            (val) => val.country === "United States of America"
          )}
        >
          <Line
            dot={false}
            type="monotone"
            dataKey="likelihood"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chat;
