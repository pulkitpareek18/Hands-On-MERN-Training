import express from 'express';
import { createTask, getAllTasks } from '../controllers/TaskController.js';

const router = express.Router();

router.post("/add", createTask);
router.get("/all", getAllTasks);

export default router;