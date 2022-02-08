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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
