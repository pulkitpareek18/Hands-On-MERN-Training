import express from "express";
import { connectDB } from "./config/database.js";
import TaskRouter from "./routes/TaskRouter.js";
import AuthRouter from "./routes/AuthRouter.js";
import UserRouter from "./routes/UserRouter.js";

const PORT = 3000;

const app = express();

app.use(express.json());

connectDB()

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Middleware
app.use('/tasks',TaskRouter);
app.use('/auth',AuthRouter);
app.use('/user', UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});