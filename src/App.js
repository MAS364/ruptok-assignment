import React, { useState, useEffect } from "react";
import Modal from "./components/Modal";
import UserTable from "./components/Table";
import "./App.css";

const App = () => {
  // State to hold user data
  const [users, setUsers] = useState([]);

  // Fetching the user data from an API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        if (data.users && data.users.length > 0) {
          setUsers(data.users);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);


  // Function to handle form submission from the modal
  const handleFormSubmit = (formData) => {
    // Adding the new user to the existing user list
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: generateId(), // Generating a unique ID for the new user
        ...formData,
      },
    ]);
  };

  // Function to generate a unique ID for a new user
  const generateId = () => {
    return users.length + 1;
  };

  return (
    <div className="App">
      {/* Modal component for adding new users */}
      <Modal onSubmit={handleFormSubmit} />
      <div className="table-container">
        {/* UserTable component to display the list of users */}
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default App;
