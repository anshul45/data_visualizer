import express from "express";
import dotenv from "dotenv";
import { db } from "./db/connect.js";
import dataRoutes from "./routes/dataRoutes.js";

const app = express();

app.use("/api/v1/data", dataRoutes);

dotenv.config();

const port = 3001;
app.listen(port, () => {
  db();
  console.log("Listen on port " + port);
});
