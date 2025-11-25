import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete, loading }) {
    if (loading) {
        return <div className="loading">Loading tasks...</div>;
    }

    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <p>No tasks found. Add your first task above!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            <h2>Your Tasks ({tasks.length})</h2>
            {tasks.map((task) => (
                <TaskItem
                    key={task._id}
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;
