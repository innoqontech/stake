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
import Tasks from './pages/mainPages/Tasks/Tasks'
import Teams from './pages/mainPages/Teams/Teams'
import Inbox from './pages/mainPages/Inbox/Inbox'
import Active from './pages/mainPages/Tasks/Active'
import Taskbar_nav from './components/Taskbar_nav'
import Closed_tasks from './pages/mainPages/Tasks/Closed_tasks'
import All_tasks from './pages/mainPages/Tasks/All_tasks'

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
          {/* <Route path='/dashboard' element={<Dashboard/>}/> */}
          <Route path='/inbox' element={<Inbox/>}/>
          <Route path='/teams' element={<Teams/>}/>
          <Route path='/tasks' element={<Tasks/>}>
            <Route path='active' element={<Active/>}/>
            <Route path='closed' element={<Closed_tasks/>}/>
            <Route path='all' element={<All_tasks/>}/>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
    // <>
    //   <Pricing/>
    // </>
  )
}

export default App
