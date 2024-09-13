import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");

  //function to submit form
  async function handleFormSubmit({ username, password }) {
    try {
      let res = await axios.get(`http://localhost:3000/users?username=${username}&password=${password}`,);
      let result =  res.data;

      if (result.length !== 0) {
        //navigate to user profile and send userObj also
        navigate(`/user-profile/${result[0].username}`, { state: result[0] });
      } else {
        setLoginError("Username or Password is incorrect!");
      }
    } catch (e) {
      setLoginError(e.message);
    }
  }

  // console.log("form vaildation error is",errors)
  return (
    <div className="container">
      <h1 className="display-2 text-secondary text-center">User Login</h1>

      {/* userlogin error message */}
      {loginError.length !== 0 && (
        <p className="text-danger fs-2 text-center">{loginError}</p>
      )}
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
            id="email"
            className="form-control"
          />
          {/* validation erro msg for email */}
          {errors.password?.type === "required" && (
            <p className="text-danger">*Password is required</p>
          )}
        </div>

        {/* submit button */}
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

//required
//minLength
//maxLength
//min
//max
//pattern

//conditional rendering(ternary operator)
// condition ? react element-1: react-element-2

// condition && react element
