import React from 'react'
import './SidebarButton.css'
import styled from 'styled-components'



const SidebarButton = ({label, onClick, logo}) => {
  return (
    <div>
      <button className="sidebar-button" onClick={onClick}>
        <img src={logo} alt="button-logo" />
        <p>{label}</p>
      </button>
    </div>
  )
}

export default SidebarButton
