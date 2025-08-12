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
        <a href="#" class="btn btn-success mb-3">
          + Add Student
        </a>
      </div>
    </>
  );
}

export default App;
