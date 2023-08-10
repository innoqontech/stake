import React from 'react'
import '../styles/Right_bar.css'
import styled from 'styled-components'
import pencil from '../assets/images/right-sidebar/pencil.png'
import chat from '../assets/images/right-sidebar/Chat.png'
import credit from '../assets/images/right-sidebar/Credit.png'
import help from '../assets/images/right-sidebar/help.png'
import notification from '../assets/images/right-sidebar/notification.png'
import connect from '../assets/images/right-sidebar/connect-profile.png'

const Right_bar = () => {

  // console.log("object");

  return (
    <>
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

export default Right_bar
