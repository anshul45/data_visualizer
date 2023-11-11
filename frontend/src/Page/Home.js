import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import RadialChart from "../components/radialBarChart/RadialChart";

const Home = () => {
  return (
    <div className="flex gap-5">
      <div className="flex-initial">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="p-6">Data Visulizer Dashboard.</div>
        <div className="pt-6 px-6">
          <div className="p-5 rounded-lg border-2 w-96 h-96">
            <RadialChart />
          </div>
          <div className="p-5 rounded-lg border-2 "></div>
          <div className="p-5 rounded-lg border-2 "> intensity</div>
          <div className="p-5 rounded-lg border-2 "> intensity</div>
          <div className="p-5 rounded-lg border-2">box5</div>
          <div className="p-5 rounded-lg border-2">box6</div>
          <div className="p-5 rounded-lg border-2">box7</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
