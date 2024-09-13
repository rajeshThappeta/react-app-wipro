import React from 'react'

function TasksList(props) {
  return (
    <div>
      <h2>List of tasks</h2>
      {
        props.tasks.map(task=><h3 key={task}>{task}</h3>)
      }
    </div>
  )
}

export default TasksList