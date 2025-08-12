import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className='navbar navbar-dark bg-dark px-3'>
            <Link to={"/"}>Student Management System</Link>
            <Link to={"/add"} className='btn btn-success'>+ Add Student</Link>
        </nav>
    </div>
  )
}

export default Header