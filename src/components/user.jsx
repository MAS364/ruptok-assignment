import React from "react";

const User = ({ user }) => {
  // Destructuring user object to access its properties
  const { id, firstName, lastName, email, phone } = user;

  return (
    <tr>
      {/* Rendering user details in table cells */}
      <td>{id}</td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default User;
