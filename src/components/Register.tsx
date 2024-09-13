import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useContext} from 'react';
import { counterContext } from "../contexts/CounterContext";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  let [counter]=useContext(counterContext)
  //function to submit form
  async function handleFormSubmit(userObj) {
    try {
      //save(create) it in local api
      let res = await axios.post("http://localhost:3000/users", userObj);

      if (res.status === 201) {
        //navigate to login
        navigate("/login");
      }
    } catch (e) {
      console.log(e);
    }
  }

  // console.log("form vaildation error is",errors)
  return (
    <div className="container">
      <h1 className="display-2 text-secondary text-center">
        New User Registration
      </h1>

      <h2>{counter}</h2>
      {/* user registration form */}
      <form
        className="w-50 mx-auto mt-5"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            {...register("username", { required: true, minLength: 4 })}
            id="username"
            className="form-control"
          />
          {/* validation error message of username*/}
          {errors.username?.type === "required" && (
            <p className="text-danger">*Username is required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-danger">*Min length should be 4</p>
          )}
        </div>

        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            id="password"
            className="form-control"
          />
          {/* validation erro msg for email */}
          {errors.password?.type === "required" && (
            <p className="text-danger">*Password is required</p>
          )}
        </div>

        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            id="email"
            className="form-control"
          />
          {/* validation erro msg for email */}
          {errors.email?.type === "required" && (
            <p className="text-danger">*Email is required</p>
          )}
        </div>

        {/* dob */}
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">
            Date of birth
          </label>
          <input
            type="date"
            {...register("dob", { required: true })}
            id="dob"
            className="form-control"
          />
          {/* validation erro msg for email */}
          {errors.dob?.type === "required" && (
            <p className="text-danger">*Date of birth is required</p>
          )}
        </div>

        {/* submit button */}
        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

//required
//minLength
//maxLength
//min
//max
//pattern

//conditional rendering(ternary operator)
// condition ? react element-1: react-element-2

// condition && react element
