import express from 'express';
import { createTask } from '../controllers/TaskController.js';

const router = express.Router();

router.post("/add", createTask);

export default router;