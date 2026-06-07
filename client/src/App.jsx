import { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        "https://task-manager-studio-graphene.onrender.com/api/tasks"
      );

      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteTask = async (id) => {
    try {
      await axios.delete(
        `https://task-manager-studio-graphene.onrender.com/api/tasks/${id}`
      );

      fetchTasks();
    } catch (error) {
      console.error(error);
    }
  };

    const toggleTask = async (id) => {
  try {
    await axios.patch(
      `https://task-manager-studio-graphene.onrender.com/api/tasks/${id}/toggle`
    );

    fetchTasks();
  } catch (error) {
    console.error(error);
  }
};

const updateTask = async (id, title) => {
  try {
    await axios.put(
      `https://task-manager-studio-graphene.onrender.com/api/tasks/${id}`,
      {
        title
      }
    );

    fetchTasks();
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    fetchTasks();
  }, []);

  
  const filteredTasks = tasks.filter((task) => {
  if (filter === "active") {
    return !task.completed;
  }

  if (filter === "completed") {
    return task.completed;
  }
  return true;
});

const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const activeTasks = tasks.filter(
  (task) => !task.completed
).length;

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All Tasks
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={() => setFilter("active")}
        >
          Active Tasks
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => setFilter("completed")}
        >
          Completed Tasks
        </button>
      </div>
      <div className="stats-bar">
  <div className="stat-card">
    <h3>Total</h3>
    <p>{totalTasks}</p>
  </div>

  <div className="stat-card">
    <h3>Active</h3>
    <p>{activeTasks}</p>
  </div>

  <div className="stat-card">
    <h3>Completed</h3>
    <p>{completedTasks}</p>
  </div>
</div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
         updateTask={updateTask}
      />

      <TaskForm fetchTasks={fetchTasks} />
    </div>
  );
}

export default App;
