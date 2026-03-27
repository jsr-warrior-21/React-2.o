import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='text-2xl font-bold'>Home</div>
    <nav>
      <NavLink to='featured'>Featured</NavLink>
      <NavLink to='new'> New</NavLink>
    </nav>
    {/* Outlet ka MAIN KAAM** - 1 Line Mein:**
    Outlet = Child route ko parent ke ANDAR** dikhane ka placeholder!** */}
    <Outlet/>
    </>
  )
}

export default Home