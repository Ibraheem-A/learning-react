import React from 'react';

const AddTask = () => {
    return (
        <form className=' add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time'></input>
            </div>
            <div className='form-control'>
                <label>Set Reminder</label>
                <input type='checkbox'></input>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    );
};

export default AddTask;
