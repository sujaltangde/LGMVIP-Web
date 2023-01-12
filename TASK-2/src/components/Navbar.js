import React from 'react'
import "./style.css"

const Navbar = (prop) => {
  return (
    <>
    
    <div className="navbar">
      <button className='button' onClick={prop.handleClick}  >Get Users</button>
          <h3>Employees of Pedro Tech</h3>
    </div>


    </>
  )
}

export default Navbar