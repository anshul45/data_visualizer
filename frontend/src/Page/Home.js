import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat1 from "../components/Chart/Chat1";
import Chat2 from "../components/Chart/Chat2";
import Chat3 from "../components/Chart/Chat3";
import Chat4 from "../components/Chart/Chat4";
import { useSelector } from "react-redux";
import { generateFilterData } from "../utils/filterData";

const Home = () => {
  const data = useSelector((store) => store.data.allData);
  const relevanceData = generateFilterData(data, "relevance");
  const countryData = generateFilterData(data, "country");
  const topicData = generateFilterData(data, "topic");
  const regionData = generateFilterData(data, "region");

  return (
    <div className="flex gap-5 pb-7">
      <div className="flex-[1] flex-wrap">
        <Sidebar />
      </div>
      <div className="flex-[5] flex flex-col">
        <div className="p-6">Data Visulizer Dashboard.</div>
        <div className="pt-6 px-6 grid gap-5 grid-cols-4 auto-rows-[minmax(220px,auto)]">
          <div className="p-5 rounded-lg border-2 flex flex-col items-center gap-7">
            <h1 className="">Intensity</h1>
            <Chat1 />
          </div>

          <div className="p-5 rounded-lg border-2 col-span-2 flex flex-col items-center">
            <h1>Country</h1>
            <Chat3 data={countryData} value={"country"} />
          </div>
          <div className="p-5 rounded-lg border-2 flex flex-col items-center">
            <h1>Likelyhood</h1>
            <Chat2 />
          </div>
          <div className="p-5 rounded-lg border-2 col-span-3 flex flex-col items-center">
            <h1>Year</h1>
            <Chat4 />
          </div>
          <div className="p-5 rounded-lg border-2 flex flex-col items-center">
            <h1>Relevance</h1>
            <Chat3 data={relevanceData} value={"relevance"} />
          </div>
          <div className="p-5 rounded-lg border-2 flex flex-col col-span-2 items-center">
            <h1>Topics</h1>
            <Chat3 data={topicData} value={"topic"} />
          </div>
          <div className="p-5 rounded-lg border-2 flex flex-col col-span-2 items-center">
            <h1>Region</h1>
            <Chat3 data={regionData} value={"region"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
