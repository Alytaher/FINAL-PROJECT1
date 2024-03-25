import React from 'react'
import Navbar from '../NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function LayOut() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
