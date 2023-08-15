import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../styles/Active.css'
import Taskbar_nav from '../../../components/Taskbar_nav'
import Right_bar from '../../../components/Right_bar'
import StickyHeadTable from '../../../components/Test'

const All_tasks = () => {
  return (
    <>
    
      <div className='upper'>
        <Taskbar_nav heading="All Tasks"/>
        <div className="inupper">
          <StickyHeadTable/>
        </div>
  {/* 
        <Outlet /> */}
      </div>
        <Right_bar />
    
    </>
  )
}

export default All_tasks
