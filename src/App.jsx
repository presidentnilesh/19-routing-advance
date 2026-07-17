import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Product from './pages/Product'
import Home from './pages/Home'
import Contact from './pages/Contact'
import {Routes , Route} from 'react-router-dom'
import NoteFOund from './pages/NoteFOund'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail' 

const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Courses' element={<Courses />}/>
        <Route path='/Courses/:Courseid' element={<CourseDetail />} />
        <Route path='/Product' element={<Product />}>
          <Route path='Men' element={<Men />}/>
          <Route path='Women' element={<Women />}/>
          <Route path='Kids' element={<Kids />}/>
        </Route>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='*' element={<NoteFOund />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App