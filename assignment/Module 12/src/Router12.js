import React from 'react'
import Home from './Home'
import About from './About'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router';
import Services from './Services';
import Service2 from './Service2';
import Service1 from './Service1';


export default function Router12() {
  return (
    <div>
        <Link to="/" >Home</Link>
        <Link to="/About" target='_blank'>About</Link>
        <Link to="/Services" target='_blank'>Services</Link>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}> </Route>
            <Route path="/Services" element={<Services/>}>
                <Route path="Services/Service1" element={<Service1/>}></Route>
                <Route path="Services/Service2" element={<Service2/>}></Route>
            </Route>

        </Routes>
    </div>

  )
}
