import React from "react";
import User from "./User"; 
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
        {/* Rendering each user as a row in the table */}
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
