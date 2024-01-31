import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Private_Routes() {

   const loggedis = localStorage.getItem("Loggedis")
   
  return loggedis ?(
    <>
    <Outlet/>
    </>):(
        <Navigate to="/login" />
  )
}
