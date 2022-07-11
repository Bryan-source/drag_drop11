
import React from 'react';
import Task from '../../components/Task/Task';
import useDataFecthing from '../../Hooks/useDataFetching';

import './Backlog.css';

function Backlog(props) {

    const [loading, error, tasks] = useDataFecthing('https://my-json-server.typicode.com/Bryan-source/myAPI/tasks');

    return (
        <div className = 'Backlog-wrapper'>
            <h2>Backlog</h2>
            <div className = 'Task-wrapper'>
                {loading || error ? (
                    <span>{error || 'Loading...'}</span>
                ):(
                    tasks.map((task) => (
                        <Task 
                            key={task.id}
                            title={task.title}
                            body={task.body}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Backlog;