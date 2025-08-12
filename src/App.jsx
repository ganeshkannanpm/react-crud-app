import React from "react";

function App() {
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>John</td>
              <td>john@gmail.com</td>
              <td>9876543210</td>
              <td><button className="btn btn-warning">Update</button></td>
              <td><button className="btn btn-danger">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
