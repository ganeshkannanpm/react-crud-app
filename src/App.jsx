import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";

function App() {
  const [students, setStudents] = useState([]);

  // Load data initially
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setStudents(json));
  }, []);

  // Add student
  const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  //Update student
  const updateStudent = (updated) => {
    setStudents(
      students.map((student) => (student.id === updated.id ? updated : student))
    );
  };

  //Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <Router>
        <Header />
        <div className="mt-5">
          <Routes>
            <Route
              path="/"
              element={
                <StudentList students={students} onDelete={deleteStudent} />
              }
            />
            <Route
              path="/add"
              element={<StudentForm onSubmit={addStudent} />}
            />
            <Route
              path="/edit/:id"
              element={
                <StudentForm students={students} onSubmit={updateStudent} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
