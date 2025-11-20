import TaskModel from '../models/TaskModel.js';

// Create a new task

export const createTask = async (req, res) => {

    try {
        const {title, description, status} = req.body;

        const newTask = new TaskModel({
            title,
            description,
            status
        });


        await newTask.save();

        res.status(201).json({
            message: 'Task created successfully',
            task: newTask
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error creating task',
            error: error.message
        });
    }

}

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await TaskModel.find();

        res.status(200).json({
            message: 'Tasks retrieved successfully',
            tasks: tasks
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Error retrieving tasks',
            error: error.message
        });
    }
}