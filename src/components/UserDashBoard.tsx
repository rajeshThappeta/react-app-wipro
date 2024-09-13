import { useLocation } from "react-router-dom";

function UserDashBoard() {
  const { state } = useLocation();

  return (
    <div className="text-center text-primary mt-5">
      <h1 className="display-3 text-center text-secondary">User profile</h1>
      <p className="lead fs-1 ">{state.username}</p>
      <p className="lead fs-1">{state.email}</p>
      <p className="lead fs-1">{state.dob}</p>
    </div>
  );
}

export default UserDashBoard;
