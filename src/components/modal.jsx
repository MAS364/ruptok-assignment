import React, { useState } from "react";
import './modal.css';

const Modal = ({ onSubmit }) => {
  // State for controlling the modal visibility and form data
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    }); 
    closeModal(); // Close the modal after submission
  };

  return (
    <>
      {/* Button to  modal open */}
      <div className="customer-button">
        <button onClick={openModal}>Add Customer</button>
      </div>

      {/* Modal component */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {/* Close button for the modal */}
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Add Customer</h2>
            {/* Form to add a new customer */}
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {/* Submit button */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
