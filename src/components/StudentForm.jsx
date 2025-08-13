import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentForm = ({ students = [], onSubmit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const existingStudent = students.find((s) => s.id === parseInt(id)) || {
    name: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState(existingStudent);

  useEffect(() => {
    if (id) {
      setFormData(existingStudent);
    }
  }, [id, existingStudent]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page refresh
    onSubmit(formData); // tells App.jsx to save the data
    navigate("/"); // go back to the list
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-3">
      <h2 className="text-center">Add Student</h2>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-3">
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mt-3">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        {id ? "Update" : "Add"} Student
      </button>
    </form>
  );
};

export default StudentForm;
