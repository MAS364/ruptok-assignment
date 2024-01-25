import React from "react";
import User from "./user";
import "../App.css";

const UserTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>UserID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user.id} user={user} className="user-styling" />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
