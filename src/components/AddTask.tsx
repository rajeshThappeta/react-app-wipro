import {useForm} from 'react-hook-form'

function AddTask(props) { //{addTask:F}

    let {register,handleSubmit}=useForm()

    function addNewTask(taskObj){
        props.addTask(taskObj.task)
    }

  return (
    <div>
        <h2>Add new task</h2>
        <form  onSubmit={handleSubmit(addNewTask)}>
            <input type="text" {...register("task")} id="" className="form-control mb-4" />
            <button className="btn btn-success" type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddTask