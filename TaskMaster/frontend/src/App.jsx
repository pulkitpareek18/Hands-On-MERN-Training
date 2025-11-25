import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getAllTasks, createTask, updateTask, deleteTask } from './services/taskApi';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  // Fetch all tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await getAllTasks();
      setTasks(data.tasks || []);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tasks. Make sure the backend server is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const data = await createTask(taskData);
      setTasks([...tasks, data.task]);
      setError(null);
    } catch (err) {
      setError('Failed to create task.');
      console.error('Error creating task:', err);
    }
  };

  const handleUpdateTask = async (taskData) => {
    if (!editingTask) return;
    try {
      const data = await updateTask(editingTask._id, taskData);
      setTasks(tasks.map((task) => (task._id === editingTask._id ? data.task : task)));
      setEditingTask(null);
      setError(null);
    } catch (err) {
      setError('Failed to update task.');
      console.error('Error updating task:', err);
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete task.');
      console.error('Error deleting task:', err);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleSubmit = (taskData) => {
    if (editingTask) {
      handleUpdateTask(taskData);
    } else {
      handleCreateTask(taskData);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>TaskMaster</h1>
        <p>Manage your tasks efficiently</p>
      </header>

      {error && <div className="error-message">{error}</div>}

      <main className="app-main">
        <TaskForm
          onSubmit={handleSubmit}
          editingTask={editingTask}
          onCancelEdit={handleCancelEdit}
        />
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          loading={loading}
        />
      </main>
    </div>
  );
}

export default App;
