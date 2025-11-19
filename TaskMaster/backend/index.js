import express from "express";
import { connectDB } from "./config/database.js";

const PORT = 3000;

const app = express();

connectDB()

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});