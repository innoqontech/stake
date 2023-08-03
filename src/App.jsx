import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Stories from './pages/Stories'
import Pricing from './pages/Pricing'
import Demo from './pages/Demo'
import Features from './pages/Features'
import Dashboard from './pages/Dashboard'
// import Tasks from './pages/mainPages/Tasks'
import Tasks from './pages/mainPages/Tasks'

function App() {
  
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/stories' element={<Stories/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/demo' element={<Demo/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    // <>
    //   <Pricing/>
    // </>
  )
}

export default App
