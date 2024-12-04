import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Email from '../../../Section/EmailSub/Email'

const OutletComponent = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      < Email/>
      <Footer />
    </>
  )
}

export default OutletComponent
