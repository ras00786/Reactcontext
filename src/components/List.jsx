import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function List() {
    const { user } = useContext(UserContext);
    console.log(user.tasks);
    if (!user || !user.tasks || user.tasks.length === 0) {
        return <div>No tasks found</div>;
    }

    return (
        <div>
            <h2>List of Tasks</h2>
            <ul>
                {user.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default List;
