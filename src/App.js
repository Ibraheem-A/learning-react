import { useState } from "react";
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

  /* 
    To Delete Task
    Remember: States get passed down, actions get passed up
    States are Immutable
  */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
