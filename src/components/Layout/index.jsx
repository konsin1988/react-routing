import { Link, Outlet } from 'react-router-dom'

import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { GoBackButton } from '../GoBackButton'

export const Layout = () => {
  return (
    <>
    <Header/>
    <GoBackButton/>
    <Outlet/>
    <Footer/>
    </>
  )
}
