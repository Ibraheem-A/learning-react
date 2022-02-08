import Task from "./Task";

const Tasks = ({ tasks, onDelete}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete}/>

            ))}
            {tasks.length === 0 ? 'No Tasks to show' : ''}
        </>
    )
}

export default Tasks;
