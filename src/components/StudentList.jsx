import React from 'react'
import { Link } from 'react-router-dom'

const StudentList = ({ students, onDelete }) => {
  return (
    <div className='container mt-5'>
        <table class="table table-bordered table-striped mt-3">
          <thead class="table-dark">
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
                <Link to={`/edit/${user.id}`} className="btn btn-warning me-2">Update</Link>
                <button className="btn btn-danger" onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
            )}
          </tbody>
        </table>
    </div>
  )
}

export default StudentList