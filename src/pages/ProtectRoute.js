import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoute({isLoggedIn}) {
  const token = localStorage.getItem('token');
  return (
    <div>
      {token || isLoggedIn ? <Outlet /> : <Navigate to="/" />}
    </div>
  )
}

export default ProtectRoute
