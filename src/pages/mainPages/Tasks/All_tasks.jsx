import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../styles/Active.css'
import Taskbar_nav from '../../../components/Taskbar_nav'

const All_tasks = () => {
  return (
    <div className='upper'>
      <Taskbar_nav heading='All Tasks'/>
      <div className="inupper">
        
      </div>
{/* 
      <Outlet /> */}
    </div>
  )
}

export default All_tasks
