import Data from "../model/dataSchema.js";

export const getAllData = async (req, res) => {
  try {
    const allData = await Data.find();
    res.json(allData);
  } catch (error) {
    res.status(500).send("Error fetching data" + error);
  }
};

//will consider this also but i think we can validate data in frontend..

export const getSpecificData = async (req, res) => {
  try {
    const allData = await Data.find({ topic: "gas" });
    res.json(allData);
  } catch (error) {
    res.status(500).send("Error fetching data" + error);
  }
};
