import React from 'react'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Product from './Product'
import Careers from './Careers'
import Contact from './Contact'
import NotFound from './NotFound'
import './style.css'
import {Routes,Route} from 'react-router-dom'
const MainRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
    
            <Route path='/' element={<Home />}></Route>
            <Route path='product' element={<Product />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='careers' element={<Careers />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default MainRouter