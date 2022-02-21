import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await (fetchTasks())
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  // Fetch Task
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = res.json()

    return data
  }

  // Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks',
      {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(task),
      }
    )

    const newTask = await res.json()
    setTasks([...tasks, newTask])
  }

  /* 
    To Delete Task
    Remember: States get passed down, actions get passed up
    States are Immutable
  */
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE', })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id, isReminder) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onShowAddTask={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAddTask={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
