import express from "express";
import { getAllData, getSpecificData } from "../controller/dataController.js";

const dataRoutes = express.Router();

dataRoutes.get("/", getAllData);
dataRoutes.get("/filterdata", getSpecificData);

export default dataRoutes;
