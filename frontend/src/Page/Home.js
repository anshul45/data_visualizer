import React from "react";
import "./Home.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat";

const Home = () => {
  return (
    <div className="Home">
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <div className="head">Data Visulizer Dashboard.</div>
        <div className="allChats">
          <div className="box box1">box1</div>
          <div className="box box2">
            <Chat />
          </div>
          <div className="box box3">likelyhood</div>
          <div className="box box4">box4</div>
          <div className="box box5">box5</div>
          <div className="box box6">box6</div>
          <div className="box box7">box7</div>
          <div className="box box8">box8</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
