import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../styles/Active.css'
import Taskbar_nav from '../../../components/Taskbar_nav'

const Active = () => {
  return (
    <div className='upper'>
      <Taskbar_nav heading='Tasks'/>
      <div className="inupper">
        <div className="hor_container">
              <div className="first containers">
                  <h2>0 To Do</h2>
                  <p>in the last 7 days</p>
              </div>
              <div className="second containers">
                  <h2>0 In Progress</h2>
                  <p>in the last 7 days</p>
              </div>
              <div className="third containers">
                  <h2>0 Done</h2>
                  <p>in the last 7 days</p>
              </div>
          </div>
          <div className="vert_container">
            
          </div>
      </div>
{/* 
      <Outlet /> */}
    </div>
  )
}

export default Active
