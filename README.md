# Task Manager Application

## Studio Graphene Assignment Submission

This project was developed as part of the Studio Graphene assessment.

A full-stack Task Manager application that allows users to efficiently manage daily tasks with task tracking, status management, filtering, and analytics.

---

## Features

### Task Management

* Create new tasks
* Edit existing tasks
* Delete tasks
* View all tasks

### Status Tracking

* Mark tasks as Complete
* Mark tasks as Incomplete
* Toggle task status dynamically

### Task Filtering

* View All Tasks
* View Active Tasks
* View Completed Tasks

### Dashboard & Analytics

* Total Tasks Counter
* Active Tasks Counter
* Completed Tasks Counter

### Overdue Task Detection

* Highlights overdue tasks
* Displays overdue warning indicator

### User Interface

* Responsive Layout
* Dark Theme UI
* Clean Card-Based Design
* Empty State Screen when no tasks exist

### Data Persistence

* Tasks are stored in JSON format
* Data remains available after page refresh

---

## Tech Stack

### Frontend

* React.js
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Storage

* JSON File Based Persistence

---

## Project Structure

```text
task-manager-studio-graphene
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── App.jsx
│   │   └── app.css
│   └── package.json
│
├── server
│   ├── routes
│   ├── data
│   └── server.js
│
└── package.json
```

## API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Create Task

```http
POST /api/tasks
```

### Update Task

```http
PUT /api/tasks/:id
```

### Delete Task

```http
DELETE /api/tasks/:id
```

### Toggle Task Status

```http
PATCH /api/tasks/:id/toggle
```

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/pallavinegi/task-manager-studio-graphene.git
```

### Install Dependencies

```bash
npm install

cd client
npm install
```

### Run Backend

```bash
npm run dev
```

### Run Frontend

```bash
cd client
npm run dev
```

---

## Assignment Highlights

* Full CRUD Functionality
* REST API Integration
* State Management using React Hooks
* Dynamic Filtering
* Overdue Task Tracking
* Statistics Dashboard
* Persistent Storage
* Dark Theme User Interface

---
## Live Demo

Frontend (Vercel):
https://task-manager-studio-graphene-git-main-pallavi-negi.vercel.app/

Backend API (Render):
https://task-manager-studio-graphene.onrender.com/api/tasks

GitHub Repository:
https://github.com/pallavinegi/task-manager-studio-graphene


## Author

**Pallavi Negi**
