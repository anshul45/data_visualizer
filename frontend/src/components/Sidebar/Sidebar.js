import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { useDispatch } from "react-redux";
import { filterData, refresh } from "../../utils/dataSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [openCategory, setOpenCategory] = useState(null);

  const sidebarData = [
    "country",
    "year",
    "impact",
    "pestle",
    "region",
    "relevance",
    "sector",
    "source",
    "topic",
  ];

  const categories = {
    topic: [
      "gas",
      "oil",
      "market",
      "gdp",
      "energy",
      "production",
      "export",
      "economy",
      "growth",
    ],
    sector: [
      "Aerospace & defence",
      "Energy",
      "Environment",
      "Financial services",
      "Government",
      "Information Technology",
      "Manufacturing",
      "Retail",
      "Support services",
      "Retail",
      "Food & agriculture",
    ],
    region: [
      "Africa",
      "Eastern Asia",
      "Eastern Europe",
      "Northern Africa",
      "Northern America",
      "Northern Europe",
      "Southern Asia",
      "world",
      "Western Africa",
      "Western Asia",
      "Northern Europe",
    ],
    pestle: [
      "Economic",
      "Environmental",
      "Industries",
      "Organization",
      "Political",
      "Social",
      "Technological",
    ],
    source: [
      "Bloomberg Business",
      "Business Insider",
      "CNBC ",
      "CNNMoney",
      "DOE EIA 2013 Energy Conference",
      "Edge and Odds",
      "Europa",
      "OPEC",
    ],
    country: [
      "China",
      "India",
      "Iran",
      "Iraq",
      "Libya",
      "Russia",
      "Saudi Arabia",
      "United Kingdom",
      "United States of America",
    ],
    year: [2016, 2017, 2018, 2019, 2020],
    relevance: [1, 2, 3, 4, 5, 6],
    impact: [3, 4],
  };

  const handleClick = (category) => {
    setOpenCategory(category === openCategory ? null : category);
  };

  const handleDispatch = (property, value) => {
    dispatch(filterData({ property, value }));
  };

  return (
    <div>
      <div
        className="flex items-center p-1 cursor-pointer"
        onClick={() => dispatch(refresh())}
      >
        <img className="w-16 h-16" src={Logo} alt="Logo" />
        <h1 className="text-base font-medium">VisualVibe</h1>
      </div>
      <div className="">
        {sidebarData.map((category) => (
          <div key={category}>
            <div
              className="text-3xl font-semibold pl-5 py-3 cursor-pointer"
              onClick={() => handleClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            {openCategory === category && categories[category] && (
              <div className="p-1 flex pl-5 gap-2 flex-wrap">
                {categories[category].map((subCategory, index) => (
                  <div
                    className="border-[1px] border-black py-1 px-2 text-center rounded-lg cursor-pointer"
                    key={index}
                    onClick={() => handleDispatch(category, subCategory)}
                  >
                    {subCategory}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
