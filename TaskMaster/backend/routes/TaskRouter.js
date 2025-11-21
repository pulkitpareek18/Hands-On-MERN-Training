import express from 'express';
import { createTask, getAllTasks, updateTask} from '../controllers/TaskController.js';

const router = express.Router();

router.post("/add", createTask); // Creates a new task
router.get("/all", getAllTasks); // Get all Tasks
router.put("/update/:id", updateTask); // Update an existing task by its ID


export default router;