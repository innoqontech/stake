import React from 'react'
import Sidebar from '../../../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Inbox = () => {
  return (
    <div>
      <Sidebar />

      <Outlet />
    </div>
  )
}

export default Inbox
