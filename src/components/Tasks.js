const tasks = [
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
];

const Tasks = () => {
    return (
        <>
            {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks;
