import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../styles/Active.css'
import Taskbar_nav from '../../../components/Taskbar_nav'
import pencil from '../../../assets/images/right-sidebar/pencil.png'
import chat from '../../../assets/images/right-sidebar/Chat.png'
import credit from '../../../assets/images/right-sidebar/Credit.png'
import help from '../../../assets/images/right-sidebar/help.png'
import notification from '../../../assets/images/right-sidebar/notification.png'
import connect from '../../../assets/images/right-sidebar/connect-profile.png'

const Active = () => {
  return (
    <>
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
      <div className="inright_icons">
          <img src={pencil} className='actives' alt="" />
          <img src={chat} alt="" />
          <img src={connect} alt="" />
          <img src={help} alt="" />
          <img src={credit} alt="" />
          <img src={notification} alt="" />
        </div>
    </>
  )
}

export default Active
