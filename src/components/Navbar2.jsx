import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar2 = () => {

     // useNevigate is use to navigate the page from a place to another 
    let navigate = useNavigate()

  return (
<>

    <div className="bg-red-500 text-white p-10">
  Test
</div>
    <div className='px-5 py-3 bg-cyan-400'>
        <button onClick={()=>{
        navigate('/')
      }} className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >Return to home page</button>

      <button onClick={()=>{
        navigate(-1)  // -1 is use to go the page back.   
      }} className='bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >Back</button>
    </div>
    </>
  )
}

export default NavBar2