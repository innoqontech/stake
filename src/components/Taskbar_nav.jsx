import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Taskbar_nav = (props) => {

    const NAV = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #0B0B0B;
        padding-bottom: 20px;
        background-color: transparent;

        a{
            text-decoration: none;
            color: black;
            padding: 10px 20px;
            background-color: white;
            font-weight: 600;
            font-size: 17px;
            border-radius: 10px;
            border: 1.5px solid black;
        }

        a:hover{
          background-color: #2079C3;
          /* border: 2px solid white; */
          transition: 0.5s ease;
          color: white;
        }
    `

  return (
    <>
      <NAV className="tasks_nav">
            <h2>{props.heading}</h2>
            <div>
                <NavLink to='acc-upgrade'>Upgrade for free</NavLink>
            </div>
     </NAV>
    </>
  )
}

export default Taskbar_nav
