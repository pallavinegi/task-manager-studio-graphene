import { useState } from "react";
import axios from "axios";

function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");


   const handleSubmit = async (e) => {
     e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/tasks",
      {
        title,
        description,
        dueDate
      }
    );

    console.log(response.data);

    setTitle("");
    setDescription("");
    setDueDate("");

    fetchTasks();

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <h2>Add Task</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />

        <div>
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <br />

        <div>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;