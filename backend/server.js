import express from "express";
import dotenv from "dotenv";
import { db } from "./db/connect.js";
import dataRoutes from "./routes/dataRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());

app.use("/api/v1/data", dataRoutes);

dotenv.config();

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});
const port = 3001;
app.listen(port, () => {
  db();
  console.log("Listen on port " + port);
});
