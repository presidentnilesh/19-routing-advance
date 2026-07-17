import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-4 py-4 bg-cyan-800 items-center justify-between'>
        <h2 className='text-xl font-bold '>Shariyens </h2>
        <div className='flex gap-10'>
            <Link className='text-lg font-medium' to='/' >Home</Link>
            <Link className='text-lg font-medium' to='/About' >About</Link>
            <Link className='text-lg font-medium' to='/Contact' >Contact</Link>
            <Link className='text-lg font-medium' to='/Product' >Product</Link>
            <Link className='font-medium text-lg ' to='/Courses'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar