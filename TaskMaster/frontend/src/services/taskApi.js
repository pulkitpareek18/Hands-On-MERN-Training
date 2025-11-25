
const API_BASE_URL = 'http://localhost:3000';

// Get all tasks
export const getAllTasks = async () => {
    const response = await fetch(`${API_BASE_URL}/tasks/all`);
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return response.json();
};

// withCredentials: true, while using axios

// Create a new task
export const createTask = async (taskData) => {
    const response = await fetch(`${API_BASE_URL}/tasks/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) {
        throw new Error('Failed to create task');
    }
    return response.json();
};

// Update an existing task
export const updateTask = async (id, taskData) => {
    const response = await fetch(`${API_BASE_URL}/tasks/update/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
    });
    if (!response.ok) {
        throw new Error('Failed to update task');
    }
    return response.json();
};

// Delete a task
export const deleteTask = async (id) => {
    const response = await fetch(`${API_BASE_URL}/tasks/delete/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        throw new Error('Failed to delete task');
    }
    return response.json();
};
