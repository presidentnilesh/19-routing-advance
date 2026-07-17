import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    // this method is use to take any input 
    const params = useParams()
      return (
    <div>
        <h1>'{params.Courseid}' CourseDetail</h1>
    </div>
  )
}

export default CourseDetail