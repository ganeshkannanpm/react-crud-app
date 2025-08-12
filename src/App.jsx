import React, { useEffect, useState } from "react";

function App() {

  const [students, setStudents] = useState([]);

  // Load data initially
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json() )
    .then((json) => setStudents(json))
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h2 class="mb-4 text-white text-center">Student Management System</h2>
        <a href="add.php" class="btn btn-success mb-3">
          + Add Student
        </a>
        <table class="table table-bordered table-striped">
          <thead class="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(user =>
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button className="btn btn-warning ms-5">Update</button>
                <button className="btn btn-danger ms-5">Delete</button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
