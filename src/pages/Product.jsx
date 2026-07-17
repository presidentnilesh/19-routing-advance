import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        
        <div className='flex justify-center gap-4 text-xl p-4 font-semibold'>
        <Link to='/Product/Men'>Men</Link>

        <Link to='/Product/Women'>Women</Link>
        <Link to='/Product/Kids'>Kids </Link>
        </div>
        <Outlet />
    </div>
  )
}
export default Product