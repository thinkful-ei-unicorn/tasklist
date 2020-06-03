import React from 'react';
import './Task.css'

function Task(props) {
    return (
        <div style={{textDecoration: props.complete ? 'line-through' : null,}}
            className="task"
            onClick={() => {
                // How do I call completeTask in <TaskList />?
            }}>
            {props.text}
        </div>
    );
}

export default Task;