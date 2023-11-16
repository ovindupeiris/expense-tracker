import express from "express";
import dotenv from "dotenv";
dotenv.config();
import config from "config";

const port = config.get<string>("port");

const app = express();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
