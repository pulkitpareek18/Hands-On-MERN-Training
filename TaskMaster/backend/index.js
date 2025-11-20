import express from "express";
import { connectDB } from "./config/database.js";
import TaskRouter from "./routes/TaskRouter.js";

const PORT = 3000;

const app = express();

app.use(express.json());

connectDB()

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/task',TaskRouter); // /task/add -> POST: createTask

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});