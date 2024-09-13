import React from 'react'

function TasksCount(props) {
  return (
    <div>
        <h2>Tasks Count</h2>
        <h2>{props.tasks.length}</h2>
    </div>
  )
}

export default TasksCount