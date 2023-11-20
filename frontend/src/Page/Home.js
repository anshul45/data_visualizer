import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat1 from "../components/Chart/Chat1";
import Chat2 from "../components/Chart/Chat2";
import Chat3 from "../components/Chart/Chat3";
import Chat4 from "../components/Chart/Chat4";
import { useSelector, useDispatch } from "react-redux";
import { generateFilterData } from "../utils/filterData";
import { setData } from "../utils/dataSlice";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lively-seal-fez.cyclic.app/api/v1/data"
      );
      if (!response || !response.data) {
        throw new Error(`Invalid response from server`);
      }
      setLoading(false);
      dispatch(setData(response.data));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [dispatch]);

  const data = useSelector((store) => store.data.allData);
  const relevanceData = generateFilterData(data, "relevance");
  const countryData = generateFilterData(data, "country");
  const topicData = generateFilterData(data, "topic");
  const regionData = generateFilterData(data, "region");
  if (loading) {
    return (
      <div className="mt-72 font-semibold text-neutral-500 text-3xl text-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="flex">
      <div className="flex-[1] flex-wrap bg-neutral-200 ">
        <Sidebar />
      </div>
      <div className="flex-[5] flex flex-col pb-7">
        <div className="p-6 font-medium bg-neutral-200">
          Data Visulizer Dashboard
        </div>
        <div className="pt-6 px-6 grid gap-5 grid-cols-4 auto-rows-[minmax(220px,auto)]">
          <div className="p-5 rounded-lg flex flex-col items-center gap-7 bg-neutral-200">
            <h1>Intensity</h1>
            <Chat1 />
          </div>

          <div className="p-5 rounded-lg bg-neutral-200 col-span-2 flex flex-col items-center">
            <h1>Country</h1>
            <Chat3 data={countryData} value={"country"} />
          </div>
          <div className="p-5 rounded-lg bg-neutral-200 flex flex-col items-center">
            <h1>Likelyhood</h1>
            <Chat2 />
          </div>
          <div className="p-5 rounded-lg bg-neutral-200 col-span-3 flex flex-col items-center">
            <h1>Year</h1>
            <Chat4 />
          </div>
          <div className="p-5 rounded-lg bg-neutral-200 flex flex-col items-center">
            <h1>Relevance</h1>
            <Chat3 data={relevanceData} value={"relevance"} />
          </div>
          <div className="p-5 rounded-lg bg-neutral-200 flex flex-col col-span-2 items-center">
            <h1>Topics</h1>
            <Chat3 data={topicData} value={"topic"} />
          </div>
          <div className="p-5 rounded-lg bg-neutral-200 flex flex-col col-span-2 items-center">
            <h1>Region</h1>
            <Chat3 data={regionData} value={"region"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
