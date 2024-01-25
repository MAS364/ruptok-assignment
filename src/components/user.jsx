import React from "react";

const User = ({ user }) => {
  const { id, firstName, lastName, email, phone } = user;
  return (
    <tr>
      <td>{id}</td>
      <td>{`${firstName} ${lastName}`}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default User;


