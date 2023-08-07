import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../styles/Active.css'
import Taskbar_nav from '../../../components/Taskbar_nav'

const Closed_tasks = () => {
  return (
    <div className='upper'>
      <Taskbar_nav heading="Closed Tasks"/>
      <div className="inupper">

      </div>
{/* 
      <Outlet /> */}
    </div>
  )
}

export default Closed_tasks
