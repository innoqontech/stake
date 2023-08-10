import React from 'react'
import styled from 'styled-components'
import { NavLink, Outlet } from 'react-router-dom'
import '../../../styles/Active.css'
import Taskbar_nav from '../../../components/Taskbar_nav'
import Right_bar from '../../../components/Right_bar'

const Closed_tasks = () => {

  const UPPER = styled.div`
  
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px;

    * {
      padding: 20px 0;
    }

    .ifnocontent{
      font-weight: 700;
      font-size: 30px;
    }

    .txt-head{
      font-weight: 800;
    }
    .txt{
      font-weight: 700;
      width: 800px;
    }
    .active{
      background: none;
    }
    a{
      text-decoration: none;
      color: black;
    }
  `

  return (
    <>
    
      <div className='upper'>
        <Taskbar_nav heading="Closed Tasks"/>
        <UPPER className="inupper">
          {/* if there is no tasks which are closed just show this */}
          <p><NavLink>Invite team members</NavLink> to enable these collaborative features!</p>
          <p className="ifnocontent">NO Content</p>
          {/* if not the load some other content */}
          <p className='txt-head'>There are no tasks assigned.</p>
          <p className='txt'>Your team can assign tasks to each other when they see a message or profile they 
think should be viewed by another team member. Anybody on the team can add internal
comments about the task.</p>
        </UPPER>

      </div>
        <Right_bar />
    
    </>

  )
}

export default Closed_tasks
