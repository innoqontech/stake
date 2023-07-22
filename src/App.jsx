import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Stories from './pages/Stories'
import Pricing from './pages/Pricing'
import Demo from './pages/Demo'

function App() {
  
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/stories' element={<Stories/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
          <Route path='/demo' element={<Demo/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    // <>
    //   <Pricing/>
    // </>
  )
}

export default App
