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

export const updateTask = async (req,res) => {
    try {

        const id = req.params.id;  // Params used to get ID from URL for ex: /update/:id
        // const id = req.query.id; // Query used to get ID from URL for ex: /update?id=123

        const {title, description, status} = req.body;

        const updatedTask = await TaskModel.findByIdAndUpdate(id,{
            title,
            description,
            status
        }, {new: true});

        res.status(200).json({
            message: "Task Updated Successfully",
            task: updatedTask
        })
    }
    catch (error) {
        res.status(500).json({
            message: 'Error updating task',
            error: error.message
        });
    }
}

export const deleteTask = async (req, res) => {
    try{

        const id = req.params.id;

        const deletedTask = await TaskModel.findByIdAndDelete(id);

        res.status(200).json({
                message: "Task Deleted Successfully",
                task: deletedTask
        });

    }
    catch (error) {
        res.status(500).json({
            message: 'Error deleting task',
            error: error.message
        });
    }
}