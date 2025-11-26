import express from 'express';
import { createTask, getAllTasks, updateTask, deleteTask} from '../controllers/TaskController.js';

const router = express.Router();

router.post("/add", createTask); // Creates a new task
router.get("/all", getAllTasks); // Get all Tasks
router.put("/update/:id", updateTask); // Update an existing task by its ID
router.delete("/delete/:id", deleteTask); // Delete a task by its ID


export default router;

// CRUD
// Create - POST /tasks/add
// Read - GET /tasks/all
// Update - PUT /tasks/update/:id
// Delete - DELETE /tasks/delete/:id