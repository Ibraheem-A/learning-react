import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // use if you want an action to be executed when page is loaded
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await (fetchTasks())
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = res.json()

    return data
  }

  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
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

  const toggleReminder = async(id, isReminder) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updTask),
    }
    )

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
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
