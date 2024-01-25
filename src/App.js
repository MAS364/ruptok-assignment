import React, { useState, useEffect } from "react";
import Modal from "./components/modal";
import UserTable from "./components/table";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetching the user data
  const fetchUser = async () => {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      if (data.users && data.users.length > 0) {
        setUsers(data.users);
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleFormSubmit = (formData) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: prevUsers.length + 1, // You should use a more robust way to generate IDs
        ...formData,
      },
    ]);
  };

  return (
    <div className="App">
      <Modal onSubmit={handleFormSubmit} />
      <div className="table-container">
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default App;
