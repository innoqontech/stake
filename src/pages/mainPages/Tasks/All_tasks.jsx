import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../styles/Active.css'
import Taskbar_nav from '../../../components/Taskbar_nav'
import Right_bar from '../../../components/Right_bar'

const All_tasks = () => {
  return (
    <>
    
      <div className='upper'>
        <Taskbar_nav heading="All Tasks"/>
        <div className="inupper">

        </div>
  {/* 
        <Outlet /> */}
      </div>
        <Right_bar />
    
    </>
  )
}

export default All_tasks
