import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Take out trash',
      day: 'Feb 5th at 5:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting with Boss',
      day: 'Feb 5th at 10:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    }
  ])

  // Add Task
  const addTask = (task) =>{
    const id = tasks.length + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  /* 
    To Delete Task
    Remember: States get passed down, actions get passed up
    States are Immutable
  */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id, isReminder) =>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder : !task.reminder} : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAddTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
