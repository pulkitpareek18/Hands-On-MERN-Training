import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const API_URL = "http://localhost:3000";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [view, setView] = useState("login");
  
  // Auth form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  // Task states
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await axios.get(`${API_URL}/user/profile`, { withCredentials: true });
      setUser(res.data.user);
      setIsLoggedIn(true);
      setView("tasks");
      fetchTasks();
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  // AUTHENTICATION
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/register`, { email, password, name });
      alert("Registration successful! Please login.");
      setView("login");
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/auth/login`, { email, password }, { withCredentials: true });
      await checkAuth();
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
      setIsLoggedIn(false);
      setUser(null);
      setTasks([]);
      setView("login");
    } catch (error) {
      alert("Logout failed");
    }
  };

  // TASKS
  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${API_URL}/tasks/all`, { withCredentials: true });
      setTasks(res.data.tasks);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required!");

    try {
      await axios.post(`${API_URL}/tasks/add`, { title, description, status }, { withCredentials: true });
      setTitle("");
      setDescription("");
      setStatus("pending");
      fetchTasks();
    } catch (error) {
      alert("Failed to add task");
    }
  };

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required!");

    try {
      await axios.put(`${API_URL}/tasks/update/${editingTask}`, { title, description, status }, { withCredentials: true });
      setTitle("");
      setDescription("");
      setStatus("pending");
      setEditingTask(null);
      fetchTasks();
    } catch (error) {
      alert("Failed to update task");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await axios.delete(`${API_URL}/tasks/delete/${id}`, { withCredentials: true });
      fetchTasks();
    } catch (error) {
      alert("Failed to delete task");
    }
  };

  const startEdit = (task) => {
    setEditingTask(task._id);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  // LOGIN VIEW
  if (view === "login") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">TaskMaster</h1>
          <h2 className="text-2xl text-white mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              required
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">
            Don't have an account?{" "}
            <button onClick={() => setView("register")} className="text-blue-400 hover:underline">
              Register
            </button>
          </p>
        </div>
      </div>
    );
  }

  // REGISTER VIEW
  if (view === "register") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">TaskMaster</h1>
          <h2 className="text-2xl text-white mb-6">Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-6 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
              required
            />
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
              Register
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">
            Already have an account?{" "}
            <button onClick={() => setView("login")} className="text-blue-400 hover:underline">
              Login
            </button>
          </p>
        </div>
      </div>
    );
  }

  // TASKS VIEW
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Header with Profile */}
      <header className="bg-gray-800 border-b border-gray-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">TaskMaster</h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-400">Welcome back,</p>
              <p className="font-semibold">{user?.name}</p>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 font-semibold">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Add/Edit Task Card */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 lg:w-96 h-fit">
            <h2 className="text-2xl font-bold mb-4">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h2>
            <form onSubmit={editingTask ? handleUpdateTask : handleAddTask}>
              <input
                className="w-full mb-4 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                className="w-full mb-4 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white h-24"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <select
                className="w-full mb-4 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">
                  {editingTask ? "Update" : "Add"} Task
                </button>
                {editingTask && (
                  <button type="button" onClick={cancelEdit} className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 font-semibold">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Tasks List */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Your Tasks ({tasks.length})</h2>
            {tasks.length === 0 ? (
              <div className="bg-gray-800 p-8 rounded-2xl text-center text-gray-400 border border-gray-700">
                No tasks yet. Create your first task!
              </div>
            ) : (
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task._id} className="bg-gray-800 border border-gray-700 p-5 rounded-2xl shadow-lg hover:border-gray-600 transition">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{task.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        task.status === "completed" ? "bg-green-600" :
                        task.status === "in-progress" ? "bg-yellow-600" : "bg-gray-600"
                      }`}>
                        {task.status}
                      </span>
                    </div>
                    {task.description && <p className="text-gray-300 mb-3">{task.description}</p>}
                    <p className="text-gray-500 text-sm mb-4">
                      {new Date(task.timestamp).toLocaleString()}
                    </p>
                    <div className="flex gap-2">
                      <button onClick={() => startEdit(task)} className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-600">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(task._id)} className="bg-red-600 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-700">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;