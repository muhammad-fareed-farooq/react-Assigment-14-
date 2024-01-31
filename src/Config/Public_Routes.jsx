import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Public_Routes() {
 
    const logeedis = localStorage.getItem("Loggedis")

  return !logeedis ? <Outlet/> : <Navigate to="/"/>
}
