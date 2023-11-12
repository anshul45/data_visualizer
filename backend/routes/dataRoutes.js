import express from "express";
import { getAllData, getSpecificData } from "../controller/dataController.js";

const dataRoutes = express.Router();

dataRoutes.get("/", getAllData);
//dataRoutes.get("/filterdata", getSpecificData);  can use this also

export default dataRoutes;
