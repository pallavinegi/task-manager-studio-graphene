const express = require("express");

const router = express.Router();

let tasks = [];

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST new task
router.post("/", (req, res) => {
  const { title, description, dueDate } = req.body;

  const newTask = {
    id: Date.now(),
    title,
    description,
    dueDate,
    completed: false,
    createdAt: new Date()
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});
// DELETE task
router.delete("/:id", (req, res) => {
  const taskId = Number(req.params.id);

  tasks = tasks.filter(task => task.id !== taskId);

  res.json({
    message: "Task deleted successfully"
  });
});
// UPDATE task
router.put("/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const { title, description, dueDate } = req.body;

  tasks = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        title,
        description,
        dueDate
      };
    }

    return task;
  });

  res.json({
    message: "Task updated successfully"
  });
});
// TOGGLE task completion
router.patch("/:id/toggle", (req, res) => {
  const taskId = Number(req.params.id);

  tasks = tasks.map(task => {
    if (task.id === taskId) {
      return {
        ...task,
        completed: !task.completed
      };
    }

    return task;
  });

  res.json({
    message: "Task status updated"
  });
});
module.exports = router;