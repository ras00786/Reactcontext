import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function AddTask() {
    const [task, setTask] = useState('');
    const { user, setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user || !user.tasks) {
            setUser({ tasks: [task] });
        } else {
            setUser({ tasks: [...user.tasks, task] });
        }
        setTask('');
    };

    return (
        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask;
