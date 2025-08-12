import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  const [students, setStudents] = useState([]);

  // Load data initially
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json() )
    .then((json) => setStudents(json))
  }, []);

  // Add student
  const addStudent = (student) => {
    setStudents([...students, { ...student, id: students.length + 1 }]);
  };

  //Update student
  const updateStudent = (updated) => {
    setStudents(
      students.map((student) => (student.id === updated.id ? updated : student ))
    );
  };

  //Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      
    </>
  );
}

export default App;
