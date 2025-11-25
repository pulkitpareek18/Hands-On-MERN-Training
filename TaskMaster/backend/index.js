import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import TaskRouter from "./routes/TaskRouter.js";
import AuthRouter from "./routes/AuthRouter.js";
import UserRouter from "./routes/UserRouter.js";

import AuthMiddleware from "./middleware/AuthMiddleware.js";

import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

const PORT = 3000;

app.use(cors());  

app.use(express.json());

connectDB()

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Middleware
app.use('/tasks', AuthMiddleware, TaskRouter);
app.use('/auth',AuthRouter);
app.use('/user', AuthMiddleware, UserRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});