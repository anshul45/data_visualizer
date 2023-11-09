import React, { useState } from "react";
import "./Sidebar.scss";
import Logo from "../../assets/Logo.png";

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const sidebarData = [
    "country",
    "start_year",
    "end_year",
    "impact",
    "pestle",
    "region",
    "relevance",
    "sector",
    "source",
    "topic",
  ];

  const categories = {
    end_year: [
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2021",
      "2025",
      "2030",
      "2035",
      "2040",
    ],
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
    start_year: [2016, 2017, 2018, 2020],
    relevance: [1, 2, 3, 4, 5, 6],
    impact: [3, 4],
  };

  const handleClick = (category) => {
    setOpenCategory(category === openCategory ? null : category);
  };

  return (
    <div className="Sidebar">
      <div className="Logo">
        <img className="logo_img" src={Logo} alt="Logo" />
        <h1 className="logo_title">VisualVibe</h1>
      </div>
      <div className="Contents">
        {sidebarData.map((category) => (
          <div className="all_categories" key={category}>
            <div
              className="category-header"
              onClick={() => handleClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            {openCategory === category && categories[category] && (
              <div className="subcategories">
                {categories[category].map((subCategory, index) => (
                  <div className="subcategory" key={index}>
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
