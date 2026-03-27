import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className='flex flex-row gap-10 justify-center items-center underline cursor-pointer'>
        <Link className='font-bold' to='/'>Home</Link>
        <Link className='font-bold' to= '/about'>About</Link>
        <Link className='font-bold' to='/contact'>Contact Us</Link>
        <button className='px-4 py-2 font-bold border-2 border-green-400 rounded-full underline-offset-0 cursor-pointer' onClick={()=>navigate('/')}>Go To Home Page</button>

         {/* Navbar.jsx mein kahin add karo for dynamic Route */}
        <Link to="/user/101">User 101 Profile</Link>
          <Link to="/user/abc">User ABC Profile</Link>

    </nav>
  )
}

export default Navbar