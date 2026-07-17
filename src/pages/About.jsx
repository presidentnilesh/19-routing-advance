import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  // useNevigate is use to navigate the page from a place to another 
  let navigate = useNavigate()

  

  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }} className='bg-emerald-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >Return to home page</button>

      <button onClick={()=>{
        navigate(-1)  // -1 is use to go the page back.   
      }} className='bg-emerald-900 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' >Back</button>
        <h1>About</h1>
    </div>
  )
}

export default About