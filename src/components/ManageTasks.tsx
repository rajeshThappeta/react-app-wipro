import React, { useState } from 'react'
import AddTask from './AddTask'
import TasksList from './TasksList'
import TasksCount from './TasksCount'

function ManageTasks() {

    let [tasks,setTasks]=useState([]);

    function addTask(newTask){
        setTasks([...tasks,newTask])
    }


    console.log(tasks)
  return (
    <div className='d-flex justify-content-around'>
        <AddTask addTask={addTask}/>
        <TasksList tasks={tasks} />
        <TasksCount tasks={tasks} />

    </div>
  )
}

export default ManageTasks