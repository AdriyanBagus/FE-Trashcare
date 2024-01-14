import React from 'react'
import Sidebar from '../component/sidebar/Sidebar'

export const Admin = () => {
  return (
    <div className="app-container">
    <Sidebar />
    <div className="content">
      <h1>Hallo Admin!</h1>
    </div>
  </div>
  )
}

export default Admin