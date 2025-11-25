import { useState, useEffect } from 'react';

function TaskForm({ onSubmit, editingTask, onCancelEdit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setDescription(editingTask.description || '');
            setStatus(editingTask.status);
        } else {
            setTitle('');
            setDescription('');
            setStatus('pending');
        }
    }, [editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        onSubmit({
            title: title.trim(),
            description: description.trim(),
            status,
        });

        if (!editingTask) {
            setTitle('');
            setDescription('');
            setStatus('pending');
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
            <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter task title"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter task description (optional)"
                    rows="3"
                />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn-primary">
                    {editingTask ? 'Update Task' : 'Add Task'}
                </button>
                {editingTask && (
                    <button type="button" className="btn-secondary" onClick={onCancelEdit}>
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

export default TaskForm;
