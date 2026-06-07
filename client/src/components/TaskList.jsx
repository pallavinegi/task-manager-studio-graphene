function TaskList({ tasks, deleteTask, toggleTask, updateTask }) {
      if (tasks.length === 0) {
  return (
    <div className="empty-state">
      <h2>No Tasks Yet 😴</h2>
      <p>Create your first task.</p>
    </div>
  );
}
  return (
    <div>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <div
  key={task.id}
  className={`task-card ${
    !task.completed &&
    new Date(task.dueDate) < new Date()
      ? "overdue"
      : ""
  }`}
>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>Due Date: {task.dueDate}</p>
          {
  !task.completed &&
  new Date(task.dueDate) < new Date() && (
    <p className="overdue-text">
      ⚠️ Overdue
    </p>
  )
}

          <p>
            Status: {task.completed ? "✅ Completed" : "⏳ Pending"}
          </p>

          <button
            className="complete-btn"
            onClick={() => toggleTask(task.id)}
          >
            {task.completed
              ? "Mark as Incomplete"
              : "Mark as Complete"}
          </button>

          <button
            className="edit-btn"
            onClick={() => {
              const newTitle = prompt(
                "Enter new title",
                task.title
              );

              if (newTitle) {
                updateTask(task.id, newTitle);
              }
            }}
          >
            Edit
          </button>

          <button
            className="delete-btn"
             onClick={() => {
             if (window.confirm("Are you sure you want to delete this task?")) {
              deleteTask(task.id);
    }
  }}
>
  Delete
</button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default TaskList;