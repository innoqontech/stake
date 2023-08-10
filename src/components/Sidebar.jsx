import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/sidebar/stakelogo.png';
import dashlogo from '../assets/images/sidebar/Dashlogo.svg'
import inbox from '../assets/images/sidebar/inbox.svg'
import analytics from '../assets/images/sidebar/analytics.svg'
import posting from '../assets/images/sidebar/Posting.svg'
import report from '../assets/images/sidebar/report.svg'
import task from '../assets/images/sidebar/task.svg'
import teams from '../assets/images/sidebar/Teams.svg'
import styled from 'styled-components';
import '../styles/Sidebar.css';

const Sidebar = () => {

    const DIV = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #273333;
        width: 5vw;
        height: 100vh;
    

        .link img{
            width: 25px;
        }
        
        .dashlink img{
            width: 85px;
        }

        .midlg{
            display: flex;
            flex-direction: column;
            align-items: center;           
        }

        .active{
            background-color: #0000004d;
            padding: 2px;
            border-radius: 5px;
        }
        
    `

  return (
    <DIV className='dove'>
        {/* logo link */}
        <div className="lg">
            <NavLink className='dashlink' to='/dashboard'>
                <img src={logo} alt="" />
            </NavLink>
        </div>
        {/* middle Links */}
        <div className="midlg">
            <NavLink className='link' to='/dashboard'>
                <img src={dashlogo} alt="" />
            </NavLink>
            <NavLink className='link' to='/inbox'>
                <img src={inbox} alt="" />
            </NavLink>
            <NavLink className='link' to='/tasks'>
                <img src={task} alt="" />
            </NavLink>
            <NavLink className='link' to='/teams'>
                <img src={teams} alt="" />
            </NavLink>
            <NavLink className='link' to='/posting'>
                <img src={posting} alt="" />
            </NavLink>
            <NavLink className='link' to='/analytics'>
                <img src={analytics} alt="" />
            </NavLink>
            <NavLink className='link' to='/report'>
                <img src={report} alt="" />
            </NavLink>
        </div>
        {/* end user lg */}
        <div className="userlg">
            {/* here the user's logo must appear from db */}
            <NavLink className='blink' to='/report'>
                {/* <img src={report} alt="" /> */}
            </NavLink>
        </div>
    </DIV>
  )
}

export default Sidebar
