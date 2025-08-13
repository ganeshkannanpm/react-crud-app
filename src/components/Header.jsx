import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();

  return (
    <div>
        <nav className='container mt-5'>
            <h2 class="mb-4 text-center text-dark">Student Management System</h2>
            {location.pathname !== "/add" && (
              <Link to={"/add"} className='btn btn-success'>+ Add Student</Link>
            )};
        </nav>
    </div>
  )
}

export default Header