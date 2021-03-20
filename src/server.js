import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();

app.listen(8000, () => {
  console.log("server is listening");
});

app.get("/test", (req, res) => {
  res.send("testing");
});