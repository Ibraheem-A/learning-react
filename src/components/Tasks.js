import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggleReminder}) => {
    
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggleReminder={onToggleReminder}/>

            ))}
            {tasks.length === 0 ? 'No Tasks to show' : ''}
        </>
    )
}

export default Tasks;
