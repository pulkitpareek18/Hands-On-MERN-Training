
function TaskItem({ task, onEdit, onDelete }) {
    const getStatusClass = (status) => {
        switch (status) {
            case 'pending':
                return 'status-pending';
            case 'in-progress':
                return 'status-in-progress';
            case 'completed':
                return 'status-completed';
            default:
                return '';
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <div className={`task-item ${getStatusClass(task.status)}`}>
            <div className="task-content">
                <h3 className="task-title">{task.title}</h3>
                {task.description && (
                    <p className="task-description">{task.description}</p>
                )}
                <div className="task-meta">
                    <span className={`task-status ${getStatusClass(task.status)}`}>
                        {task.status.replace('-', ' ')}
                    </span>
                    <span className="task-date">
                        {formatDate(task.timestamp)}
                    </span>
                </div>
            </div>
            <div className="task-actions">
                <button className="btn-edit" onClick={() => onEdit(task)}>
                    Edit
                </button>
                <button className="btn-delete" onClick={() => onDelete(task._id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskItem;
