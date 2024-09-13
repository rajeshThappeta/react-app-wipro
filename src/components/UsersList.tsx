import { useState, useEffect } from "react";
import axios from "axios";

function UsersList() {
  let [users, setUsers] = useState([]);

  async function getUsers() {
    try {
      let res = await axios.get("http://localhost:3000/users");
      let users = res.data;
      setUsers(users);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    //side effect(api req)
    getUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">List of Users</h1>
      <table className="table text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Date of birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj) => (
            <tr key={userObj.id}>
              <td>{userObj.id}</td>
              <td>{userObj.username}</td>
              <td>{userObj.email}</td>
              <td>{userObj.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;
