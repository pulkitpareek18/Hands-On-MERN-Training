import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        },
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'],
            default: 'pending',
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        timestamp: {
            type: Date,
            default: Date.now,
        }
    }
)

// Difference between schema and model:
// A schema defines the structure of the documents within a collection, 
// including field names, types, and validation rules. 
// A model is a compiled version of the schema that provides an interface 
// for interacting with the database, allowing for CRUD operations.

const TaskModel = mongoose.model('Task', TaskSchema);

export default TaskModel;