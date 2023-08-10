import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar'
import '../../../styles/Tasks.css'
import styled from 'styled-components';

// work on this 
const Tasks = () => {

  const Tak = styled.div`
    display: flex;

    .intaskslink{
      display: flex;
      flex-direction: column;
    }

    .intaskslink > * {
        color: white;
        text-decoration: none;
        margin: 10px 0;
        padding: 10px;
        font-weight: 700;
        border-radius: 5px;
    }
  
    .justchecking{
        background-color: #364141;
        width: 13vw;
    }

    .injustchecking{
        padding: 20px;
        color: white;
    }

    .head_ing{
        padding-bottom: 20px;
        border-bottom: 2px solid white;
    }

    .head_ing p{
      font-weight: 500;
      font-size: 12px;
    }

    .head_ing span{
      font-weight: 700;
      font-size: 20px;
    }

  `

  const DIV = styled.div`
    .active{
      background-color: #273333;
    }
  `

  return (
    <Tak className='main_pg'>
      <Sidebar />
      
      <div className="justchecking">
        <div className="injustchecking">
          <div className="head_ing">
            <p>Shrivastava Group</p>
            <span>Tasks</span>
          </div>
          <DIV className="intaskslink">
            <NavLink to='active'>Active</NavLink>
            <NavLink to='closed'>Closed</NavLink>
            <NavLink to='all'>All Public Tasks</NavLink>
          </DIV>
        </div>
      </div>
      <Outlet/>
    </Tak>
  )
}

export default Tasks
