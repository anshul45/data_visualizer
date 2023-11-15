import express from "express";
import { getAllData, getSpecificData } from "../controller/dataController.js";

const dataRoutes = express.Router();

dataRoutes.get("/", getAllData);
dataRoutes.get("/all", getSpecificData);

export default dataRoutes;
