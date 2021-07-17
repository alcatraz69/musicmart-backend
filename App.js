import express from "express";
import cors from "cors";
import initializeDbConnection from "./Database/DBconnection.js";
import { populateData } from "./Database/populateData.js";

const app = express();
app.use(express.json());
app.use(cors());

initializeDbConnection();
// populateData();

app.use("/", (req, res) => {
  res.json("MusicMart Server");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running");
});
