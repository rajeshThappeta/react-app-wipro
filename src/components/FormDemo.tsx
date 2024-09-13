import {useForm} from 'react-hook-form';


function FormDemo() {

        const {register,handleSubmit,formState:{errors}}=useForm();

        //function to submit form
        function handleFormSubmit(obj){
            console.log(obj)
        }

        console.log("form vaildation error is",errors)
  return (
    <div className="container">
        <h1 className="display-2 text-secondary text-center">Form Demo</h1>
        {/* user registration form */}
        <form  className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleFormSubmit)}>
            {/* username */}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text"  {...register("username",{required:true,minLength:4})} id="username" className="form-control"  />
                {/* validation error message of username*/}
                { errors.username?.type==='required' && <p className='text-danger'>*Username is required</p>}
                { errors.username?.type==='minLength' && <p className='text-danger'>*Min length should be 4</p>}
            </div>

             {/* email */}
             <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email"  {...register("email",{required:true})} id="email" className="form-control" />
                {/* validation erro msg for email */}
                {errors.email?.type==='required' && <p className='text-danger'>*Email is required</p>}
            </div>
            {/* skills */}
            <div className="mb-3">
                <label>Select skills</label>
                {/* skill -1 */}
                <div className="form-check">
                    <input type="checkbox" {...register('css')} id="css" className="form-check-input" />
                    <label htmlFor="css" className="form-check-label">CSS</label>
                </div>
                 {/* skill -2 */}
                 <div className="form-check">
                    <input type="checkbox" {...register('js')} id="js" className="form-check-input" />
                    <label htmlFor="js" className="form-check-label">JavaScript</label>
                </div>
                 {/* skill -3 */}
                 <div className="form-check">
                    <input type="checkbox" {...register('react')} id="react" className="form-check-input" />
                    <label htmlFor="react" className="form-check-label">ReactJS</label>
                </div>
                
            </div>

            {/* state information */}
            <div className="mb-3">
                <label htmlFor="state" className="form-label">Seelct state</label>
                <select {...register('state')} id="state" className="form-select">
                    <option value="telangana">Telangana</option>
                    <option value="andhra pradesh">Andhra pradesh</option>
                    <option value="kerala">Kerala</option>
                </select>
            </div>

            {/* submit button */}
            <button type="submit" className="btn btn-success">SIgnup</button>
        </form>
    </div>
  )
}

export default FormDemo





//required
//minLength
//maxLength
//min
//max
//pattern



//conditional rendering(ternary operator)
// condition ? react element-1: react-element-2

// condition && react element